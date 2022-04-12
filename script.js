import { cloneDeep } from './src/cloneDeep'
import * as utils from './src/utils/index.js'

const account = { name: 'cindy' }
let proxy = new Proxy(account, {
  get: function (target) {
    return target?.name ?? 'no name'
  },
})

const origin = {
  getter: proxy,
}
const cloned = cloneDeep(origin)

