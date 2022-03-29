function isPrimitive(value) {
    return ['string', 'number', 'boolean'].includes(typeof value)
}

export { isPrimitive }