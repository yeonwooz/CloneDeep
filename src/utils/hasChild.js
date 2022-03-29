import * as utils from './index.js'

function hasChild(obj) {
    if (utils.isPrimitive(obj)) {
        return false
    }

    const keys = []
    for (const key in obj) {
        keys.push(key)
    }

    return keys.length > 0
}

export { hasChild }