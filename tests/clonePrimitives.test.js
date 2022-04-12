import { cloneDeep } from '../src/cloneDeep'

/*
 복사는 본래 원시타입이든 참조타입이든 메모리주소를 복사함으로써 이루어진다. 
 (원시타입 객체는 CPU 에, 참조타입 객체는 램에 저장된다는 내용을 접한 적이 있는데 이는 좀더 digging 후 확인 필요)
 다만 원시타입이나 깊이가 한뎁스인 참조타입 객체의 경우 원본과 사본이 공유하는 주소가 하나뿐이기 때문에, 둘중 한 객체의 값을 변경하면 새로운 메모리에 할당된 값을 가리키게 되어 공유관계가 끊어지는 것이다.
 
 깊이가 여러 뎁스인 참조타입 객체의 경우 원본과 사본이 공유하는 주소가 여러개이고, 둘중 한 객체의 하위뎁스 필드의 값을 변경하면 이를 프로퍼티로 가지고 있던 상위뎁스 필드 자체가 바라보는 프로퍼티 메모리 주소가 바뀌는데
 상위뎁스의 공유관계는 변경되지 않기 때문에 원본과 사본의 하위뎁스 필드 같이 영향을 받게 된다.
*/

test('숫자를 깊은복사할 수 있다.', () => {
  let origin = 1
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned) // Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality).
  expect(origin).toBe(cloned) // Use .toBe to compare primitive values.
})

test('BigInt를 깊은복사할 수 있다.', () => {
  let origin = BigInt(1)
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect(origin).toBe(cloned)
})

test('문자열을 깊은복사할 수 있다.', () => {
  let origin = 'SpiderMan'
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect(origin).toBe(cloned)
})

test('불린값을 깊은복사할 수 있다.', () => {
  let origin = false
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect(origin).toBe(cloned)
})

/*
Symbol : each object is unique. 
Symbol("foo") === Symbol("foo"); // false
=> use toString method to check the original value
*/

test('Symbol 값을 깊은복사할 수 있다.', () => {
  let origin = Symbol(1)
  const cloned = cloneDeep(origin)
  expect(origin).toEqual(cloned)
  expect(origin).toBe(cloned)
})
