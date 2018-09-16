import actionCreatorFactory from 'typescript-fsa';

const playerAction = actionCreatorFactory('player');

export const playerEggcorn = playerAction('eggcorn');
