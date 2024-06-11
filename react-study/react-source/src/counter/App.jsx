import Viewer from "./Viewer"
import Controller from "./Controller"
import './Counter.css'
import { useState } from "react"
export default function App() {
    // 계층 관계에 있을때 state 데이터는 부모쪽에서 갖는 것이 좋다
    const [count, setCount]=useState(0);

    // Viewer 에 count state를 props로 전달하고, Viewer에서 전달받은 props count를 출력하세요
    // 부모가 ==> 자식에세 데이터 전달: props 로 전달한다.
    // 자식이 ==> 부모에게 데이터 전달: event 로 전달한다.
    const handleCount=(value)=>{
        // alert(value)
        setCount(count+value)
        if(setCount>100){alert('숫자가 너무 큽니다.')}
    }
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <Viewer mycount={count}/>
            <br />
            <Controller handleCount={handleCount}/>
        </div>
    )
}