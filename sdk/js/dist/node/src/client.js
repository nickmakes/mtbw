"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mmdb_client_factory_1 = require("mmdb-client-factory");
var types_1 = require("./types");
var MtbwClientFactory = /** @class */ (function () {
    function MtbwClientFactory() {
        throw new mmdb_client_factory_1.MmdbClientError('startup', 'mtbw client cannot be isntantiated, use the static create method instead');
    }
    MtbwClientFactory.create = function (baseUrl, credentials) {
        return mmdb_client_factory_1.ClientFactory.buildApi({ api: types_1.apiSupplier, baseUrl: baseUrl, credentials: credentials });
    };
    return MtbwClientFactory;
}());
exports.MtbwClientFactory = MtbwClientFactory;
//# sourceMappingURL=client.js.map