"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUtil_1 = require("./myUtil");
for (var i = 0; i < 3; i++) {
    console.log((0, myUtil_1.makeRandomNum)());
}
for (var i = 0; i < 3; i++) {
    // console.log(makeRandomNum2(15, 5));
    console.log((0, myUtil_1.makeRandomNum2)()); // 0 <= value <= 100
}
console.log((0, myUtil_1.makePerson)("Jane"));
console.log((0, myUtil_1.makePerson)("Tom", 23));
console.log((0, myUtil_1.makePerson2)("Peter"));
// console.log(makePerson2()) [X]
// 배열
// let 변수명 = now Array(배열길이)
// let 변수명 = new Array();// 번 배열
// let 변수명 = new Array(값1, 값2, 값3)
// let 변수명 = [값1, 값2]
var arr = new Array(3);
console.log(arr); // [<3 empty items>]
arr[0] = "김영희";
arr[1] = "이천수";
arr[2] = "홍수형";
console.log(arr); // ['김영희', '이천수', '홍수철]
arr.push("김신입"); // 배열 뒤에 추가
arr.unshift('최일동');
console.log(arr);
console.log(typeof arr); //object
var obj = { name: 'Alice', age: 11 };
console.log(typeof obj); // object
console.log('Array.isArray(arr):', Array.isArray(arr));
console.log('Array.isArray(obj):', Array.isArray(obj));
