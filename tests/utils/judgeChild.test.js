import { expect } from '@jest/globals'
import * as utils from '../../src/utils/index.js'

test('hasChild 함수는 패러미터로 받은 객체의 하위객체가 있는지 판단할 수 있다.', () => {
    const obj = {}
    const arr = []
    const str = ''

    expect(utils.hasChild(obj)).toBe(false)
    expect(utils.hasChild(arr)).toBe(false)
    expect(utils.hasChild(str)).toBe(false)
})

test('judgeChild 함수는 패러미터로 받은 객체의 하위객체가 무엇인지 반환할 수 있다.', () => {

})