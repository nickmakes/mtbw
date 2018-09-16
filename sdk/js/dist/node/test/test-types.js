"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mmdb_client_factory_1 = require("mmdb-client-factory");
exports.createTestTeam = function () { return ({
    ownerName: mmdb_client_factory_1.randomString(128),
    name: mmdb_client_factory_1.randomString(128),
}); };
exports.createTestPlayer = function () { return ({
    name: mmdb_client_factory_1.randomString(128),
    price: mmdb_client_factory_1.randomInt(1000000),
}); };
//# sourceMappingURL=test-types.js.map