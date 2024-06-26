/* 함수 구성
[1] function 을 이용한 함수 구성
[2] 리터럴 방식 화살표 함수
*/
// [1] function 을 이용한 함수 구성
function plus(a, b) {
    var c = a + b;
    console.log("".concat(a, " + ").concat(b, " = ").concat(c));
    return c;
}
plus(5, 8);
// [2] 곱셈식 수행하는 함수를 화살표함수로 구현하세요
// multiply
var multiply = function (a, b) {
    var c = a * b;
    console.log("".concat(a, " x ").concat(b, " = ").concat(c));
    return c;
};
multiply(6, 9);
// 함수 시그니처 (함수 타입 선언) : 함수 타입을 함수 시그니처라고 한다
// (매개변수 1 타입1, 매개변수2 타입2,.....)=> 반환값 타입
var bar = function (str, num) {
    for (var i = 0; i < num; i++) {
        console.log(str);
    }
};
bar("@@@@", 5);
var greeting;
greeting = function (nm) {
    return "Hello " + nm + "님~";
};
console.log(greeting("현수"));
console.log(greeting("영희"));
// 나누기를 수행하는 divide 함수 시그니처 이용해서 구성한 뒤 호출 하세요
function divide1(a, b) {
    var c = a / b;
    console.log("".concat(a, " / ").concat(b, " = ").concat(c));
}
divide1(10, 5);
var divide; // 반환 타입이 없는 함수 시그니쳐
divide = function (a, b) {
    console.log("".concat(a, " / ").concat(b, " = ").concat(a / b));
    var c = a / b;
};
divide(64, 2);
//매개변수가 없는 함수 시그니처
var logHello;
logHello = function () {
    console.log("Hello~~~~~~~");
};
logHello();
// 선택적 매개변수를 갖는 함수 시그니처
var greetOptionAge;
greetOptionAge = function (nm, ag) {
    if (ag) {
        return "".concat(nm, "\uB2D8\uC740 ").concat(ag, "\uC138 \uC774\uAD70\uC694");
    }
    else {
        return "\uC548\uB155\uD558\uC138\uC694?".concat(nm, "\uB2D8!!!");
    }
};
var msg = greetOptionAge('박재욱');
console.log(msg);
msg = greetOptionAge('김철수', 31);
console.log(msg);
var myname = '김진호';
var giveMe = 5000000;
console.log(myname, giveMe);
var uid = "Tom";
var uid2 = 150;
var uid3 = '25세';
console.log(uid, uid2, uid3);
var f1 = function (a1, a2) {
    console.log("a1=".concat(a1, ", a2=").concat(a2));
};
f1("Hi", 900);
