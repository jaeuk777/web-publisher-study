import React, {useState, useRef}from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
export default function BoardForm() {
    return (
        <Form>
            <Row className='my-3'>
                <Col className='p-3 mx-auto' md={8}>
                    <h1 className='text-center'>Board Write</h1>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col className='p-3 mx-auto' md={8}>
                    <Form.Group>
                        <Form.Label>제 목</Form.Label>
                        <Form.Control type='text' name='title' placeholder='제목를 입력하세요'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>작성자</Form.Label>
                        <Form.Control type='text' name='userid' placeholder='작성자를 입력하세요'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>글내용</Form.Label>
                        <Form.Control type='textarea' rows={7} name='content' placeholder='내용를 입력하세요'/>
                    </Form.Group>
                    <div className='my-2 text-center'>
                        <Button variant='success' className='mx-1 px-3'>글 쓰 기</Button>
                        <Button variant='fails' className='mx-1 px-3'>다시쓰기</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
