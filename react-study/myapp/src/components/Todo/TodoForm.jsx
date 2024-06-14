import React, { useCallback, useState, useRef } from 'react'
import {Row, Col, Button } from 'react-bootstrap'
import './TodoForm.css'
import { BsPen } from "react-icons/bs";
import { IoRefreshCircleOutline } from "react-icons/io5";

export default function TodoForm({onCreate}) {
    const [content, setContent] = useState('')
    const contentRef = useRef();
    const onChange =useCallback((e)=>{
        setContent(e.target.value)
    },[])

    const onKeyDown=(e)=> {
        console.log(e.keyCode)
        if(e.keycode=== '13' ){ //엔터 쳤을때
            onSubmit();
            console.log(onSubmit());
        }
    }

    const onSubmit=()=> {
        // alert('+')
        // 유효성 체크
        if(!content) {
            alert('새로 해야할 일을 입력하세요');
            contentRef.current.focus();
            return;
        }
        // 부모로부터 props로 전달받은 속성(핸들러함수)을 이용해서
        // content 를 부모에 전달한다
        onCreate(content)

        setContent('')// 초기화
    };
    const onReset=()=> {
        // alert('reset')
        setContent('')
        // content.current.focus();

    }
    return (
        <div>
            <h3 className='my-4'>새로운 Todo 추가 <BsPen /></h3>
            <Row>
                <Col xs={12} sm={8} md={8}>
                    <input className='inputCss' ref={contentRef} name='content'
                    onChange={onChange} onKeyDown={onKeyDown} value={content}/>
                </Col>
                <Col xs={12} sm={4} md={4}>
                    <Button variant='outline-primary' onClick={onSubmit}> + </Button>
                    <Button variant='outline-warning' onClick={onReset}><IoRefreshCircleOutline /></Button>
                </Col>
            </Row>
        </div>
    )
}
