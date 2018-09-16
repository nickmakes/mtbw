import { buildReducer, newActionHandler } from '../../util';
import { initialPlayerState, playerEggcorn } from '.';

export const reducer = buildReducer(initialPlayerState, [
  newActionHandler(playerEggcorn, (_state, _username) => {
    console.log('handling player eggcorn action');
  })
]);
