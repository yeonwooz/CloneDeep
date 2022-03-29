/*
which types of objects are iterable ?

String
Array
TypedArray
Map
Set
*/

function isIterable(obj) {
    return obj[Symbol.iterator] !== undefined   
}

export { isIterable }