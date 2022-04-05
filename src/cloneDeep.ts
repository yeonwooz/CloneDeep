import * as utils from './utils/index.js'

function recursive(obj: any) {
  if (utils.isPrimitive(obj) || utils.isProxy(obj) || !utils.hasChild(obj)) {
    return obj
  }

  const cloned = utils.isArray(obj) ? [] : {}

  if (utils.isArray(obj)) {
    obj.length > 0 &&
      obj.forEach((element: any) => {
        //@ts-ignore
        cloned.push(cloneDeep(element))
      })

    return cloned
  }

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
