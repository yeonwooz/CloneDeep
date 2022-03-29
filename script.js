import { cloneDeep } from './src/cloneDeep.js'

const origin = {
    myCareer: {
        job: {
            name: 'frontend-developer',
            years: 1,
            level: 'junior'
        }
    }
}

const cloned = cloneDeep(origin)
console.log(cloned)
