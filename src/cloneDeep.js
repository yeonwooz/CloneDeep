import * as utils from './utils/index.js'

function recursive(obj) {
    if (utils.isPrimitive(obj)) {
        return obj
    }

    if (!utils.hasChild(obj)) {
        // TODO: Array, typedarray, set, map ...
        if (utils.isIterable(obj)) {
            
        } else {
            // TODO: curly bracket obj, function, Date ...
            if (utils.isFunction(obj)) {
                return obj
            } else if (utils.isObject(obj)) {
                return {}
            }
        }
    }

    if (utils.isIterable(obj)) {
        // TODO: Array, typedarray, set, map ...
        const cloned = []
        value.length > 0 && value.forEach(element => {
          arr.push(cloneDeep(element))
        })

        return cloned
    } else {
        const cloned=  {}
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