import * as utils from './index.js'
import { isPrimitive } from './isPrimitive.js'

function hasChild(obj) {
    if (isPrimitive(obj)) {
        return false
    }

    const keys = []
    for (const key in obj) {
        keys.push(key)
    }

    return keys.length > 0
}


function judgeChild(obj) {
    if (utils.isPrimitive(obj) || !hasChild(obj)) {
        throw {code: 1, reason:'has no child'}
    }

    for (const key in obj) {




        
    } 

    return null





}

export { hasChild, judgeChild }