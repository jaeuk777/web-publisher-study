// 여러 개의 컴포넌트를 export 하자
// export default 로는 하나의 컴포넌트만 내보낼 수 있다.
function GetBrand(){
    return <h2>내가 사용하는 노트북은 APLLE 입니다</h2>
}
function GetOS() {
    return <h2>내 노트북의 운영체제는 MACOS 입니다</h2>
}

export {GetBrand, GetOS};