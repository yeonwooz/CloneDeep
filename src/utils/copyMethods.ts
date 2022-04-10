import { Primitive } from './types'
import { cloneDeep } from '../cloneDeep'

function copyArray(value: Array<any>) {
  return value.reduce((arr, item, i) => {
    arr[i] = cloneDeep(item)
    return arr
  }, [])
}

function copyArrayBuffer() {}

function copyTypedArray() {}

function copyDate(value: Date) {
  return new Date(value.getTime())
}

function copyMap() {}

function copySet() {}

function copyRegExp() {}

function copySymbol() {}

function copyPrimitive(value: Primitive) {
  return value
}

function copyProxy() {}

export {
  copyArray,
  copyArrayBuffer,
  copyTypedArray,
  copyDate,
  copyMap,
  copySet,
  copyRegExp,
  copySymbol,
  copyPrimitive,
  copyProxy,
}
