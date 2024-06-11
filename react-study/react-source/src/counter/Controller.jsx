export default function Controller({handleCount}) {
    // 부모로부터 handleCount 속성을 내려 받는다


    return (
        <div className="Controller">
            {/* -1버튼 클릭시 속성으로 받은 handleCount(-1) */}
            <button onClick={()=>{handleCount(-1)}}>-1</button>
            <button onClick={()=>{handleCount(-10)}}>-10</button>
            <button onClick={()=>{handleCount(-100)}}>-100</button>
            <button onClick={()=>{handleCount(+100)}}>+100</button>
            <button onClick={()=>{handleCount(+10)}}>+10</button>
            <button onClick={()=>{handleCount(+1)}}>+1</button>
        </div>

    )
}