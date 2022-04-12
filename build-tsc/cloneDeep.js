"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = void 0;
var utils = require("@/index.js");
function cloneDeep(value) {
    for (var _i = 0, _a = utils.copyValidations; _i < _a.length; _i++) {
        var _b = _a[_i], copy = _b.copy, validation = _b.validation;
        if (validation(value)) {
            return copy(value);
        }
    }
    return value;
}
exports.cloneDeep = cloneDeep;
//# sourceMappingURL=cloneDeep.js.map