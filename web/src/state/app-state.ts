import { MtbwClient } from 'mtbw-sdk';
import { RouterState } from 'connected-react-router';
import { TeamState, initialTeamState as team } from './team';
import { PlayerState, initialPlayerState as player } from './player';

export interface AsyncContext {
  client: MtbwClient
  env: ProcessEnv;
}
export interface AppState {
  team: TeamState;
  player: PlayerState;
  router?: RouterState;
}

export const initialAppState: AppState = { team, player };