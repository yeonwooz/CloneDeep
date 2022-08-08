## 얕은 비교와 깊은 비교

얕은 비교는 주소를 비교하는 것이고, 깊은 비교는 값(내용)을 비교하는 것이다.<br/> 
(*주소 :  자바스크립트의 경우 콜스택 영역이나 힙 영역의 메모리 주소를 말한다)

## 얕은 복사와 깊은 복사

얕은 복사시 원본과 사본은 같은 메모리 주소를 가리킨다. 같은 대상을 공유한다.

깊은 복사시 사본은 새로운 주소를 할당받고, 원본과 동일한 값으로 저장된다.

### 자바스크립트의 깊은 복사 메서드 사용시 주의점
> 객체의 깊이가 2이상 깊어지는 경우 하위뎁스들은 무조건 얕은 복사가 된다. 그래서 직접 재귀함수를 만들어야 한다.

여러 depth를 갖는 객체는 자바스크립트의 깊은 복사 메서드 (.map, .slice, .reduce)로 복사하더라도 얕은복사가 된다. (메모리주소 공유)



### TODO

---

- [x] Set up Jest
- [x] Separate test cases for each function
- [x] Implement functions according to each test case
- [x] Complete the CloneDeep code

### standard built-in objects

---

(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

String, Number, Boolean, Symbol, BigInt, null, undefined,
Object, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise,
Reflect, Proxy, JSON, Error ...
(Math, Reflect, JSON - No Constructor )
