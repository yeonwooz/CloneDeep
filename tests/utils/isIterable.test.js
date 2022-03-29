import { expect, test } from '@jest/globals'
import * as utils from '../../src/utils/index.js'

test('{} 는 iterable 하지 않다', () => {
    const obj = {}
    expect(utils.isIterable(obj)).toBe(false)
})

test('{a:1} 는 iterable 하지 않다', () => {
    const obj = {a:1}
    expect(utils.isIterable(obj)).toBe(false) 
})

test('[] 는 iterable 하다', () => {
    const obj = []
    expect(utils.isIterable(obj)).toBe(true)
})

test('[1,2,3] 는 iterable 하다', () => {
    const obj = [1,2,3]
    expect(utils.isIterable(obj)).toBe(true)
})

test('Map 은 iterable 하다', () => {
    const obj = new Map()
    expect(utils.isIterable(obj)).toBe(true)
})

test('Set 은 iterable 하다', () => {
    const obj = new Set([1,2,3,4,5])
    expect(utils.isIterable(obj)).toBe(true)
})