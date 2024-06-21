import React, { useState, useEffect, Fragment} from 'react'
import {Row, Col, Form, Button, Table, Badge} from 'react-bootstrap'
import axios from '../../Lib/AxiosCreate'
import { Link } from 'react-router-dom'
const initData = []
export default function BoardList() {
    
    const [boardList, setBoardList] = useState(initData);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const fetchBoardData = async () => {
            // 총 게시글 수 가져오기
            await getBoardTotal()
            // 모든 게시글 사져오기
            await getBoardList();
        }
        fetchBoardData(); // 함수 호출
    },[])

    const getBoardTotal = () => {
        axios.get('/api/boardTotal')
        .then(response=>{
            // alert(response.data.totalCount)
            setTotalCount(response.data.totalCount)
        })
        .catch(err=> {
            alert('error :'+err.message)
        })
    }

    const getBoardList = () => {
        axios.get('/api/boards')
        .then(response=>{
            setBoardList(response.data)
        })
        .catch(err=>{
            alert('error : '+err.message)
        })
    }
    return (
        <Fragment>
            <Row className='my-3'>
                <Col className='p-3 mx-auto' md={10}>
                    <h1 className='text-center'>Board List</h1>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col className='p-3 mx-auto text-center' md={10}>
                    
                    <h4>총 게시글 수 : {totalCount} 개</h4>
                </Col>
            </Row>
            {boardList.length>0 &&
                <Row className='my-3'>
                    <Col className='p-3 mx-auto' md={10}>
                        <Table striped bordered hover>
                            <thead>
                                {/*  */}
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    boardList.map((board, i)=>(
                                <tr key={i}>
                                    <td>{board.id}</td>
                                    <td><Link to={`/post/${board.id}`}>{board.title}</Link></td>
                                    <td>{board.userid}</td>
                                    <td>{board.wdate}</td>
                                    <td>{board.readnum}</td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            }
            {boardList.length===0 &&
                <Row className='my-3'>
                    <Col className='p-3 mx-auto text-center' md={10}>
                        <h4>데이터가 없습니다</h4>
                    </Col>
                </Row>
            }
        </Fragment>
    )
}
