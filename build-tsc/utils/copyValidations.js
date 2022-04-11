"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyValidations = void 0;
var utils = require("./index.js");
var copyValidations = [
    { validation: utils.isArray, copy: utils.copyArray },
    { validation: utils.isPrimitive, copy: utils.copyPrimitive },
    { validation: utils.isDate, copy: utils.copyDate },
    { validation: utils.isMap, copy: utils.copyMap },
    { validation: utils.isSet, copy: utils.copySet },
    { validation: utils.isRegExp, copy: utils.copyRegExp },
    { validation: utils.isSet, copy: utils.copySet },
    { validation: utils.isSymbol, copy: utils.copySymbol },
];
exports.copyValidations = copyValidations;
//# sourceMappingURL=copyValidations.js.map