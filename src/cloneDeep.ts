import * as utils from './utils/index.js'

function recursive(value: any) {
  for (const { validation, copy } of utils.copyValidations) {
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
