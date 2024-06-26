interface Member {
    no : number;
    name : string;
    userid : string;
    passwd : string;
}
let user1:Member = {no:1, name:"김희원", userid:"kim", passwd:"123"}
console.log(user1)
// 인터페이스가 인터페이스를 상속받을 떄는 extends 키워드를 사용한다
// 클래스가 인터페이스를 상속받을 때는 implemets 키워드 사용함
interface Employee extends Member{
    profile:string[];
}
// Employee타입의 변수를 선언하고 값을 할당하세요
    let emp1:Employee ={
        no:7788,
        name:"이사원",
        userid:'lee',
        passwd:"111",
        profile:["프런트 개발자 3년","백엔드 개발자 1년"]
    }
    console.log(emp1.no);
    console.log(emp1.name)
    console.log(emp1.userid)
    console.log(emp1.passwd)
    // emp1의 profile을 for루프 이용해 출력해보세요
    const profiles = emp1.profile
    for(let i=0; i<profiles.length; i++) {
        console.log(profiles[i])
    }
    // 익명 인터페이스: interface란 키워드를 사용하지 않고 이름없는 인터페이스를 만든다
    //              주로 함수 구현할때
    let teacher:{
        no:number;
        name:string;
        subject?:string;
        etc?: boolean;
    }={name:"김교사",no:100,subject:"국어", etc:true}
    console.log(teacher);

    function showInfo(user:{name:string, age:number, etc?:boolean}){
        // return "hello" // void 함수는 반환값을 가질 수 없다
        console.log(`
        Name : ${user.name}
        Age : ${user.age}
        Etc : ${user.etc}
        ':'
        Name : ${user.name}
        Age : ${user.age}
        `)
    }

    // showInfo()호출하세요
    showInfo({name:"최영희",age:22, etc:true})
    showInfo({name:"김재원",age:33})

    // type 키워드를 이용해서 타입을 정의할 수도 있다
    // type은 주로 기본자료형(numberm string, boolean) 정의를 단순하게
    // 표현하고자 할때 사용된다
    // 합집합, 교집합을 이용해서 복잡한 타입 정의사에 사용된다
    type Man = {
        name:string;
        height:number;
    }
    let m1:Man={name:'정약용', height:178}
    console.log(m1)
    type Emp = Man & {
        jobTitle: string;
    }
    
    let e1:Emp = {...m1, jobTitle:'의자'}
    console.log(e1);