import { AxiosResponse } from 'axios'
import { request } from 'http'
import React,{useState,ChangeEvent, FormEvent} from 'react'
import {Button} from 'react-bootstrap'
import axios from '../Lib/AxiosCreate'

export interface User {
    name:string
    userid:string
    passmd:string|undefined
    email:string|undefined
}
export interface ResponseUserData {
    result:string
    data:User

}
export default function SignUp() {
    const [user, setUser] = useState<User>({name:'', userid:'', passmd:'', email:''})
    const [nameErr, setNameErr] = useState<boolean>(false)
    const [useridErr, setUserIdErr] = useState<boolean>(false)
    const [passwdErr, setPassWdErr] = useState<boolean>(false)
    const [emailErr, setEmailErr] = useState<boolean>(false)

    const onSubmit=(e:FormEvent<HTMLFormElement>):boolean=>{
        // 유효성 체크
        e.preventDefault();
        // 정규식 ===> RegExp 객체  /로 시작    /로 끝을 낸다
        // {2} : 2자리 허용
        // {2, } : 2자리 이상 허용
        // {2,20} : 2~20자 까지 가능
        // /^[a-z A-Z 가-하]{2,20}^/
        // 메타 문자 : ^  시작의 의미, $ 끝을 의미

        let isName:boolean =/^[a-zA-Z가-힣]{2,20}$/.test(user.name)
        // 패턴.test(값) : 값이 패턴에 함당하면 true 반환, 합당하지 않으면 false 반환
        // alert(isName)
        //() : 그룹지을떄
        let isUserid:boolean=/^([a-zA-Z])[a-zA-Z0-9!_-]{3,7}$/.test(user.userid)
        // alert(isUserid)
        // \w : 알파벳 대소문자, 숫자
        // + : 1개 이상 와야함을 의미
        // * : 0개 이상 와야함을 의미
        // ? : zero or one

        if(!isName){
            setNameErr(true)
            return false;
        }else{
            setNameErr(false)
        }

        if(!isUserid) {
            setUserIdErr(true)
            return false;
        }else{
            setUserIdErr(false)
        }

        if(user.passmd!==undefined) {
            let isPasswd:boolean=/^[\w!_-]{4,8}$/.test(user.passmd)
            if(!isPasswd) {
                setPassWdErr(true)
            }else{
                setPassWdErr(false)
            }
        }else{
            setPassWdErr(true)
        }

        // asdf-12cd@naver.com
        // asdf.m@data.go.kr
        // -, . , _ 허용
        if(user.email!==undefined) {
            let isEmail:boolean=/^([A-Za-z])[\w-_]+(.[\w]+)*@([a-zA-Z])+(\.)+[a-z]{2,3}$/.test(user.email)
            alert(isEmail)
        }else{
            setEmailErr(true)
        }
        

        requestJoin();
        return true;

    }
    const requestJoin=async()=> {
        try{
            const response:AxiosResponse<ResponseUserData> = 
            await axios.post('/api/members', user)
            const responseData:ResponseUserData = response.data;

            if(responseData&& responseData.result==='success') {
                alert('회원가입 완료. 로그인 페이지로 이동합니다')
            }else{
                alert('회원 가입 실패~아이디 중복을 체크하세요')
            }
        }catch(err:any) {
            alert('Error: '+JSON.stringify(err.response))
        }
    }
    const onChangevalue=(e:ChangeEvent<HTMLInputElement>):void=> {
        setUser({...user, [e.target.name]:e.target.value});
    }

    return (
        <div className='container'>
            <div className='col-8 offset-2'>
                <form onSubmit={onSubmit}>
                    <h1 className='text-center my-4'>SignUp</h1>
                    <table className='table'>
                        <tr>
                            <td style={{width:'20%'}}>
                                <label>이름</label>
                            </td>
                            <td>
                                <input type="text" 
                                onChange={onChangevalue} value={user.name}
                                name="name" className='form-control'></input>
                                {nameErr&&<div className='text-danger'>이름은 한글 또는 영문자만 가능해요</div>}
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'20%'}}>
                                <label>아이디</label>
                            </td>
                            <td>
                                <input type="" 
                                onChange={onChangevalue} value={user.userid}
                                name="userid" className='form-control'></input>
                                <button type="button" className="btn btn-success">아이디 중복체크</button>
                                {useridErr&&<div className='text-danger'>아이디는 영문자로 시작하고 영어,슷자,_-! 4~8자리만 가능해요</div>}
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'20%'}}>
                                <label>비밀번호</label>
                            </td>
                            <td>
                                <input type="password" 
                                onChange={onChangevalue} value={user.passmd}
                                name="passmd" className='form-control'></input>
                                {passwdErr&&<div className='text-danger'>비밀번호는 영문,슷자,_-! 4~8자리만 가능해요</div>}
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'20%'}}>
                                <label>이메일</label>
                            </td>
                            <td>
                                <input type="email" 
                                onChange={onChangevalue}
                                value={user.email}
                                name="email" className='form-control'></input>
                                {emailErr&&<div className='text-danger'>이메일 형식에 맞아야 해요</div>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button 
                                type='submit' className='btn btn-success'>회원가입</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
