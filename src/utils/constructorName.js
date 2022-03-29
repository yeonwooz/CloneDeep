function constructorName (obj) {
    return obj?.constructor?.name
}

function isFunction(obj) {
    return (constructorName(obj) === 'Function')
}

export { isFunction }