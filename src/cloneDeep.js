import * as utils from './utils/index.js'

function cloneDeep(value) {
    if (utils.isPrimitive(value)) {
        return value    
    }

    

    return null
}

export { cloneDeep }