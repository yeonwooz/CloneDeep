import { cloneDeep } from './src/cloneDeep.js'
import { judgeChild } from './src/utils/judgeChild.js'

const origin = {
    myCareer: {
        job: {
            name: 'frontend-developer',
            years: 1,
            level: 'junior'
        }
    }
}


try {
    const judged = judgeChild(origin)
    console.log('judged', judged)



} catch (error) {
    switch (error?.code) {
        case 1:
            console.log(3333) 
    }
}



const obj = {}
console.log(9999, obj[Symbol.iterator])
