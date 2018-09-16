import {Player} from 'mtbw-sdk';

export interface PlayerState {
  players: Player[];
}

export const initialPlayerState: PlayerState = { players: [] };
