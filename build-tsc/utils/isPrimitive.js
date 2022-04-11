"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitive = void 0;
var isNulllish_js_1 = require("./isNulllish.js");
function isPrimitive(value) {
    return (0, isNulllish_js_1.isNullish)(value) || ['number', 'bigint', 'string', 'boolean', 'symbol'].includes(typeof value);
}
exports.isPrimitive = isPrimitive;
//# sourceMappingURL=isPrimitive.js.map