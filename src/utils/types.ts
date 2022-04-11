type Primitive = number | string | boolean | bigint | null | undefined | symbol

interface Constructable<T> {
  new (...args: any): T
}
interface Obj {
  [key: string]: any
}

type TypedArray =
  | Constructable<Int8Array>
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array

type Value = Date &
  Set<any> &
  Map<string, any> &
  Array<any> &
  symbol &
  GenericTypedArray<TypedArray> &
  Obj &
  RegExp

interface GenericTypedArrayConstructor<T> {
  new (): T
  new (buffer: GenericTypedArray<TypedArray>): T
}

interface GenericTypedArray<T> {
  constructor: GenericTypedArrayConstructor<T>
}

export type {
  Primitive,
  Constructable,
  Obj,
  TypedArray,
  Value,
  GenericTypedArrayConstructor,
  GenericTypedArray,
}
