"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('client factory', function () {
    it('should error out when constructed', function () {
        expect(function () { return new src_1.MtbwClientFactory(); }).toThrowError();
    });
});
//# sourceMappingURL=client.test.js.map