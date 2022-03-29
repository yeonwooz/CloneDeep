function isFunction(obj) {
    return obj?.prototype !== undefined
}

export { isFunction }