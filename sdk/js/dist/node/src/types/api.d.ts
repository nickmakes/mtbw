import { HttpRequests, ApiClient } from 'mmdb-client-factory';
import { Team, Player } from '.';
export declare type MtbwApi = ReturnType<typeof apiSupplier>;
export declare type MtbwClient = ApiClient<MtbwApi>;
export declare const apiSupplier: (http: HttpRequests) => {
    teams: () => {
        list: () => Promise<Team[]>;
        count: () => Promise<number>;
        create: (data: Team) => Promise<Team>;
        clear: () => Promise<void>;
        team: (id: string) => {
            get: () => Promise<Team>;
            check: () => Promise<boolean>;
            update: (data: Team) => Promise<Team>;
            remove: () => Promise<void>;
        };
    };
    players: () => {
        list: () => Promise<Player[]>;
        count: () => Promise<number>;
        create: (data: Player) => Promise<Player>;
        clear: () => Promise<void>;
        player: (id: string) => {
            get: () => Promise<Player>;
            check: () => Promise<boolean>;
            update: (data: Player) => Promise<Player>;
            remove: () => Promise<void>;
        };
    };
};
