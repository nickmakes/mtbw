import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { MtbwClientFactory } from "mtbw-sdk";

import { AppHarness } from "./app-harness";
import { AppRouter } from "./app-router";

require("../static/favicon.ico");
require("../static/index.less");

// TODO: extract url and credentials to env vars
MtbwClientFactory.create("http://localhost:7077", {
  username: "admin",
  password: "Ma3pb$69"
}).then(client => {
  const app = new AppHarness(client, process.env);

  const renderApp = (Component: typeof AppRouter) =>
    render(
      <Provider store={app.store}>
        <AppContainer>
          <Component history={app.history} />
        </AppContainer>
      </Provider>,
      document.getElementById("root")
    );

  renderApp(AppRouter);

  if ((module as any).hot) {
    (module as any).hot.accept("./app-router", () => {
      const appRouter = require("./app-router");
      renderApp(appRouter);
    });
  }
});
