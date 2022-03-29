import { cloneDeep } from "../src/cloneDeep.js";

/*
Object, Function,

Symbol, Date, RegExp, Array,

Map/Set,  Promise, Proxy, Error

Math, Reflect, JSON 
( * Math, Reflect, JSON - No Constructor *)

*/


test('하위뎁스 필드가 일반 Object 일 때, 객체를 깊은복사한 후 원본의 하위뎁스 필드 값을 바꿔도 사본에 영향을 주지 않는다.', () => {
    const origin = {
        myCareer: {
            job: {
                name: 'frontend-developer',
                years: 1,
                level: 'junior'
            }
        }
    }
    const cloned = cloneDeep(origin)
    
    origin.myCareer.job.years = 3
    origin.myCareer.job.level = 'senior'

    expect(cloned.myCareer.job.years).toBe(1)
    expect(cloned.myCareer.job.level).toBe('junior')
})
