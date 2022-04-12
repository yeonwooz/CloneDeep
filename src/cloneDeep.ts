import * as utils from './utils/index.js'
import * as Types from './utils/types'

//@ts-ignore
function cloneDeep<T>(value: T): T
function cloneDeep(value: Types.Value) {
  for (const { copy, validation } of utils.copyValidations) {
    if (validation(value)) {
      return copy(value)
    }
  }

  return value
}
export { cloneDeep }
