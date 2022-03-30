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

// const obj  = {
//     myCareer: {
//         job: {
//             name: 'frontend-developer',
//             years: 1,
//             level: 'junior'
//         }
//     }
// }

const arrowfunc = () => {console.log('arrow func')}

// console.log(1,obj.constructor.name)
// console.log(2,''.constructor.name)
// console.log(3,[].constructor.name)
// console.log(4,function(){}.constructor.name)
// console.log(5,Function.constructor.name)
// console.log(6,arrowfunc.constructor.name)
// console.log(7,Date.constructor.name)
// console.log(8,new Date().constructor.name)
// console.log(9,new Set().constructor.name)
// console.log(10,new Map().constructor.name)
// console.log(11,new RegExp().constructor.name)
// console.log(12,new Int16Array(2).constructor.name)
// console.log(12,new Uint8Array(2).constructor.name)


const aaa = new utils.Target(null)

console.log(11111, aaa)
console.log(22222, aaa.obj)