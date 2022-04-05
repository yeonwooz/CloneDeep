import { cloneDeep } from './src/cloneDeep.js'
import * as utils from './src/utils/index.js'
import { test } from './src/test.ts'

const account = { name: 'cindy' }
let proxy = new Proxy(account, {
  get: function (target) {
    console.log(target?.name)
    return target?.name ?? 'no name'
  },
})

const origin = {
  getter: proxy,
}
const cloned = cloneDeep(origin)

console.log(1111, cloned)
console.log(2222, origin)

console.log(999999, origin.getter.target)
console.log(test())
