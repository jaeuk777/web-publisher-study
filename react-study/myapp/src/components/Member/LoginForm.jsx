import React, {useRef, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {Row,Col,Form,Button} from 'react-bootstrap'
import axios from '../../Lib/AxiosCreate'
import { useLoginUser } from '../context_api/LoginUserContext'

export default function LoginForm() {
    const navigate = useNavigate();
    const idRef = useRef(null)
    const passmdRef = useRef(null)
    const [loginUser, setLoginUser] = useState({userid:'', passmd:''})

    // 로그인 처리 위해 useLoginUser 로 부터 loginAuthUser 함수 받아오자
    ////////////////////////////////////////
    const {loginAuthUser} = useLoginUser();
    ////////////////////////////////////////

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!loginUser.userid) {
            alert('아이디를 입력하세요');
            idRef.current.focus();
            return;
        }
        if(!loginUser.passmd) {
            alert('비밀번호를 입력하세여')
            passmdRef.current.focus();
            return;
        }
        requestLogin();
    }
    const requestLogin = () => {
        axios.post('/api/login', loginUser)
        .then(response=> {
            // alert(JSON.stringify(response.data))
            const res = response.data;
            console.log(res);
            if(res && res.result==='success') {
                // 로그인 성공
                const authUser = res.data;
                loginAuthUser(authUser); //인증받은 회원의 no, name, userid 를 전달
                console.log('authUser: ', authUser)
                alert(res.msg); // 환영 메세지
                // navigate('/'); //홈페이지로 이동 Context사용시 (새로고침시 인증받은 사용자 정보 날라감)
                // 이름 해결하기 위해 sessionStorage에 인증받은 사용자 정보를 정장하자.
                // sessionStorage는 웹브라우저 사용하는 동안 저장한 정보를 유지한다.
                // 브라우저를 닫으면 저장한 정보는 날라간다
                sessionStorage.setItem('userInfo', JSON.stringify(authUser))
                window.location.href='/'; // 새로고침
            }else{
                sessionStorage.clear(); // 세션 스토리지 클리어 (저장한 모든 정보 삭제됨)
                sessionStorage.removeItem('userInfo')// userInfo 에 해당하는 값만 삭제
                // 실패
                alert(res.msg)
                setLoginUser({...loginUser, userid:'', passmd:''})
            }
        })
        .catch(err=>{
            alert('Error: ' + err.message) //404
        })
    }
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setLoginUser({... loginUser, [name]:value})
        console.log('loginuser: ', loginUser)
    }

    return (
        <div>
            <Row className='my-5 LoginForm'>
                <Col className='p-5 mx-auto' xs={10} sm={10} md={6} >
                <h2 className='text-center my-4'>Login</h2>
                <Form method='post' onSubmit={onSubmit}>
                    <Form.Group className='my-2'>
                        <Form.Label htmlFor='userid'>ID</Form.Label>
                        <Form.Control type='text' name='userid' id='userid'
                        onChange={onChangeInput}
                        value={loginUser.userid}
                        placeholder='ID' ref={idRef} />
                    </Form.Group>

                    <Form.Group className='my-4'>
                        <Form.Label htmlFor='userid'>Password</Form.Label>
                        <Form.Control type='password' name='passmd' id='passwd'
                        onChange={onChangeInput}
                        value={loginUser.passmd}
                        placeholder='Password' ref={passmdRef} />
                    </Form.Group>
                    <div className='d-grid gap-2 my-3'>
                        <Button type='submit' variant='success'>Login</Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </div>
    )
}
