import {useState} from 'react';
const Join = ()=> {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [age, setAge]=useState(0)
    // 이벤트를 처리하는 핸들러함수에서는 event객체를 매개변수로 받을 수 있다
    const onChangeName=(e)=>{
        // console.log('e.target.name: ', e.target.name) // input name 출력
        // console.log('e.target.value: ', e.target.value) // 해당 input에 사용자가 입력한 값 출력
        setName(e.target.value)
    }
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangeAge=(e)=>{
        setAge(e.target.value)
    }

    return (
        <div className="container py-4">
            이름: <input type="text" name="name" placeholder="Name" className="form-control" onChange={onChangeName}/><br/>
            이메일: <input type="text" name="email" placeholder="Email" className="form-control" onChange={onChangeEmail}/><br/>
            나 이: <input type="text" name="age" placeholder="Age" className="form-control" onChange={onChangeAge}/><br/>
            <button onClick={onChangeAge} className="btn btn-primary">회원가입</button>
            <hr />
            <h1 style={{color:"tomato"}}>이름:{name} 나이: {age}세 이메일: {email}</h1>
        </div>
    )
}
export default Join;