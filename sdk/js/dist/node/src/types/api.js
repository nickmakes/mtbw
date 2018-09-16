"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mmdb_client_factory_1 = require("mmdb-client-factory");
var options = function (o) {
    if (o === void 0) { o = {}; }
    return (tslib_1.__assign({ contentType: mmdb_client_factory_1.MediaType.APPLICATION_JSON }, o));
};
exports.apiSupplier = function (http) { return ({
    teams: function () {
        var teamsUrl = 'teams';
        return {
            list: function () { return http.get(teamsUrl, options()); },
            count: function () { return http.get(teamsUrl + "/count", options()); },
            create: function (data) {
                return http.post(teamsUrl, options({ body: JSON.stringify(data) }));
            },
            clear: function () { return http.delete(teamsUrl, options()); },
            team: function (id) {
                var teamUrl = teamsUrl + "/" + id;
                return {
                    get: function () { return http.get(teamUrl, options({})); },
                    check: function () { return http.get(teamUrl + "/check", options({})); },
                    update: function (data) { return http.put(teamUrl, options({ body: JSON.stringify(data) })); },
                    remove: function () { return http.delete(teamUrl, options({})); },
                };
            }
        };
    },
    players: function () {
        var playersUrl = 'players';
        return {
            list: function () { return http.get(playersUrl, options()); },
            count: function () { return http.get(playersUrl + "/count", options()); },
            create: function (data) {
                return http.post(playersUrl, options({ body: JSON.stringify(data) }));
            },
            clear: function () { return http.delete(playersUrl, options()); },
            player: function (id) {
                var playerUrl = playersUrl + "/" + id;
                return {
                    get: function () { return http.get(playerUrl, options({})); },
                    check: function () { return http.get(playerUrl + "/check", options({})); },
                    update: function (data) { return http.put(playerUrl, options({ body: JSON.stringify(data) })); },
                    remove: function () { return http.delete(playerUrl, options({})); },
                };
            }
        };
    },
}); };
//# sourceMappingURL=api.js.map