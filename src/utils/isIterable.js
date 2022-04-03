/*
which types of objects are iterable ?

String
Array
TypedArray
Map
Set
*/

function isIterable(obj) {
    //  is Proxy iterable ?
    return obj !== null && typeof obj[Symbol.iterator] === 'function'   
}

export { isIterable }