import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MemberList.css'
// useEffect 훅에서
// fetchMemberList()호출해서 모든 회원정보 받아오기
// 목록에 출력하세요

const MemberList= () => {
    const [memberList, setMemberList] = useState([])

    useEffect(()=>{

        fetchMemberList();
    },[]);

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
                    <div key={i}>
                    <li >{user.no}</li>
                    <li>{user.NAME}</li>
                    <li>{user.USERID}</li>
                    <li>{user.EMAIL}</li>
                    <li>{user.REG_DATE}</li>
                    <li>삭제</li>
                    </div>
                    ))
                }
            </ul>
        </div>
    )
}
export default MemberList;
