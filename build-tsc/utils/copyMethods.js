"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyMath = exports.copyObject = exports.copyPrimitive = exports.copySymbol = exports.copyRegExp = exports.copySet = exports.copyMap = exports.copyDate = exports.copyTypedArray = exports.copyArray = void 0;
var cloneDeep_1 = require("../cloneDeep");
function copyArray(value) {
    return value.reduce(function (arr, item, i) {
        arr[i] = (0, cloneDeep_1.cloneDeep)(item);
        return arr;
    }, []);
}
exports.copyArray = copyArray;
function copyTypedArray(value) {
    return new value.constructor(value);
}
exports.copyTypedArray = copyTypedArray;
function copyDate(value) {
    return new Date(value.getTime());
}
exports.copyDate = copyDate;
function copyMap(value) {
    var result = new Map();
    value.forEach(function (val, key) {
        result.set(key, (0, cloneDeep_1.cloneDeep)(val));
    });
    return result;
}
exports.copyMap = copyMap;
function copySet(value) {
    var result = new Set();
    value.forEach(function (val) {
        result.add((0, cloneDeep_1.cloneDeep)(val));
    });
    return result;
}
exports.copySet = copySet;
function copyRegExp(value) {
    return new RegExp(value.source, value.flags);
}
exports.copyRegExp = copyRegExp;
function copySymbol(value) {
    var strSymbol = String(value);
    var braketIndex = strSymbol.indexOf('(');
    var strValue = strSymbol.substring(braketIndex).replace(/\(|\)/g, '');
    return parseInt(strValue) ? Symbol(+strValue) : Symbol(strValue);
}
exports.copySymbol = copySymbol;
function copyPrimitive(value) {
    return value;
}
exports.copyPrimitive = copyPrimitive;
function copyObject(value) {
    return Object.keys(value).reduce(function (obj, key) {
        obj[key] = (0, cloneDeep_1.cloneDeep)(value[key]);
        return obj;
    }, {});
}
exports.copyObject = copyObject;
function copyMath(value) {
    return value;
}
exports.copyMath = copyMath;
//# sourceMappingURL=copyMethods.js.map