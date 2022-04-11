"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProxy = exports.isRegExp = exports.isSymbol = exports.isDate = exports.isSet = exports.isMap = exports.isTypedArray = exports.isArrayBuffer = exports.isArray = exports.isObject = exports.isFunction = exports.constructorName = void 0;
function constructorName(value) {
    var _a;
    return (_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name;
}
exports.constructorName = constructorName;
function isFunction(value) {
    return constructorName(value) === 'Function';
}
exports.isFunction = isFunction;
function isObject(value) {
    return constructorName(value) === 'Object';
}
exports.isObject = isObject;
function isArray(value) {
    return constructorName(value) === 'Array';
}
exports.isArray = isArray;
function isArrayBuffer(value) {
    return constructorName(value) === 'ArrayBuffer';
}
exports.isArrayBuffer = isArrayBuffer;
function isTypedArray(value) {
    var typedArrayList = [
        Int16Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
    ];
    return typedArrayList.includes(constructorName(value));
}
exports.isTypedArray = isTypedArray;
function isMap(value) {
    return constructorName(value) === 'Map';
}
exports.isMap = isMap;
function isSet(value) {
    return constructorName(value) === 'Set';
}
exports.isSet = isSet;
function isDate(value) {
    return constructorName(value) === 'Date';
}
exports.isDate = isDate;
function isSymbol(value) {
    return constructorName(value) === 'Symbol';
}
exports.isSymbol = isSymbol;
function isRegExp(value) {
    return constructorName(value) === 'RegExp';
}
exports.isRegExp = isRegExp;
function isProxy(value) {
    return (value === null || value === void 0 ? void 0 : value.target) !== undefined;
}
exports.isProxy = isProxy;
//# sourceMappingURL=validations.js.map