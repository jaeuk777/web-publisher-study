import { useState } from "react";
const OurComp=()=>{
    // 일반 데이터
    let bgcolor='orange'
    // state데이터
    const [mycolor, setMyColor]=useState('green')

    const handleClick1=()=> {
        // bgcolor번경
        // bgcolor='lime';
        // 일반 데이터의 경우 값이 변경되어도 화면이 다시 그려지지는 않는다
        // console.log('bgcolor: ', bgcolor);
        
    }
    const handleClick2=()=> {
        // mycolor변경 ==> state
        // 변수선언문?
        // let cr=(flag)? 'maroon':'green'
        let cr='green'
        if(flag===true) {
            cr='maroon'
            setFlag(false)
        }else{
            cr='skyblue'
            setFlag(true)
        }
        setMyColor(cr)
        setFlag(!flag);
        //state의 경우 데이터가 변경되면 화면을 리 렌더링을 한다
    }

    return (
        <div style={{textAlign:'center'}}>
            <button 
            onClick={handleClick1} 
            style={{backgroundColor:bgcolor}}>like1</button>
            <button 
            onClick={handleClick2} 
            style={{backgroundColor:mycolor, color:'white'}}>like2</button>
        </div>
    )
}
export default OurComp;