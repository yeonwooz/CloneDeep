import { cloneDeep } from './src/cloneDeep.js'
import { judgeChild } from './src/utils/judgeChild.js'

let origin = {
    myCareer: {
        job: {
            name: 'frontend-developer',
            years: 1,
            level: 'junior'
        }
    }
}


// origin = function() {
//     console.log(111)
// }

//const cloned = cloneDeep(origin)

const obj  = {
    myCareer: {
        job: {
            name: 'frontend-developer',
            years: 1,
            level: 'junior'
        }
    }
}

const arrowfunc = () => {console.log('arrow func')}

console.log(obj.prototype)
console.log(''.prototype)
console.log([].prototype)
console.log(function(){}.prototype)
console.log(Function.prototype)
console.log(Date.prototype)

console.log(arrowfunc.prototype)
