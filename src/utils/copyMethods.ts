import * as Types from './types'
import { cloneDeep } from '../cloneDeep'

function copyArray(value: Array<any>) {
  return value.reduce((arr, item, i) => {
    arr[i] = cloneDeep(item)
    return arr
  }, [])
}

// function copyArrayBuffer() {}

function copyTypedArray(value: Types.GenericTypedArray<Types.TypedArray>) {
  return new value.constructor(value)
}

function copyDate(value: Date) {
  return new Date(value.getTime())
}

function copyMap(value: Map<string, any>) {
  const result = new Map()
  value.forEach((val, key) => {
    result.set(key, cloneDeep(val))
  })
  return result
}
function copySet<T>(value: Set<T>) {
  const result = new Set()
  value.forEach((val) => {
    result.add(cloneDeep(val))
  })

  return result
}

function copyRegExp(value: RegExp) {
  return new RegExp(value.source, value.flags)
}

function copySymbol(value: symbol) {
  const strSymbol = String(value)
  const braketIndex = strSymbol.indexOf('(')
  const strValue = strSymbol.substring(braketIndex).replace(/\(|\)/g, '')
  return parseInt(strValue) ? Symbol(+strValue) : Symbol(strValue)
}

function copyPrimitive(value: Types.Primitive) {
  return value
}

// function copyProxy() {}

function copyObject(value: Types.Obj) {
  return Object.keys(value).reduce<Record<string, any>>((obj, key) => {
    obj[key] = cloneDeep(value[key])
    return obj
  }, {})
}

function copyMath(value: Math) {
  return value
}

export {
  copyArray,
  // copyArrayBuffer,
  copyTypedArray,
  copyDate,
  copyMap,
  copySet,
  copyRegExp,
  copySymbol,
  copyPrimitive,
  copyObject,
  copyMath,
  // copyProxy,
}
