export declare class TestHarness {
    private baseUrl;
    private _client?;
    constructor(baseUrl?: string);
    setup(): Promise<void>;
    teardown(): Promise<void>;
    readonly client: import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/node_modules/mmdb-client-factory/dist/node/src/types/client").ApiClient<{
        teams: () => {
            list: () => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team[]>;
            count: () => Promise<number>;
            create: (data: import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team) => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team>;
            clear: () => Promise<void>;
            team: (id: string) => {
                get: () => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team>;
                check: () => Promise<boolean>;
                update: (data: import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team) => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/team").Team>;
                remove: () => Promise<void>;
            };
        };
        players: () => {
            list: () => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player[]>;
            count: () => Promise<number>;
            create: (data: import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player) => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player>;
            clear: () => Promise<void>;
            player: (id: string) => {
                get: () => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player>;
                check: () => Promise<boolean>;
                update: (data: import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player) => Promise<import("../../../../../../../../../../../Users/mmdb/dev/code/src/github.com/nickmakes/mtbw/sdk/js/src/types/player").Player>;
                remove: () => Promise<void>;
            };
        };
    }>;
}
