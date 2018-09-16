import { combineReducers, Reducer } from 'redux';
import { AppState } from './app-state';
import { reducer as teamReducer } from './team';
import { reducer as playerReducer } from './player';

export const reducers: Reducer<AppState> = combineReducers({
  team: teamReducer,
  player: playerReducer,
});