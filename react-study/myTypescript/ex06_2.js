"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var kim = { empno: 1111, ename: '김시원', salary: 5000 };
console.log(kim);
var apple = { name: 'Apple사', year: 1988 };
var samsung = { name: '삼성전자', year: 1977, tel: '02)7777-8888' };
console.log(apple.name);
console.log(samsung.name);
// 비구조화 활당
var name = samsung.name, year = samsung.year, tel = samsung.tel;
console.log(name, year, tel);
// spread연산자 (전개연산자, 잔여 연산자)
var address = {
    nation: 'korea',
    city: 'Seoul',
    addr1: '동대문구',
    addr2: '전농동',
    addr3: '1번지 ABC 빌딩 3층'
};
var nation = address.nation, city = address.city, detail = __rest(address, ["nation", "city"]); // 잔여 연산자
console.log(nation, city);
console.log(detail);
var arr = [1, 2, 3, 'Hello'];
console.log(arr);
var arr2 = [10, 20, 30];
// 스프레드 연산자 이용한 배열 카피(깊은 복사)
var copyArr = __spreadArray([], arr2, true); // 전개 연산자
console.log(arr2);
console.log(copyArr);
copyArr[1] = 200;
console.log(arr2); // 원본 배열은 변동 없음
console.log(copyArr); //200으로 변경됨
copyArr.map(function (val, i) { return (console.log(val)); });
// spread 연산자 이용한 객체 병합
var m1 = { name: '이순신', age: 33 };
var m2 = { city: '인천' };
var m3 = { nation: 'Korea' };
var merged = __assign(__assign(__assign({}, m1), m2), m3);
console.log(merged);
// { name: '이순신', age: 33, city: '인천', nation: 'Korea'}
// 타입 단언(Type Assertion) ==> 형변환(타입 변환)
var person = { name: '김유신', age: 22 };
console.log(person);
// console.log(person.name) [X] object타입으로는 name속성에 접근 불가
// Object o=new Preson(); (Person)o.name
// 이를 해결하기 위해서는 interface를 이용하던지
// 아니면 타입 단언을 해야 한다 (형변환 필요)
// (<타입>객체) 또는 (객체 as 타입)
console.log(person.name);
console.log(person.age);
console.log(person.name);
console.log(person.age);
console.log(person.name);
