"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasChild = void 0;
var utils = require("./index.js");
function hasChild(obj) {
    if (utils.isPrimitive(obj)) {
        return false;
    }
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys.length > 0;
}
exports.hasChild = hasChild;
//# sourceMappingURL=hasChild.js.map