/*
standard built-in objects
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, 
Reflect, Proxy, JSON, Error ...

(Math, Reflect, JSON  - No Constructor )
*/

function primaryTest() {
  /*
  primitives 원형보존 확인
  */
  let original: any = null
  let cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === null, original, cloned) 

  original = undefined
  cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === undefined, original, cloned) 

  original = true
  cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === true, original, cloned) 

  original = false
  cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === false, original, cloned) 

  original = 1
  cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === 1, original, cloned) 

  original = '1'
  cloned = cloneDeep(original) 
  original = ''
  console.assert(cloned === '1', original, cloned) 
}

function objectTest() {
  /*
  Object
  */
  let original: any = {
    a:{
      aa:
        [{
          aaa:{aaaa:'b', 
               bbbb: function(){
                 console.log('bbb')
                 return 'returning B'
               },
               cccc: ()=>{
                 console.log('ccc')
                 return 'returning C'
               }}}, 
         100
        ]}}
  
  let cloned = cloneDeep(original) 
  original.a.aa[0].aaa.bbbb = []
  console.assert(cloned.a.aa[0].aaa.bbbb() === 'returning B')  // 콘솔도 출력된다

  original = [
    {a:{
      aa:[{
        aaa:{
          aaaa:'b', 
          bbbb: function(){
            console.log('bbb')
            return 'returning B'
          }, 
          cccc: ()=>{
            console.log('ccc')
            return 'returning C'
          }
        }
      }]
    }
    }, 
    {b:1}
  ]
  cloned = cloneDeep(original) 
  original[0].a = []
  console.assert(cloned[0].a.aa[0].aaa.bbbb() === 'returning B')  // 콘솔도 출력된다

  original = Object
  cloned = cloneDeep(original) 
  original['a'] = 1
  console.assert(Object.keys(cloned).length === 0)

  original = new Object
  cloned = cloneDeep(original) 
  original['a'] = 1
  console.assert(Object.keys(cloned).length === 0)
}

function functionTest() {
   /*
  Function
  */
  let original: any = function(){return {a:1}}
  let cloned = cloneDeep(original)
  original = null
  console.assert(cloned()?.a === 1)

  original = Function
  cloned = cloneDeep(original)
  original = null
  console.assert(cloned?.length !== undefined)  // 1

  original = new Function
  cloned = cloneDeep(original)
  original = null
  console.assert(cloned?.length !== undefined)  // 0
  
  original = () => {
    console.log(11111)
    return 'arrow function'
  }
  cloned = cloneDeep(original)
  original = null
  console.assert(cloned() == 'arrow function')

  original = {
    method: () => {
      console.log(11111)
      return 'arrow function'
    }
  }
  cloned = cloneDeep(original)
  original.method = null
  console.assert(cloned.method() == 'arrow function')
}

function DateTest() {
  let original = Date  // function
  let cloned = cloneDeep(original) 
  original = null
  console.assert(cloned !== null)

  original = Date()  // string
  cloned = cloneDeep(original) 
  original = null
  console.assert(cloned !== null)
  
  original = new Date  // object
  cloned = cloneDeep(original) 
  original = null
  console.assert(cloned !== null)

  original = new Date()  // object
  cloned = cloneDeep(original) 
  original = null
  console.assert(cloned !== null)

  original = {
    a: {
      key: Date
    }
  }
  cloned = cloneDeep(original)
  original.a.key = null
  console.assert(cloned?.a?.key !== null)
}

function MapSetTest() {
  let original = new Set [{a:{aa:[{aaa:{aaa:'b', bbb: function(){console.log('bbb')}, ccc: ()=>{console.log('ccc')}}}]}}, {b:1}]
  let cloned = cloneDeep(original) 
 
  console.assert(original !== cloned, original, cloned)  
}

/*
  Others
  original = new Map
  cloned = cloneDeep(original) 
  console.log(original, cloned)
  console.assert(original !== cloned, original, cloned)

  original = new Set [{a:{aa:[{aaa:{aaa:'b', bbb: function(){console.log('bbb')}, ccc: ()=>{console.log('ccc')}}}]}}, {b:1}]
  cloned = cloneDeep(original) 
  console.log(original, cloned)
  console.assert(original !== cloned, original, cloned)  
  */


function cloneDeep(value: any) {
  if (value === null || value === undefined) {
    return value
  }

  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return value
  }

  if (typeof value === 'function') {
    if (value.assign) {
      return {}
    }
    
    return value
  }
  
  if (typeof value === 'object' && value.length) {
    if (Object.keys(value).length === 0) {
      return {}
    }
    
    const arr: any[] = []
    value.length > 0 && value.forEach(element => {
      const returnedValue = cloneDeep(element)
      arr.push(returnedValue)
    })

    return arr
  }
  
  let copiedValue: any = {}

  if (typeof value === 'object') {
    if (Object.keys(value).length === 0) {
      return {}
    }

    for (const key in value) {
      const returnedValue = cloneDeep(value[key])
      copiedValue[key] = returnedValue
    }

    return copiedValue
  }

  return value
}


const demo = (value: any) => {
  let copiedValue: any = {}

  if (typeof value === 'object') {
    if (!Object.entries(value)) {
      return value    
    }   

    const key = Object.entries(value)[0][0]
    if (key) {
      const pairedValue = demo(Object.entries(value)[0][1])
      copiedValue[key] = pairedValue
    }    
  }

  return copiedValue
}


const testValue = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

//demo(testValue)

primaryTest()
objectTest()
functionTest()
DateTest()