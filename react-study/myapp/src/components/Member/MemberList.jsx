import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import './MemberList.css'
import {Link, useNavigate} from 'react-router-dom'
// useEffect 훅에서
// fetchMemberList()호출해서 모든 회원정보 받아오기
// 목록에 출력하세요

const MemberList= () => {
    const [memberList, setMemberList] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{

        fetchMemberList();
    },[]);

    // DELETE /api/members/1
    const deletMember = async(no) => {
        // alert('삭제')
        const url = `/api/members/${no}`
        try{
            const response = await axios.delete(url)
            const responseData = response.data;
            alert(JSON.stringify(responseData))

            if(responseData.result===`success`){
                alert('삭제 성공')
                // window.location.href='/members'
                fetchMemberList();
            }else{
                alert('삭제 실패')
            }

        }catch(err){
            alert('Error: '+err.message)
        }
    }

    const fetchMemberList = async () => {
        const url = '/api/members'
        try {
            const response = await axios.get(url);
            const responseData = response.data;
            // alert(JSON.stringify(responseData));
            setMemberList(responseData);
        }catch(err) {
            alert('Error: ' + err.message)
        }
        
    }
    
    return (
        
        <div>
            <h2 className='text-center'>모든 회원 목록</h2>
            <br />
            <ul className='MemberList'>
                <li>번호</li>
                <li>이름</li>
                <li>아이디</li>
                <li>이메일</li>
                <li>등록일</li>
                <li>삭제</li>
                {memberList&&memberList.map((user, i) =>(
                    <Fragment key={i}>
                    <li >{user.no}</li>
                    <li>{user.NAME}</li>
                    <li>{user.USERID}</li>
                    <li>{user.EMAIL}</li>
                    <li>{user.REG_DATE}</li>
                    <li><Link to='#' onClick={()=>{deletMember(user.no)}} >삭제</Link></li>
                    </Fragment>
                    ))
                }
            </ul>
        </div>
    )
}
export default MemberList;
