"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyProxy = exports.copyPrimitive = exports.copySymbol = exports.copyRegExp = exports.copySet = exports.copyMap = exports.copyDate = exports.copyTypedArray = exports.copyArrayBuffer = exports.copyArray = void 0;
var cloneDeep_1 = require("../cloneDeep");
function copyArray(value) {
    return value.reduce(function (arr, item, i) {
        arr[i] = (0, cloneDeep_1.cloneDeep)(item);
        return arr;
    }, []);
}
exports.copyArray = copyArray;
function copyArrayBuffer() { }
exports.copyArrayBuffer = copyArrayBuffer;
function copyTypedArray() { }
exports.copyTypedArray = copyTypedArray;
function copyDate(value) {
    return new Date(value.getTime());
}
exports.copyDate = copyDate;
function copyMap() { }
exports.copyMap = copyMap;
function copySet() { }
exports.copySet = copySet;
function copyRegExp() { }
exports.copyRegExp = copyRegExp;
function copySymbol() { }
exports.copySymbol = copySymbol;
function copyPrimitive(value) {
    return value;
}
exports.copyPrimitive = copyPrimitive;
function copyProxy() { }
exports.copyProxy = copyProxy;
//# sourceMappingURL=copyMethods.js.map