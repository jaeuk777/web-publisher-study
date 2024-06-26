// 타입 주석
// let 변수명 : 타입 [=초기값] // 초기값은 생략 사능
// const 변수명 : 타입 = 초기값 // const는 초기값을 생략하면 안된다. 반드시 할당해야 함
// ====> 이런 형태로 사용하는 것을 타입 주석이라고 함.

let 이름:string = 'Hong'
console.log(이름)
// 이름=123; [x]
이름="123"; // [o]
console.log(이름)

let num:number|undefined;
const PI:number = 3.141592; // 반드시 초기화
console.log(num); // undefined
console.log(PI);
// 자바스크립트의 기본자료형 : number, string, boolean, null, undefined
// 자바스크립트의 객체 유형 : object, 배열, 함수형
// 타입스크립트의 기본자료형 : number, string, boolean, null, undefined
// 타입스크립트의 객체 유형 : object, 배열, 튜플, 클래스형, ...

// names변수 선언하고 string유형의 배열 타입으로 선언해보세요
let names:string[]=["Hong","Choi","Lee","Kim"]// 배열
console.log(names)

// age 적절한 타임 선언해서 값 할당
let age:number
age=22
// height 실수값 할당
let height:number=165.45
console.log(age,height)

let isLogin:boolean=false;
console.log(isLogin) //false
isLogin=!isLogin;
console.log(isLogin) // true

let user:object ={}
console.log('user: ', user)

// 객체 유형에 특정 속성을 필수로 정의하게끔 하고자 한다면
// interface를 선언하고, 해당 인터페이스 타입을 주면 된다
interface User{
    name:string; // 필수
    age:number; // 필수
    height?:number; // 옵션
}

let user2:User = {
    name:'김희선',
    age:23
}
console.log(user2)
// let user3:User={}; //[x]


