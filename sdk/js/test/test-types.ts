import { randomInt, randomString } from 'mmdb-client-factory';
import { Team, Player } from '../src';

  export const createTestTeam = (): Team => ({
    ownerName: randomString(128),
    name: randomString(128),
  });

  export const createTestPlayer = (): Player => ({
    name: randomString(128),
    price: randomInt(1000000),
  });