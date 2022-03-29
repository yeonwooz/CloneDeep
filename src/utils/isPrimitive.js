import { isNullish } from "./isNulllish.js"

function isPrimitive(value) {
    return isNullish(value) || ['number', 'bigint', 'string', 'boolean', 'symbol'].includes(typeof value)
}

export { isPrimitive }