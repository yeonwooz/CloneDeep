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
    return obj[Symbol.iterator] !== undefined   
}

export { isIterable }