import { expect } from '@jest/globals'
import { cloneDeep } from '../src/cloneDeep'
import * as utils from '../src/utils/index.js'
/*
Object, Function,

Symbol, Date, RegExp, Array,

Map/Set,  Promise, Proxy, Error

Math, Reflect, JSON 
( * Math, Reflect, JSON - No Constructor *)

*/

test('생성자 함수를 깊은복사할 수 있다.', () => {
  const origin = Function
  const cloned = cloneDeep(origin)

  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('일반 Object 를 깊은복사할 수 있다.', () => {
  const origin = {
    myCareer: {
      job: {
        name: 'frontend-developer',
        years: 1,
        skills: [
          { javascipt: 100 },
          { typescript: 50 },
          { reactNative: 100 },
          { cSharp: 50 },
        ],
      },
    },
  }
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('Array 를 깊은복사할 수 있다.', () => {
  const origin = [
    [
      {
        name: 'apple',
        color: 'red',
        like: 1,
      },
      {
        name: 'grape',
        color: 'purple',
        like: 0,
      },
      {
        name: 'orange',
        color: 'orange',
        like: 1,
      },
    ],
  ]
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('ArrayBuffer 객체를 깊은복사할 수 있다.', () => {
  const buffer = new ArrayBuffer(8)
  let origin = buffer
  const cloned = cloneDeep(origin)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 ArrayBuffer 일 때, 깊은복사할 수 있다.', () => {
  const buffer1 = new ArrayBuffer(8)
  const buffer2 = new ArrayBuffer(8)

  const origin = [1, 2, [buffer1, buffer2]]
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('TypedArray 를 깊은복사할 수 있다.', () => {
  const int16 = new Int16Array(2)
  const origin = int16
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 TypedArray 일 때, 깊은복사할 수 있다.', () => {
  const int16 = new Int16Array(2)
  const origin = [1, 2, [int16]]
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('Proxy 객체를 깊은복사할 수 있다.', () => {
  const account = { name: 'cindy' }
  const origin = new Proxy(account, {
    get: function (target) {
      return target?.name ?? 'no name'
    },
  })

  const cloned = cloneDeep(origin)

  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 Proxy 객체 일 때, 깊은복사할 수 있다.', () => {
  // TODO: 수정 필요
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
  expect(origin).toEqual(cloned)
  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 Set 또는 Map 객체 일 때, 깊은복사할 수 있다.', () => {
  const originSet = { method: new Set([1, 2, 3]) }
  const originMap = { method: new Map() }

  const clonedSet = cloneDeep(originSet)
  const clonedMap = cloneDeep(originMap)
  expect(originSet).toEqual(clonedSet)
  expect(originMap).toEqual(clonedMap)

  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 RegExp 객체 일 때, 깊은복사할 수 있다.', () => {
  const origin = { method: new RegExp() }
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
})

test('Math 객체를 깊은복사할 수 있다.', () => {
  const origin = Math
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)

  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 Math 객체 일 때, 깊은복사할 수 있다.', () => {
  const origin = { method: Math }
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)

  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})

test('하위뎁스 필드가 JSON 객체 일 때, 깊은복사할 수 있다.', () => {
  const origin = [1, { a: { method: JSON } }]
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)

  expect.extend({
    function(origin, cloned) {
      return this.equals(origin, cloned)
    },
  })
})
