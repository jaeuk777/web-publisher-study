import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import axios from '../../Lib/AxiosCreate';

const SignUp = () => {
    const navigate = useNavigate();
    const [member, setMember] = useState({name:'', userid:'',passmd:'',email:''});
    const [passwdChk, setPasswdChk] = useState('');
    const [cmmError, setCmmError] = useState(false);
    // const [useridError, setUseridError] = useState(false);
    const [passwdError, setPasswdError] = useState(false);



    const onSubmitHandler = (e) => {
        // 서버로 submit하지 않도록 막자
        e.preventDefault();
        // 유효성 체크
        if(!member.name) {
            setCmmError(true);
            return;
        }
        if(!member.userid) {
            setCmmError(true);
            return;
        }
        if(member.passmd != passwdChk) {
            setPasswdError(true)
        }


        console.log('from submitting ....')
        requestJoin(); //회원가입 요청을 보내는 함수 호출
    }

    const requestJoin = async () => {
        let url = '/api/members'
        try {
            const response = await axios.post(url, member)
            console.log(JSON.stringify(response))
            const responseData = response.data;
            if(responseData && responseData.result==='success'){
                setCmmError(false);
                setPasswdError(false);
                alert('회원가입 완료. 로그인 페이지로 이동합니다')
                navigate(`/login`)

            }else{
                alert('회원가입 실패.')
            }
        }catch(err){
            if(err.response && err.response.status===500||err.response.status===400){
                console.log('Error: '+ err.message)
            }
        }
    }

    const onChangeHandler = (e) => {
        console.log('e.target: ', e.target.name) // e.target 의 속성 name (input name 이 들어옴), value (사용자의 )
        console.log('e.value', e.target.value)
        setMember({...member, [e.target.name]: e.target.value })
        console.log('user:', member)
    }
    const onChangepasswdHandler = (e) => {
        // 비밀번호와 비밀번호 확인 값이 다르면 bool에 true할당, 같으면 false
        let bool = e.target.value !== member.passmd
        setPasswdError(bool)
        setPasswdChk(e.target.value)
    }
    return (
        <Container className='py-4'>
            <h2 className='my-3 text-center'>SignUP</h2>
            <Row>
                <Col md={8} className='offset-2'>
                    <Form action='/api/members' method='post' onSubmit={onSubmitHandler}>
                        <Form.Label htmlFor='name'>이름</Form.Label>
                        <Form.Control type='text' onChange={onChangeHandler}
                        name='name' id='name' value={member.name} placeholder='Name'></Form.Control>
                        {cmmError&&
                            <div className='text-danger mb-3'>이름을 입력해야 해요</div>}

                        <Form.Label htmlFor='userid'>아이디</Form.Label>
                        <Form.Control type='text' onChange={onChangeHandler}
                        name='userid' id='userid' value={member.id} placeholder='User ID'></Form.Control>
                        {cmmError&&
                            <div className='text-danger mb-3'>아이디를 입력해야 해요</div>}

                        <Form.Label htmlFor='passwd'>비밀번호</Form.Label>
                        <Form.Control type='text' value={member.passmd} onChange={onChangeHandler}
                        name='passmd' id='passmd' placeholder='Password'></Form.Control>
                        {cmmError&&
                            <div className='text-danger mb-3'>비밀번호를 입력해야 해요</div>}

                        <Form.Label htmlFor='passwdChk'>비밀번호 확인</Form.Label>
                        <Form.Control type='text' value={member.passmChk} onChange={onChangepasswdHandler}
                        name='passmdChk' id='passmdChk' placeholder='Re Password'></Form.Control>
                        {passwdError&&
                            <div className='text-danger mb-3'>비밀번호가 일치하지 않아요</div>}

                        <Form.Label htmlFor='email'>이메일</Form.Label>
                        <Form.Control type='email' value={member.email} onChange={onChangeHandler}
                        name='email' id='email' placeholder='Email'></Form.Control>
                        {cmmError&&
                            <div className='text-danger mb-3'>이메일 형식에 맞지 않아요</div>}

                        <div className='text-center py-2'>
                            <Button type='submit' variant='outline-success' className='mx-2'>회원 가입</Button>
                            <Button type='rest' variant='outline-danger'>다시 쓰기</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;
