import { ClientCredentials } from 'mmdb-client-factory';
import { MtbwClient } from './types';
export declare class MtbwClientFactory {
    constructor();
    static create(baseUrl: string, credentials?: ClientCredentials): Promise<MtbwClient>;
}
