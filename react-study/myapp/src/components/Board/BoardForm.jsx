import React, {useState, useRef}from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import axios from '../../Lib/AxiosCreate'

export default function BoardForm({onMode}) {
    const initData = {
        title:'',
        content:'',
        userid:''
    }
    const [form, setForm]=useState(initData);

    const refTitle = useRef();
    const refContent = useRef();
    const refUserid = useRef();

    const onChangeHandler = (e) => {
        const frmData = {... form, [e.target.name]:e.target.value}
        // console.log(frmData);
        setForm(frmData);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault(); // axios로 요청해야 하므로, form을 submit하지 못하게 기본동작을 막는다
        const {userid, title, content} = form;
        if(!title) {
            alert('제목을 입력하세요')
            refTitle.current.focus()
            return;
        }
        if(!content) {
            alert('글내용을 입력하세요')
            refContent.current.focus();
            return;
        }
        if(!userid) {
            alert('작성자를 입력해주세요')
            refUserid.current.focus();
            return;
        }
        requestBoardWrite();
    }
    const onResetHandler = () => {
        setForm({...form, ...initData});
        refTitle.current.focus();
    }
    const requestBoardWrite = () => {
        axios.post('/api/boards', form)
        .then(response=>{
            // alert(JSON.stringify(response.data))
            if(response.data.result ==='success'){
                let bno=response.data.data.no
                // alert(bno+'번 글이 생성되었어요')
                onMode('list')// 글목록 보여주기
            }else{
                alert('글쓰기 실패')
                onResetHandler(); //입력 폼 초기화
                // onMode('write')
            }
        })
        .catch(err=>{
            alert('Error: '+err.response.status)
        })
    }
    return (
        <div>
        <Row className="my-3">
        <Col className="p-3 mx-auto" md={8}>
            <h1 className="text-center">Board Write</h1>
        </Col> 
        </Row>
        <Row className="my-3">
        <Col className="p-3 mx-auto" md={8}>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="my-2">
                    <Form.Label>제 목</Form.Label>
                    <Form.Control type="text" name="title"
                        onChange={onChangeHandler}
                        ref={refTitle}
                        value={form.title}
                    placeholder="제목을 입력하세요" />
                </Form.Group>

                <Form.Group className="my-2">
                    <Form.Label>작성자</Form.Label>
                    <Form.Control type="text" name="userid"
                    onChange={onChangeHandler}
                    ref={refUserid}
                    value={form.userid}
                    placeholder="작성자를 입력하세요" />
                </Form.Group>

                <Form.Group className="my-2">
                    <Form.Label>글내용</Form.Label>
                    <Form.Control as="textarea" rows={7} name="content"
                    onChange={onChangeHandler}
                    ref={refContent}
                    value={form.content}
                    placeholder="내용을 입력하세요" />
                </Form.Group>
                <div className="my-2 text-center">
                    <Button type="submit" variant="success" className="mx-1 px-3">글 쓰 기</Button>
                    <Button type="reset"
                        onClick={onResetHandler}
                    variant="warning" className="mx-1 px-3">다시쓰기</Button>
                </div>
            </Form>
        </Col>
        </Row>
    </div>     
    )
}
// post  /api/boards  게시글쓰기;
// get  /api/boards  게시목록보기;
// get  /api/boards/10  10번 게시글 보기 (글상세복, 글수정을);
// put  /api/boards  게시글쓰기;
// post  /api/boards  게시글쓰기;