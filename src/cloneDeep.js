import * as utils from './utils/index.js'

function recursive(obj) {
    if (utils.isPrimitive(obj)) {
        return obj
    }

    if (!utils.hasChild(obj)) {
        // TODO: Array, typedarray, set, map ...
        if (utils.isIterable(obj)) {
            if (obj.isArray()) {
                const cloned = []
                value.length > 0 && value.forEach(element => {
                  arr.push(cloneDeep(element))
                })
                return cloned
            }
        
        } else {
            // TODO: curly bracket obj, function, Date ...
            if (obj.isFunction()) {
                return obj
            } else if (obj.isObject()) {
                return {}
            }
        }
    }

    if (utils.isIterable(obj)) {
        // TODO: Array, typedarray, set, map ...
        if (obj.isArray()) {
            const cloned = []
            value.length > 0 && value.forEach(element => {
              arr.push(cloneDeep(element))
            })
            return cloned
        }
    } else {
        const cloned=  {}
        for (const key in obj) {
            console.log(8888888, obj)
            console.log(9999999, obj.isFunction)


            cloned[key] = recursive(new utils.Target(obj[key]).obj)
        }
        return cloned
    }
}


function cloneDeep(value) {
    return recursive(new utils.Target(value).obj)
}

export { cloneDeep }