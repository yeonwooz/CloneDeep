import { expect } from '@jest/globals'
import * as utils from '../../src/utils/index.js'

test('hasChild 함수는 패러미터로 받은 객체의 하위객체가 있는지 판단할 수 있다.', () => {
    const obj = {}
    const obj2 = {name:'cindy'}

    const arr = []
    const arr2 = [1,2,3]

    const str = ''

    const dateObj = new Date()
    const setObj = new Set()
    const mapObj = new Map()
    const regExp = new RegExp()

    expect(utils.hasChild(obj)).toBe(false)
    expect(utils.hasChild(arr)).toBe(false)
    expect(utils.hasChild(obj2)).toBe(true)
    expect(utils.hasChild(arr2)).toBe(true)
    expect(utils.hasChild(str)).toBe(false)
    expect(utils.hasChild(dateObj)).toBe(false)
    expect(utils.hasChild(setObj)).toBe(false)
    expect(utils.hasChild(mapObj)).toBe(false)
    expect(utils.hasChild(regExp)).toBe(false)

})