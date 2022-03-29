import { cloneDeep } from "../src/cloneDeep.js";

/*
Object, Function,

Symbol, Date, RegExp, Array,

Map/Set,  Promise, Proxy, Error

Math, Reflect, JSON 
( * Math, Reflect, JSON - No Constructor *)

*/

test('하위뎁스 필드가 prototype 속성을 갖는 함수일 때, 객체를 깊은복사한 후 원본의 하위뎁스 필드 값을 바꿔도 사본에 영향을 주지 않는다.', () => {
    const origin = {
        method1: function(){
            return 'start'
        },
        method2: Function,
    }
    const cloned = cloneDeep(origin)
    
    origin.method1 = function(){
        return 'done'
    } 
    origin.method2 = null 


    expect(origin.method1()).toBe('done')
    expect(origin.method2).toBe(null)
    expect(cloned.method1()).toBe('start')
    console.log(cloned.method2)
    // expect(cloned.method2()).toBe(Function)
})


// test('하위뎁스 필드가 일반 Object 일 때, 객체를 깊은복사한 후 원본의 하위뎁스 필드 값을 바꿔도 사본에 영향을 주지 않는다.', () => {
//     const origin = {
//         myCareer: {
//             job: {
//                 name: 'frontend-developer',
//                 years: 1,
//                 level: 'junior'
//             }
//         }
//     }
//     const cloned = cloneDeep(origin)
    
//     origin.myCareer.job.years = 3
//     origin.myCareer.job.level = 'senior'


//     expect(origin.myCareer.job.years).toBe(3)
//     expect(origin.myCareer.job.level).toBe('senior')
//     expect(cloned.myCareer.job.years).toBe(1)
//     expect(cloned.myCareer.job.level).toBe('junior')
// })
