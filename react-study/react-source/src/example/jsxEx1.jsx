function JsxEx1() {
    const newStyle = {
        fontSize: '2rem',
        color: 'white'
    }
    const mydata="Hello React";

    return(
        <div style={{backgroundColor:'skyblue', padding:'10px'}}>
            <h1 style={newStyle}>JsxEx1 컴포넌트</h1>
            {/* p태그 안에  mydata 를 출력해서 보여주기
                p태그의 배경색은 lightblue로 주세요
            */}
            <p style={{backgroundColor:'lightblue'}}>{mydata}</p>
        </div>
    )
}
export default JsxEx1;