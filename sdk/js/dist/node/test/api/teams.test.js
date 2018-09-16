"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mmdb_client_factory_1 = require("mmdb-client-factory");
var test_harness_1 = require("../test-harness");
var test_types_1 = require("../test-types");
describe('mtbw teams', function () {
    var th = new test_harness_1.TestHarness();
    var testTeam;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.setup()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.teams().create(test_types_1.createTestTeam())];
                case 2:
                    testTeam = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().team(testTeam.id).remove()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all teams', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().list()];
                case 1:
                    res = _a.sent();
                    expect(res.length).toBe(1);
                    expect(res[0]).toMatchObject(testTeam);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should count all teams', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().count()];
                case 1:
                    res = _a.sent();
                    expect(res).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should get a team', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().team(testTeam.id).get()];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchObject(testTeam);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should check a team exists', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().team(testTeam.id).check()];
                case 1:
                    res = _a.sent();
                    expect(res).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should update a team', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var updateTeam, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateTeam = tslib_1.__assign({}, testTeam, { ownerName: mmdb_client_factory_1.randomString(128), name: mmdb_client_factory_1.randomString(128) });
                    delete updateTeam.createdOn;
                    delete updateTeam.modifiedOn;
                    return [4 /*yield*/, th.client.api.teams().team(testTeam.id).update(updateTeam)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.teams().team(testTeam.id).get()];
                case 2:
                    res = _a.sent();
                    expect(res).toMatchObject(updateTeam);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should clear all teams', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var count;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, th.client.api.teams().count()];
                case 1:
                    count = _a.sent();
                    expect(count).toBe(1);
                    return [4 /*yield*/, th.client.api.teams().clear()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, th.client.api.teams().count()];
                case 3:
                    count = _a.sent();
                    expect(count).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=teams.test.js.map