// 클래스 구성시 생성자를 구성할 수 있다.
// 생성자는 객체를 생성할 때 홀출되는 일종의 메서드
// constructor(매개변수1, 매개변수2, ...) { this.매개변수1=매개변수1;... }
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
var Student = /** @class */ (function () {
    function Student() {
        this.no = 0;
        this.name = '아무개';
        this.cname = '리액트반';
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(no, name, subject) {
        this.no = no; // this.no : 멤버변수, no:매개변수
        this.name = name;
        this.subject = subject;
    }
    return Teacher;
}());
var d1 = new Student();
console.log(d1);
var t1 = new Teacher(100, "이교사", "수학");
console.log(t1);
var Staff = /** @class */ (function () {
    function Staff(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    return Staff;
}());
// class Staff {
//     public name : string;
//     public dept : string;
// }
var sf = new Staff("김직원", "영업부");
console.log(sf.name);
console.log(sf.dept);
// 인터페이스명: IPerson ===> spec역활을 할 분, 클래스에서 상속받으면인터페이스에서
//                          정의하고 있는 속성을 멤버 속성으로 포함해야 한다
// 속성 : name, age?, height
var IPerson = /** @class */ (function () {
    function IPerson() {
    }
    return IPerson;
}());
// 클래스명 : Person
// 클래스가 인터페이스를 상속받을 때는 implements을 이용
// Person 에서 IPerson을 상속받고 생성자를 구성하되 매개변수는 모두 public 으로 주세요
// Person에서 showInfo()함수를 구성하고 그 안에서 이름, 나이, 키를 출력하세요.
var Person = /** @class */ (function () {
    // Name: string;
    // Age?: number | undefined;
    function Person(name, height) {
        this.name = name;
        this.height = height;
    }
    Person.prototype.showInfo = function () {
        var str = "\n            \uC774\uB984 : ".concat(this.name, "\n            \uD0A4 :  ").concat(this.height, " cm\n        ");
        return str; // 문자열을 반환
    };
    return Person;
}());
// Person타입 객체 생성해서 showInfo()호출해보기
// let per1:Person = new Person(); // 에러
var per1 = new Person("송해선", 162);
var info = per1.showInfo();
console.log(info);
// 추상 클래스
// abstract 키워드를 사용해 추상클래스를 만들 수 없다.
// 추상클래스의 목적: 상속 받는 자식 클래스에서 추상 클래스의 속성이나 메서드를
// 구현하게 하려는 데 있다
/*
    abstract 클래스명 (
        abstract 속셩명 : 타입;
        abstract 메서드명 : 타입;
    )

    추상 클래스는 new 연산자를 이용해 객체를 만들 수 없다

*/
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    return Animal;
}());
// let an:Animal = new Animal();
// 추상 클래스는 new 연산자를 이용해 객체를 만들 수 없다
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // name : string="강아지"
    function Dog(name) {
        var _this = _super.call(this) || this; // 부모 클래스의 기본 생성자
        _this.name = name;
        return _this;
    }
    Dog.prototype.crySound = function () {
        return "개소리야";
    };
    return Dog;
}(Animal));
var dl = new Dog("바둑이");
console.log(dl.crySound());
// Cat 클래스를 만들되 Animal 을 상속받도록 하세요
// constructor에서 name, age를 받으세요
// crySound()구현하세요
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Cat.prototype.crySound = function () {
        return "냐오옹~";
    };
    return Cat;
}(Animal));
var cat = new Cat("몽땅이", 2);
console.log(cat.crySound());
var cat2 = new Cat("밍땅이", 3);
console.log(cat2.crySound());
