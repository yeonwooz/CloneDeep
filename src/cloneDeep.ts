import * as utils from './utils/index.js'

function copyArray(value: Array<any>) {
  return value.reduce((arr, item, i) => {
    arr[i] = cloneDeep(item)
    return arr
  }, [])
}

function recursive(obj: any) {
  if (utils.isPrimitive(obj) || utils.isProxy(obj) || !utils.hasChild(obj)) {
    return obj
  }

  if (utils.isArray(obj)) {
    return copyArray(obj)
  }

  const cloned = {}
  for (const key in obj) {
    //@ts-ignore
    cloned[key] = recursive(obj[key])
  }
  return cloned
}

//@ts-ignore
function cloneDeep(value) {
  return recursive(value)
}

export { cloneDeep }
