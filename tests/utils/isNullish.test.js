import { expect, test } from '@jest/globals'
import * as utils from '!/index.js'

test('isNullish 함수는 undefined, null 에 대해 true 를 반환한다.', () => {
  const a = null
  const b = undefined

  expect(utils.isNullish(a)).toBe(true)
  expect(utils.isNullish(b)).toBe(true)
})
