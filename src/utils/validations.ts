function constructorName(value: any) {
  return value?.constructor?.name
}

function isFunction(value: any) {
  return constructorName(value) === 'Function'
}

function isObject(value: any) {
  return constructorName(value) === 'Object'
}

function isArray(value: any): value is Array<any> {
  return constructorName(value) === 'Array'
}

function isArrayBuffer(value: any) {
  return constructorName(value) === 'ArrayBuffer'
}

function isTypedArray(value: any) {
  const typedArrayList = [
    Int16Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
  ]

  return typedArrayList.includes(constructorName(value))
}

function isMap(value: any): value is Map<any, any> {
  return constructorName(value) === 'Map'
}

function isSet(value: any): value is Set<any> {
  return constructorName(value) === 'Set'
}

function isDate(value: any): value is Date {
  return constructorName(value) === 'Date'
}

function isSymbol(value: any): value is symbol {
  return constructorName(value) === 'Symbol'
}

function isRegExp(value: any): value is RegExp {
  return constructorName(value) === 'RegExp'
}

function isProxy(value: any) {
  return value?.target !== undefined
}

export {
  constructorName,
  isFunction,
  isObject,
  isArray,
  isArrayBuffer,
  isTypedArray,
  isMap,
  isSet,
  isDate,
  isSymbol,
  isRegExp,
  isProxy,
}
