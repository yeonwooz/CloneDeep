import * as utils from './utils/index.js'
import { Primitive } from './utils/types.js'

// {validation: , copy: },
const copyValidations = [
  { validation: utils.isArray, copy: copyArray },
  { validation: utils.isPrimitive, copy: copyPrimitive },
]

function copyArray(value: Array<any>) {
  return value.reduce((arr, item, i) => {
    arr[i] = cloneDeep(item)
    return arr
  }, [])
}

function copyPrimitive(value: Primitive) {
  return value
}

function recursive(value: any) {
  for (const { validation, copy } of copyValidations) {
    if (validation(value)) {
      return copy(value)
    }
  }
  
  if (utils.isProxy(value) || !utils.hasChild(value)) {
    return value
  }

  const cloned = {}
  for (const key in value) {
    //@ts-ignore
    cloned[key] = recursive(value[key])
  }
  return cloned
}

//@ts-ignore
function cloneDeep(value) {
  return recursive(value)
}

export { cloneDeep }
