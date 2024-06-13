import React,{useEffect, useState} from 'react'

export default function Clcok() {
    const [time, setTime]=useState(new Date())
    const [date, setDate]=useState(new Date())
    useEffect(() => {
        const timerId=setInterval(() => {
            setTime(new Date()) // 1초마다 새로운 Date객체를 얻어와 time값으로 setting
            console.log('timer돌아감')
        },1000)

        return () => {
            // 이 안에서 setInterval()을 해제 ==> 
            clearInterval(timerId)
        }
    })

    // let id=setTimeout(함수, 밀리초) : 함수를 밀리초가 지난 후 1번 호출한다.
    // id = Timeout(()=> {
    //     window.location.href=''
    // }, 3000)
    // clearTimeout(id) ==> setTimeout() 프로그램을 중지
    // let id=setIntercal(함수, 밀리초) : 함수를 밀리초 단위로 추가적으로 호출한다
    // clearInterval(id)

    return (
        <div className='text-center py-5'>
            <h1>Clock</h1>
            <hr />
            <h2>오늘 날짜는 <span className='text-primary'>{date.getDate()}</span></h2>
            <h2>현재 시간은 <span className='text-danger'>{time.toLocaleTimeString()}</span> 입니다 </h2>
        </div>
    )
}
