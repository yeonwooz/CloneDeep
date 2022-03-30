import * as utils from './utils/index.js'

function recursive(obj) {
    if (utils.isPrimitive(obj) || utils.isProxy(obj) || !utils.hasChild(obj)) {
        return obj
    }

    const cloned = utils.isArray(obj) ? [] : {}
    
    if (utils.isArray(obj)) {
        obj.length > 0 && obj.forEach(element => {
            cloned.push(cloneDeep(element))
        })

        return cloned
    }

    for (const key in obj) {
        cloned[key] = recursive(obj[key])
    }
    return cloned
}


function cloneDeep(value) {
    return recursive(value)
}

export { cloneDeep }