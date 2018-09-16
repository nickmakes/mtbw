import actionCreatorFactory from 'typescript-fsa';

const teamAction = actionCreatorFactory('team');

export const teamEggcorn = teamAction('eggcorn');
