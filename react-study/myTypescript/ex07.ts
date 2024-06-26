/* 함수 구성
[1] function 을 이용한 함수 구성
[2] 리터럴 방식 화살표 함수
*/
// [1] function 을 이용한 함수 구성
function plus(a:number, b:number):number {
    let c:number=a+b;
    console.log(`${a} + ${b} = ${c}`)
    return c;
}
plus(5, 8)
// [2] 곱셈식 수행하는 함수를 화살표함수로 구현하세요
// multiply
const multiply=(a:number, b:number):number=> {
    let c:number=a*b;
    console.log(`${a} x ${b} = ${c}`)
    return c;
}
multiply(6,9)

// 함수 시그니처 (함수 타입 선언) : 함수 타입을 함수 시그니처라고 한다
// (매개변수 1 타입1, 매개변수2 타입2,.....)=> 반환값 타입
let bar: (a:string, b:number) => void = function(str, num):void{
    for(let i=0; i<num; i++) {
        console.log(str)
    }
}
bar("@@@@",5)

let greeting: (name:string)=>string;

greeting = function(nm: string):string{
    return "Hello "+nm+"님~";
}
console.log(greeting("현수"));
console.log(greeting("영희"));

// 나누기를 수행하는 divide 함수 시그니처 이용해서 구성한 뒤 호출 하세요
function divide1(a:number, b:number){
    let c:number=a/b;
    console.log(`${a} / ${b} = ${c}`)
}
divide1(10,5);

let divide : (x:number, y:number)=>void; // 반환 타입이 없는 함수 시그니쳐
divide = (a:number, b:number):void=> {
    console.log(`${a} / ${b} = ${a/b}`)
    let c:number=a/b;
}
divide(64,2)

//매개변수가 없는 함수 시그니처
let logHello: ()=>void;

logHello=function():void{
    console.log("Hello~~~~~~~")
}
logHello()

// 선택적 매개변수를 갖는 함수 시그니처
let greetOptionAge: (naem:string, age?:number)=> string;

greetOptionAge=function(nm:string, ag?:number):string {
    if(ag){
        return `${nm}님은 ${ag}세 이군요`
    }else{
        return `안녕하세요?${nm}님!!!`
    }
}

let msg=greetOptionAge('박재욱')
console.log(msg);
msg=greetOptionAge('김철수', 31);
console.log(msg);

// type 키워드로 타입 별칭 만들기
// type 새로운 타입명 = 기존타입
// ==> type alias 

type Name = string; // string 타입 별팀 Name으로 준다
type Money = number; 

let myname:Name='김진호';
let giveMe:Money=5000000;
console.log(myname, giveMe)

// Union type alias
type ID=string|number|string;
let uid:ID = "Tom";
let uid2:ID = 150;
let uid3:ID = '25세';
console.log(uid,uid2,uid3)

// 함수 타입 앨리어스: 함수의 타입을 정의하는 방법
type strNumFunc = (arg0:string, arg1:number)=>void;

let f1:strNumFunc = (a1, a2)=>{
    console.log(`a1=${a1}, a2=${a2}`)
}
f1("Hi", 900)


