function constructorName (obj) {
    return obj?.constructor?.name
}

function isFunction(obj) {
    return (constructorName(obj) === 'Function')
}

function isObject(obj) {
    return (constructorName(obj) === 'Object')
}

export { isFunction, isObject }