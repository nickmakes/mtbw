import { randomString } from 'mmdb-client-factory';
import { Team } from '../../src';
import { TestHarness } from '../test-harness';
import { createTestTeam } from '../test-types';

describe('mtbw teams', () => {
  const th = new TestHarness();
  let testTeam: Team

  beforeEach(async () => {
    await th.setup();
    testTeam = await th.client.api.teams().create(createTestTeam());
  });

  afterEach(async () => {
    await th.client.api.teams().team(testTeam.id!).remove();
  });

  it('should list all teams', async () => {
    const res = await th.client.api.teams().list();
  
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject(testTeam);
  });

  it('should count all teams', async () => {
    const res = await th.client.api.teams().count();
  
    expect(res).toBe(1);
  });

  it('should get a team', async () => {
    const res = await th.client.api.teams().team(testTeam.id!).get();
  
    expect(res).toMatchObject(testTeam);
  });

  it('should check a team exists', async () => {
    const res = await th.client.api.teams().team(testTeam.id!).check();
  
    expect(res).toBe(true);
  });

  it('should update a team', async () => {
    const updateTeam: Team = {
      ...testTeam,
      ownerName: randomString(128),
      name: randomString(128),
    };
    delete updateTeam.createdOn;
    delete updateTeam.modifiedOn;
  
    await th.client.api.teams().team(testTeam.id!).update(updateTeam);
  
    const res = await th.client.api.teams().team(testTeam.id!).get();
  
    expect(res).toMatchObject(updateTeam);
  });

  it('should clear all teams', async () => {
    let count = await th.client.api.teams().count();
    expect(count).toBe(1);
  
    await th.client.api.teams().clear();
  
    count = await th.client.api.teams().count();
    expect(count).toBe(0);
  });
});