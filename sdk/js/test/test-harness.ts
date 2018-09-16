import { MmdbClientError } from 'mmdb-client-factory';
import { MtbwClient, MtbwClientFactory } from '../src';

export class TestHarness {
  private _client?: MtbwClient;

  constructor(private baseUrl: string = 'http://localhost:7077') {}

  async setup() {
    this._client = await MtbwClientFactory.create(this.baseUrl, {
      username: 'admin',
      password: 'Ma3pb$69'
    });
  }

  async teardown() {}

  get client() {
    if (this._client) {
      return this._client;
    }
    throw new MmdbClientError(
      'test',
      'cannot request access to client before invoking this.setup()'
    );
  }
}