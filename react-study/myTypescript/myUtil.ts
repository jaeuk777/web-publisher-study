// makeRandomNum() 함수를 구성하세요
// Math.random()함수 이용해서 0.0<= val < 1.0 사이의 임의의 난수를 발생시키는
// 함수를 구성하고 export하세요

export function makeRandomNum():number {
    let num:number=Math.random();
    return num;
}
// makeRandomNum2(max, start)
// start<= value <max 사이의 랜덤한 점수값을 반환하는 함수를 구성하세요 실수
// 5<= value 15
// Math.random() * 범위 + 시작수

export function makeRandomNum2(max:number=100, start:number=0):number {
    let bound=max-start;
    let num:number=Math.random() * bound + start;
    return num;
}

export interface IPerson{
    name : string;
    age : number;
}
// 화살표 함수로 makePerson()함수를 구성하되,
// 매개변수 name, age 를 받되, age의 기본값을 makeRandomNum2()함수를 이용해서 할당하세요
// makePerson() 함수의 반환타입은 IPerson타입으로 반환하세요

export const makePerson=(name:string, age:number = makeRandomNum2()):IPerson=>{
    return {name, age}
}
export const makePerson2=(name:string, age:number=makeRandomNum2()):IPerson => ({name, age})

