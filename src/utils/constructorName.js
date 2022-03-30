function constructorName (obj) {
    return obj?.constructor?.name
}

function isFunction(obj) {
    return (constructorName(obj) === 'Function')
}

function isObject(obj) {
    return (constructorName(obj) === 'Object')
}

function isArray(obj) {
    return (constructorName(obj) === 'Array')
}

function isArrayBuffer(obj) {
    return (constructorName(obj) === 'ArrayBuffer')
}

function isTypedArray(obj) {
    const typedArrayList = [
        Int16Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
    ]  

    return typedArrayList.includes(constructorName(obj))
}

function isProxy(obj) {
    return obj?.target !== undefined
}

export { constructorName, isFunction, isObject, isArray, isArrayBuffer, isTypedArray, isProxy }