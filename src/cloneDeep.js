import * as utils from './utils/index.js'

function recursive(obj) {
    if (utils.isPrimitive(obj) || !utils.hasChild(obj)) {
        return obj
    }

    if (utils.isIterable(obj)) {
        for (const key in obj) {
            if (obj?.target !== undefined) {
                // proxy
                return obj
            }
        }

        // TODO: Array, typedarray, set, map ...
        const cloned = []
        obj.length > 0 && obj.forEach(element => {
            cloned.push(cloneDeep(element))
        })

        return cloned
    } else {
        const cloned = {}
        for (const key in obj) {
            cloned[key] = recursive(obj[key])
        }
        return cloned
    }
}


function cloneDeep(value) {
    return recursive(value)
}

export { cloneDeep }