import * as utils from './index.js'

const copyValidations = [
  { validation: utils.isArray, copy: utils.copyArray },
  { validation: utils.isPrimitive, copy: utils.copyPrimitive },
  { validation: utils.isDate, copy: utils.copyDate },
  { validation: utils.isMap, copy: utils.copyMap },
  { validation: utils.isSet, copy: utils.copySet },
  { validation: utils.isRegExp, copy: utils.copyRegExp },
  { validation: utils.isSet, copy: utils.copySet },
  { validation: utils.isSymbol, copy: utils.copySymbol },
  { validation: utils.isTypedArray, copy: utils.copyTypedArray },
  { validation: utils.isObject, copy: utils.copyObject },
  { validation: utils.isRegExp, copy: utils.copyRegExp },
  { validation: utils.isMath, copy: utils.copyMath },
]

export { copyValidations }
