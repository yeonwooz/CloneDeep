import { cloneDeep } from './src/cloneDeep.js'
import  * as utils from './src/utils/index.js'
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

// console.log(1,obj.constructor.name)
// console.log(2,''.constructor.name)
// console.log(3,[].constructor.name)
// console.log(4,function(){}.constructor.name)
// console.log(5,Function.constructor.name)
// console.log(6,Date.constructor.name)
// console.log(7,new Date().constructor.name)
// console.log(8,arrowfunc.constructor.name)

const buffer = new ArrayBuffer(8);


const obj2 = {
    method: Function
}

const copy = function(value) {
    return value
}

const obj3 = copy(obj2)

console.log(obj3.method === Function)

