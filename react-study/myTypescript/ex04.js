var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 타입추론 (type inference)
// java script 와 호완성을 위해 타입 주석을 생략할 수 있다.
// 생략을 하면 ts 캄파일러가 할당된 값에 따라 변수의 타입을 지정한다. 이를 타입추론이라 함
var a = 100; //a:number
var b = "안녕하세요?"; // b:string 으로 추론
console.log(a, b);
// a=true; //[X]
// 컴파일러가 초기값에 따라 타입 추론하므로 그 이후에 해당 변수는 해당 타입의 값만 가질 수 있다
var c = { name: '길동', age: 22 };
console.log(c);
// c={color:'red'} // [X]
c = { name: '고길동', age: 33 };
console.log(c);
// any 타입 : 어떤 종류의 값도 지정할 수 있다
var d = 0;
console.log(d);
d = "Hi";
console.log(d);
d = false;
console.log(d);
// undefined 타입 ==> ts에서는 값으로도 사용되고 타입으로도 사용된다
var e = undefined;
console.log(e);
// e=100 //에러 발생
function foo(value) {
    if (value) {
        return "success";
    }
    return undefined;
}
console.log(foo(true));
console.log(foo(false));
// 함수에서 유효성 체크시에도 사용
var check = function (value) {
    if (value === undefined) {
        console.log("값을 입력해야 해요");
    }
    else {
        console.log("\uB2F9\uC2E0\uC774 \uC785\uB825\uD55C \uAC12\uC740 ".concat(value, "\uC774\uAD70\uC694"));
    }
};
check("홍길동");
var f;
check(f);
// 클래스 타입
/*
    class 클래스명{
        [private|protected|public] 속성명[?]: 속성타입
    }

    private|protected|public ===> 접근 제한자(access modifier)
        private : 클래스 내부에서만 접근 가능
        protected : 상속관계시 자식이 부모로 부터 상속받은 속성을 접근할때 가능
        public : 어디서든 접근 가능
        생략하면 public이 자동으로 붙는다
 */
var Superman = /** @class */ (function () {
    function Superman() {
        this.name = ''; // 초기값을 할당하지 않으면 에러 발생
        this.height = 100; // public 속성
        this.power = 0;
    }
    return Superman;
}());
var s1 = { name: '울트라 슈퍼맨', height: 188, power: 5000 };
console.log(s1);
// class 유형은  new 키워드 이용해서 객체를 생성해서 사용한다
var s2 = new Superman();
console.log(s2);
s2.name = "박재욱";
s2.height = 177;
s2.power = 440;
console.log(s2);
var AMan = /** @class */ (function () {
    function AMan() {
        this.name = "AMan"; // has a 관계 public 속성은 어디서든 접근 가능
        this.age = 22; // private 속성은 클래스 내부에서만 접근 가능
        this.height = 165; // 자식클래서(subclass)에서 접근 가능
    }
    AMan.prototype.setAge = function (val) {
        this.age = val;
    };
    AMan.prototype.getAge = function () {
        return this.age;
    };
    return AMan;
}());
var a1 = new AMan();
console.log(a1);
a1.name = "김수철"; // 접근 가능
// a1.age=25; // 접근 불가
a1.setAge(25);
console.log(a1);
// console.log(a1.age)
console.log(a1.getAge());
// a1.height=170; // 접근 불가(protected)
var Aquaman = /** @class */ (function (_super) {
    __extends(Aquaman, _super);
    function Aquaman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 55.77;
        return _this;
    }
    Aquaman.prototype.showInfo = function () {
        console.log("\n        Name: ".concat(this.name, "\n        Age : ").concat(this.getAge(), " \n        Height : ").concat(this.height, "\n        Speed: ").concat(this.speed, "\n        "));
        // age는 private 이므로 자식에서도 접근 불가
    };
    return Aquaman;
}(AMan));
// a2 ==> Aquaman 타입을 변수 선언하고 이름, 나이, 스피드 값을 할당한 뒤
// showInfo() 호풀하기
var aq1 = new Aquaman();
aq1.showInfo();
