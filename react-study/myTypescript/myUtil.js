"use strict";
// makeRandomNum() 함수를 구성하세요
// Math.random()함수 이용해서 0.0<= val < 1.0 사이의 임의의 난수를 발생시키는
// 함수를 구성하고 export하세요
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson2 = exports.makePerson = void 0;
exports.makeRandomNum = makeRandomNum;
exports.makeRandomNum2 = makeRandomNum2;
function makeRandomNum() {
    var num = Math.random();
    return num;
}
// makeRandomNum2(max, start)
// start<= value <max 사이의 랜덤한 점수값을 반환하는 함수를 구성하세요 실수
// 5<= value 15
// Math.random() * 범위 + 시작수
function makeRandomNum2(max, start) {
    if (max === void 0) { max = 100; }
    if (start === void 0) { start = 0; }
    var bound = max - start;
    var num = Math.random() * bound + start;
    return num;
}
// 화살표 함수로 makePerson()함수를 구성하되,
// 매개변수 name, age 를 받되, age의 기본값을 makeRandomNum2()함수를 이용해서 할당하세요
// makePerson() 함수의 반환타입은 IPerson타입으로 반환하세요
var makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNum2(); }
    return { name: name, age: age };
};
exports.makePerson = makePerson;
var makePerson2 = function (name, age) {
    if (age === void 0) { age = makeRandomNum2(); }
    return ({ name: name, age: age });
};
exports.makePerson2 = makePerson2;
