import { ClientFactory, ClientCredentials, MmdbClientError } from 'mmdb-client-factory';
import { apiSupplier as api, MtbwApi, MtbwClient } from './types';

export class MtbwClientFactory {
  constructor() {
    throw new MmdbClientError(
      'startup',
      'mtbw client cannot be isntantiated, use the static create method instead'
    );
  }

static create(baseUrl: string, credentials?: ClientCredentials): Promise<MtbwClient> {
    return ClientFactory.buildApi<MtbwApi>({ api, baseUrl, credentials });
  }
}