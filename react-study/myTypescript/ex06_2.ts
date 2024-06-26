import {IEmp, ICompany} from './ex06_1'

let kim:IEmp = {empno:1111, ename:'김시원', salary:5000}
console.log(kim)

let apple:ICompany = {name:'Apple사', year:1988}
let samsung:ICompany={name:'삼성전자', year:1977, tel:'02)7777-8888'}
console.log(apple.name)
console.log(samsung.name)

// 비구조화 활당
const {name, year, tel} = samsung;
console.log(name, year, tel)

// spread연산자 (전개연산자, 잔여 연산자)
let address:any={
    nation:'korea',
    city:'Seoul',
    addr1:'동대문구',
    addr2:'전농동',
    addr3:'1번지 ABC 빌딩 3층'
}

const {nation, city, ...detail}=address; // 잔여 연산자
console.log(nation, city)
console.log(detail)

const arr=[1,2,3,'Hello']
console.log(arr)
const arr2:number[]=[10,20,30]
// 스프레드 연산자 이용한 배열 카피(깊은 복사)
const copyArr=[... arr2] // 전개 연산자
console.log(arr2)
console.log(copyArr)
copyArr[1]=200;

console.log(arr2) // 원본 배열은 변동 없음
console.log(copyArr) //200으로 변경됨

copyArr.map((val, i) => (console.log(val)))

// spread 연산자 이용한 객체 병합
let m1={name:'이순신',age:33}
let m2={city:'인천'}
let m3={nation:'Korea'}

let merged={...m1, ...m2, ...m3}
console.log(merged);
// { name: '이순신', age: 33, city: '인천', nation: 'Korea'}


// 타입 단언(Type Assertion) ==> 형변환(타입 변환)
let person:object = {name:'김유신', age:22}
console.log(person)
// console.log(person.name) [X] object타입으로는 name속성에 접근 불가
// Object o=new Preson(); (Person)o.name
// 이를 해결하기 위해서는 interface를 이용하던지
// 아니면 타입 단언을 해야 한다 (형변환 필요)
// (<타입>객체) 또는 (객체 as 타입)


console.log((<{name:string, age:number}>person).name)
console.log((person as {age:number}).age);

interface IName{
    name:string;
    age:number;
}
console.log((<IName>person).name)
console.log((<IName>person).age)
console.log((person as IName).name)

