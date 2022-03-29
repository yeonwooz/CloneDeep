import * as utils from './index.js'

function judgeChild(value) {
    if (utils.isPrimitive(value)) {
        return value
    }


}

export { judgeChild }