// 타입추론 (type inference)
// java script 와 호완성을 위해 타입 주석을 생략할 수 있다.
// 생략을 하면 ts 캄파일러가 할당된 값에 따라 변수의 타입을 지정한다. 이를 타입추론이라 함
let a=100; //a:number
let b="안녕하세요?" // b:string 으로 추론
console.log(a, b)
// a=true; //[X]
// 컴파일러가 초기값에 따라 타입 추론하므로 그 이후에 해당 변수는 해당 타입의 값만 가질 수 있다
let c={name:'길동', age:22}
console.log(c)
// c={color:'red'} // [X]
c={name:'고길동',age:33}
console.log(c)

// any 타입 : 어떤 종류의 값도 지정할 수 있다
let d:any = 0;
console.log(d)
d="Hi"
console.log(d);
d=false;
console.log(d)

// undefined 타입 ==> ts에서는 값으로도 사용되고 타입으로도 사용된다
let e:undefined = undefined
console.log(e);
// e=100 //에러 발생

function foo(value:boolean):string|undefined{
    if(value) {
        return "success"
    }
    return undefined;
}
console.log(foo(true))
console.log(foo(false))
// 함수에서 유효성 체크시에도 사용
const check = (value:string|undefined) => {
    if(value===undefined) {
        console.log("값을 입력해야 해요")
    }else{
        console.log(`당신이 입력한 값은 ${value}이군요`)
    }
}
check("홍길동");
let f;
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
class Superman{
    public name:string=''; // 초기값을 할당하지 않으면 에러 발생
            height:number=100; // public 속성
            power?:number=0;
}

let s1:Superman={name:'울트라 슈퍼맨', height:188, power:5000}
console.log(s1)
// class 유형은  new 키워드 이용해서 객체를 생성해서 사용한다
let s2=new Superman()
console.log(s2)
s2.name="박재욱";
s2.height=177;
s2.power=440;

console.log(s2)

class AMan {
    public name:string="AMan"; // has a 관계 public 속성은 어디서든 접근 가능
    private age:number=22; // private 속성은 클래스 내부에서만 접근 가능
    protected height:number=165; // 자식클래서(subclass)에서 접근 가능

    public setAge(val:number):void{ // setter
        this.age = val;
    }
    public getAge():number{ // getter
        return this.age;
    }
}

let a1:AMan=new AMan();
console.log(a1);
a1.name = "김수철" // 접근 가능
// a1.age=25; // 접근 불가
a1.setAge(25);
console.log(a1)

// console.log(a1.age)
console.log(a1.getAge())

// a1.height=170; // 접근 불가(protected)
class Aquaman extends AMan { // extends : 상속
    speed:number=55.77;
    showInfo():void{
        console.log(`
        Name: ${this.name}
        Age : ${this.getAge()} 
        Height : ${this.height}
        Speed: ${this.speed}
        `)
        // age는 private 이므로 자식에서도 접근 불가
    }
}

// a2 ==> Aquaman 타입을 변수 선언하고 이름, 나이, 스피드 값을 할당한 뒤
// showInfo() 호풀하기
let aq1:Aquaman = new Aquaman();
aq1.showInfo();
aq1.name="i'm hungry"
// aq1.age= "12"
aq1.setAge(12)
// sq1.height=70; [X]
aq1.speed=100

aq1.showInfo();


