import { useState } from "react";
// 함수형 컴포넌트에서는 state를 useState()훅을 사용하여 구현한다.
// const [변수명, setXXX] = useState(초기값)
const HerComp=()=> {
    const [name, setName] = useState('홍길동');
    const [isLogin, setLogin] = useState(false);

    const onClickHandler=()=> {
        // alert('반갑다')
        // state값을 변경하고자 할때는 setXXX()함수를 이용한다
        setLogin(!isLogin);
    }
    // op1 && op2 : op1이 false 라면 op2를 수행하지 않는다. op1이 true라면 op2를 실행
    // || :
    return(
        <div style={{padding: '2em', textAlign:'center'}}>
            {isLogin&&
            <h1 style={{color:'orange'}}>{name}님 로그인 중...</h1>
            }
            {!isLogin&&
            <h1 style={{color: 'skyblue'}}>로그인 하세요</h1>
            }
            <button onClick={onClickHandler}>Toggle</button>
            <button onClick={()=>{
                onClickHandler()
            }}>Click me</button>
        </div>
    )
}
export default HerComp;