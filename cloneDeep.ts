import * as utils from './utils'

function cloneDeep(value: any) {
  if (value === null || value === undefined) {
    return value
  }

  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return value
  }

  if (typeof value === 'function') {
    if (value.assign) {
      return {}
    }
    
    return value
  }
  
  if (typeof value === 'object' && value.length) {
    if (Object.keys(value).length === 0) {
      return {}
    }
    
    const arr: any[] = []
    value.length > 0 && value.forEach(element => {
      const returnedValue = cloneDeep(element)
      arr.push(returnedValue)
    })

    return arr
  }
  
  let copiedValue: any = {}

  if (typeof value === 'object') {
    if (Object.keys(value).length === 0) {
      return {}
    }

    for (const key in value) {
      const returnedValue = cloneDeep(value[key])
      copiedValue[key] = returnedValue
    }

    return copiedValue
  }

  return value
}

export {cloneDeep};