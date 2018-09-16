import { randomInt, randomString } from 'mmdb-client-factory';
import { Player } from '../../src';
import { TestHarness } from '../test-harness';
import { createTestPlayer } from '../test-types';

describe('mtbw players', () => {
  const th = new TestHarness();
  let testPlayer: Player

  beforeEach(async () => {
    await th.setup();
    testPlayer = await th.client.api.players().create(createTestPlayer());
  });

  afterEach(async () => {
    await th.client.api.players().player(testPlayer.id!).remove();
  });

  it('should list all players', async () => {
    const res = await th.client.api.players().list();
  
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject(testPlayer);
  });

  it('should count all players', async () => {
    const res = await th.client.api.players().count();
  
    expect(res).toBe(1);
  });

  it('should get a player', async () => {
    const res = await th.client.api.players().player(testPlayer.id!).get();
  
    expect(res).toMatchObject(testPlayer);
  });

  it('should check a player exists', async () => {
    const res = await th.client.api.players().player(testPlayer.id!).check();
  
    expect(res).toBe(true);
  });

  it('should update a player', async () => {
    const updatePlayer: Player = {
      ...testPlayer,
      name: randomString(128),
      price: randomInt(1000000),
    };
    delete updatePlayer.createdOn;
    delete updatePlayer.modifiedOn;
  
    await th.client.api.players().player(testPlayer.id!).update(updatePlayer);
  
    const res = await th.client.api.players().player(testPlayer.id!).get();
  
    expect(res).toMatchObject(updatePlayer);
  });

  it('should clear all players', async () => {
    let count = await th.client.api.players().count();
    expect(count).toBe(1);
  
    await th.client.api.players().clear();
  
    count = await th.client.api.players().count();
    expect(count).toBe(0);
  });
});