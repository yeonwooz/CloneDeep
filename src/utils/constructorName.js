import * as utils from './index.js'

class Target {
    constructor(obj) {
        this.obj = obj
    }

    getType() {
        return this.obj?.constructor?.name
    } 

    isFunction() {
        return this.getType() === 'Function'  
    }

    isObject() {
        return this.getType() === 'Object'  
    }

    isArray() {
        return this.getType() === 'Array'  
    }

    isTypedArray() {
        const typedArrayList = [
            Int16Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
        ]  
        
        return typedArrayList.includes(this.getType())
    }
}

function constructorName (obj) {
    return obj?.constructor?.name
}

function isFunction(obj) {
    return (constructorName(obj) === 'Function')
}

function isObject(obj) {
    return (constructorName(obj) === 'Object')
}

function isArray(obj) {
    return (constructorName(obj) === 'Array')
}

const typedArrayList = [
    Int16Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
]

function isTypedArray(obj) {
    return typedArrayList.includes(constructorName(obj))
}

export { Target, isFunction, isObject, isArray, isTypedArray }