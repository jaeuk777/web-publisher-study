import { makeRandomNum, makeRandomNum2, makePerson, makePerson2} from "./myUtil";
for(let i=0; i<3; i++) {
    console.log(makeRandomNum());
}

for(let i=0; i<3; i++) {
    // console.log(makeRandomNum2(15, 5));
    console.log(makeRandomNum2()); // 0 <= value <= 100
}

console.log(makePerson("Jane"))
console.log(makePerson("Tom",23))
console.log(makePerson2("Peter"))
// console.log(makePerson2()) [X]


// 배열
// let 변수명 = now Array(배열길이)
// let 변수명 = new Array();// 번 배열
// let 변수명 = new Array(값1, 값2, 값3)
// let 변수명 = [값1, 값2]

let arr:Array<string> = new Array(3);
console.log(arr) // [<3 empty items>]
arr[0]="김영희";
arr[1]="이천수";
arr[2]="홍수형";
console.log(arr) // ['김영희', '이천수', '홍수철]
arr.push("김신입") // 배열 뒤에 추가
arr.unshift('최일동')
console.log(arr);

console.log(typeof arr) //object
let obj = {name:'Alice', age:11}
console.log(typeof obj) // object

console.log('Array.isArray(arr):', Array.isArray(arr))
console.log('Array.isArray(obj):', Array.isArray(obj))

// 배열 마지막 사람을 삭제 하세요
arr.pop();
console.log(arr)
// 배열 맨처음 사람을 삭제하세요
arr.shift();
console.log(arr)

// 배열 가운데 사람 삭제 splice(startIndex, count)
arr.splice(1,2);
console.log(arr);