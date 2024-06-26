var user1 = { no: 1, name: "김희원", userid: "kim", passwd: "123" };
console.log(user1);
// Employee타입의 변수를 선언하고 값을 할당하세요
var emp1 = {
    no: 7788,
    name: "이사원",
    userid: 'lee',
    passwd: "111",
    profile: ["프런트 개발자 3년", "백엔드 개발자 1년"]
};
console.log(emp1.no);
console.log(emp1.name);
console.log(emp1.userid);
console.log(emp1.passwd);
// emp1의 profile을 for루프 이용해 출력해보세요
var profiles = emp1.profile;
for (var i = 0; i < profiles.length; i++) {
    console.log(profiles[i]);
}
// 익명 인터페이스: interface란 키워드를 사용하지 않고 이름없는 인터페이스를 만든다
//              주로 함수 구현할때
var teacher = { name: "김교사", no: 100, subject: "국어", etc: true };
console.log(teacher);
function showInfo(user) {
    // return "hello" // void 함수는 반환값을 가질 수 없다
    console.log("\n        Name : ".concat(user.name, "\n        Age : ").concat(user.age, "\n        Etc : ").concat(user.etc), ":", "Name : ".concat(user.name, "\n        Age : ").concat(user.age, "\n        "));
}
// showInfo()호출하세요
showInfo({ name: "최영희", age: 22, etc: true });
showInfo({ name: "김재원", age: 33 });
