"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mmdb_client_factory_1 = require("mmdb-client-factory");
var test_harness_1 = require("../test-harness");
var test_types_1 = require("../test-types");
describe('mtbw players', function () {
    var th = new test_harness_1.TestHarness();
    var testPlayer;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.setup()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.players().create(test_types_1.createTestPlayer())];
                case 2:
                    testPlayer = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().player(testPlayer.id).remove()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all players', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().list()];
                case 1:
                    res = _a.sent();
                    expect(res.length).toBe(1);
                    expect(res[0]).toMatchObject(testPlayer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should count all players', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().count()];
                case 1:
                    res = _a.sent();
                    expect(res).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should get a player', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().player(testPlayer.id).get()];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchObject(testPlayer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should check a player exists', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().player(testPlayer.id).check()];
                case 1:
                    res = _a.sent();
                    expect(res).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should update a player', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var updatePlayer, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updatePlayer = tslib_1.__assign({}, testPlayer, { name: mmdb_client_factory_1.randomString(128), price: mmdb_client_factory_1.randomInt(1000000) });
                    delete updatePlayer.createdOn;
                    delete updatePlayer.modifiedOn;
                    return [4 /*yield*/, th.client.api.players().player(testPlayer.id).update(updatePlayer)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.players().player(testPlayer.id).get()];
                case 2:
                    res = _a.sent();
                    expect(res).toMatchObject(updatePlayer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should clear all players', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var count;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.players().count()];
                case 1:
                    count = _a.sent();
                    expect(count).toBe(1);
                    return [4 /*yield*/, th.client.api.players().clear()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.players().count()];
                case 3:
                    count = _a.sent();
                    expect(count).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=players.test.js.map