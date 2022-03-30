import * as utils from './utils/index.js'

function shallowCopy (obj) {
    this.obj = obj
    // TODO: Array, typedarray, set, map ...
    if (utils.isIterable(this.obj)) {
    
    } else {
        // TODO: curly bracket obj, function, Date ...
        if (utils.isFunction(this.obj)) {
            return this.obj
        } else if (utils.isObject(this.obj)) {
            return {}
        }
    }
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