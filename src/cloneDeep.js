import * as utils from './utils/index.js'

function shallowCopy (obj) {
    this.obj = obj
    return this.obj
}

function recursive(obj) {
    if (utils.isPrimitive(obj)) {
        return obj
    }

    if (!utils.hasChild(obj)) {
        return shallowCopy.bind(obj)(obj)
    }

    if (utils.isIterable(obj)) {
        // TODO: Array, typedarray, set, map ...
        const cloned = []
        obj.length > 0 && obj.forEach(element => {
            cloned.push(cloneDeep(element))
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