"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mmdb_client_factory_1 = require("mmdb-client-factory");
var src_1 = require("../src");
var TestHarness = /** @class */ (function () {
    function TestHarness(baseUrl) {
        if (baseUrl === void 0) { baseUrl = 'http://localhost:7077'; }
        this.baseUrl = baseUrl;
    }
    TestHarness.prototype.setup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, src_1.MtbwClientFactory.create(this.baseUrl, {
                                username: 'admin',
                                password: 'Ma3pb$69'
                            })];
                    case 1:
                        _a._client = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestHarness.prototype.teardown = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Object.defineProperty(TestHarness.prototype, "client", {
        get: function () {
            if (this._client) {
                return this._client;
            }
            throw new mmdb_client_factory_1.MmdbClientError('test', 'cannot request access to client before invoking this.setup()');
        },
        enumerable: true,
        configurable: true
    });
    return TestHarness;
}());
exports.TestHarness = TestHarness;
//# sourceMappingURL=test-harness.js.map