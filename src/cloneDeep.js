import * as utils from './utils/index.js'

function recursive(obj) {
    // input 은 obj 가 깊은 참조객체인 경우만 생각함 (hasChild)

    if (utils.isIterable(obj)) {
        // curly bracket 오브젝트일 때

    } else {
        // 배열 류일때

    }
    


    


}


function cloneDeep(value) {
    if (utils.isPrimitive(value)) {
        return value    
    }
    
    try {
        const judged = judgeChild(origin)



    } catch (error) {
        switch (error?.code) {
            case 1:
                const cloned = value
                return cloned
        }    
    }

    return null
}

export { cloneDeep }