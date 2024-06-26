// 클래스 구성시 생성자를 구성할 수 있다.
// 생성자는 객체를 생성할 때 홀출되는 일종의 메서드
// constructor(매개변수1, 매개변수2, ...) { this.매개변수1=매개변수1;... }

class Student {
    no:number=0;
    name:string='아무개';
    cname:string='리액트반';
}
class Teacher {
    no:number; // 멤버 변수
    name:string; 
    subject:string;
    constructor(no:number, name:string, subject:string){
        this.no =no; // this.no : 멤버변수, no:매개변수
        this.name=name;
        this.subject=subject;
    }
}
let d1:Student = new Student();
console.log(d1)
let t1:Teacher = new Teacher(100, "이교사","수학")
console.log(t1)

class Staff {
    constructor(public name:string, public dept:string) {
    }
}
// class Staff {
//     public name : string;
//     public dept : string;
// }

let sf:Staff = new Staff("김직원", "영업부")
console.log(sf.name)
console.log(sf.dept)

// 인터페이스명: IPerson ===> spec역활을 할 분, 클래스에서 상속받으면인터페이스에서
//                          정의하고 있는 속성을 멤버 속성으로 포함해야 한다
// 속성 : name, age?, height
class IPerson {
    name:string;
    age?:number;
    height:number;
}
// 클래스명 : Person
// 클래스가 인터페이스를 상속받을 때는 implements을 이용
// Person 에서 IPerson을 상속받고 생성자를 구성하되 매개변수는 모두 public 으로 주세요
// Person에서 showInfo()함수를 구성하고 그 안에서 이름, 나이, 키를 출력하세요.
class Person implements IPerson{
    // Name: string;
    // Age?: number | undefined;
    constructor(public name, public height){}
    public showInfo():string {
        let str:string = `
            이름 : ${this.name}
            키 :  ${this.height} cm
        `;
        return str; // 문자열을 반환
    }
}
// Person타입 객체 생성해서 showInfo()호출해보기
// let per1:Person = new Person(); // 에러
let per1:Person = new Person("송해선", 162)
let info:string=per1.showInfo();
console.log(info)

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
abstract class Animal {
    abstract name:string;
    abstract crySound():string;
    constructor(public age?:number) {

    }

}
// let an:Animal = new Animal();
// 추상 클래스는 new 연산자를 이용해 객체를 만들 수 없다
class Dog extends Animal {
    // name : string="강아지"
    constructor(public name:string) {
        super(); // 부모 클래스의 기본 생성자
    }
    
    crySound():string{
        return "개소리야"
    }
}
let dl:Dog=new Dog("바둑이")
console.log(dl.crySound())

// Cat 클래스를 만들되 Animal 을 상속받도록 하세요
// constructor에서 name, age를 받으세요
// crySound()구현하세요
class Cat extends Animal {
    constructor(public name:string, public age:number) {
        super();
    }

    crySound():string{
        return "냐오옹~"
    }
}
let cat:Cat = new Cat ("몽땅이",2)
console.log(cat.crySound())

let cat2:Animal = new Cat("밍땅이",3)
console.log(cat2.crySound())

