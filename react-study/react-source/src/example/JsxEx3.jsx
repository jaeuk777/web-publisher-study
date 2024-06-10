function GetLang() {
    return <h3>제가 사용하는 언어는 JS,ReactJS</h3>
}
export function GetPet() {
    return <h3>제가 키우는 반려견은 토미입니다.</h3>
}
export default GetLang;
// default로 내보내는 컴포넌트는 1개만 가능
// import 하는 쪽에서는 default 는 아무 이름이나 붙여도 되나
// default가 아닌 모듈은 해당 컴포넌트 이름과 같아야 한다
// import MyLang from `./example/JsxEx3`
// import {GetPet} from `./example/JsxEx3`