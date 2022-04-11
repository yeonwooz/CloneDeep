"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = void 0;
var utils = require("./utils/index.js");
function recursive(value) {
    for (var _i = 0, _a = utils.copyValidations; _i < _a.length; _i++) {
        var _b = _a[_i], validation = _b.validation, copy = _b.copy;
        if (validation(value)) {
            return copy(value);
        }
    }
    if (utils.isProxy(value) || !utils.hasChild(value)) {
        return value;
    }
    var cloned = {};
    for (var key in value) {
        cloned[key] = recursive(value[key]);
    }
    return cloned;
}
function cloneDeep(value) {
    return recursive(value);
}
exports.cloneDeep = cloneDeep;
//# sourceMappingURL=cloneDeep.js.map