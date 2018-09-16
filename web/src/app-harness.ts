import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { MtbwClient } from 'mtbw-sdk';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';

import { AppState, initialAppState, reducers } from './state';

const ENV_PROD = 'production';

export class AppHarness {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(public client: MtbwClient, public env: ProcessEnv) {
    this.history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
    this.middlewares = [thunk.withExtraArgument({ client, env })];

    this.middlewares.push(routerMiddleware(this.history));

    let composeEnhancers: <R>(a: R) => R;
    if (this.env.NODE_ENV !== ENV_PROD) {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
      composeEnhancers = compose;
    }

    this.store = createStore(
      connectRouter(this.history)(reducers),
      initialAppState,
      composeEnhancers(applyMiddleware(...this.middlewares))
    );
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
