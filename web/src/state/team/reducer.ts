import { buildReducer, newActionHandler } from '../../util';
import { initialTeamState, teamEggcorn } from '.';

export const reducer = buildReducer(initialTeamState, [
  newActionHandler(teamEggcorn, (_state, _username) => {
    console.log('handling team eggcorn action');
  })
]);
