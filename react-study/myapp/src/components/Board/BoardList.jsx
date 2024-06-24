import React, { useState, useEffect, Fragment, useMemo} from 'react'
import {Row, Col, Form, Button, Table, Badge, Pagination} from 'react-bootstrap'
import axios from '../../Lib/AxiosCreate'
import { Link } from 'react-router-dom'
const initData = []
    // 1. 총게시글 수 가져오기 (totalCount)
    // 2. 한 페이지에 보여줄 목록 개수 정하기 (diplay=5)
    // 3. 총 페이지수 구하기
    //      pageCount=Math.cell(totalCount/display)
    // 4. 반복문 이용해서 페이지네비게이션 만들기
    //      for(let i=0;i<=pageCount;i++){
    // navi.push(<Pagination.Item>{i}</Pagination.Item>>)}
    // 5. 각 페이지 번호에 onclick이벤트 처리하면서 page넘긴다
    // 6. DB에서 끊어서 가져올 값을 연산한다
    // 7. 끊어서 가져올 sql문 

export default function BoardList() {
    const display=5; // 한 페이지에 보여줄 목록 개수
    const [boardList, setBoardList] = useState(initData);
    const [totalCount, setTotalCount] = useState(0); // 총 게시글 수
    const [pageCount, setPageCount] = useState(1);// 총 페이지 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 보여줄 페이지번호
    const [pageRangeStart, setPageRangeStart] = useState(1); //페이징 블럭처리에서 사용할 데이터
    

    useEffect(() => {
        const fetchBoardData = async () => {
            // 총 게시글 수 가져오기
            await getBoardTotal();
            // 모든 게시글 사져오기
            await getBoardList(0); // offset = 0;
        }
        fetchBoardData(); // 함수 호출
    },[])

    useEffect(()=>{
        let pageCnt = Math.ceil(totalCount/display);
        setPageCount(pageCnt); // 총 페이지 수 구하기
    }, [totalCount])

    const getPageNavi = useMemo(() => {
        let navi=[];
        let end=Math.min(pageRangeStart+4, pageCount);

        for(let i=pageRangeStart;i<=end;i++){
            navi.push(<Pagination.Item key={i} active={currentPage===i} onClick={()=>{
                pageHandler(i)
            }}>{i}</Pagination.Item>)
        }
        if(pageCount>end) {
            navi.push(<Pagination.Item key="next" onClick={()=>{
                setPageRangeStart(end+1)
                pageHandler(end+1)
            }}>Next</Pagination.Item>)
        }
        // pageRangeStart: 1, 6, 11
        if(pageRangeStart>1) {
            navi.unshift(<Pagination.Item key="prev"
            onClick={()=>{
                setPageRangeStart(pageRangeStart-5)
                pageHandler(pageRangeStart-1)
            }}
            >Prev</Pagination.Item>)
        }
        
        return navi;
    },[pageCount, currentPage])

    const pageHandler = (page) => {
        // alert(page)
        const offset = (page-1)*display;
        setCurrentPage(page);
        getBoardList(offset);
    }

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

    const getBoardList = (offset) => {
        if(!offset) offset=0; // 첫 페이지 데이터 보여주기
        // offset을 이용해 DB에서 데이터를 끊어서 가져오자
        axios.get(`/api/boards?offset=${offset}`)
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
                                    <td><Link style={{listStyle:'none'}} to={`/post/${board.id}`}>{board.title}</Link></td>
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
            {/* 페이지 네비게이션 ------------------ */}
            <div style={{display:'flex', justifyContent:'center',marginTop:'20'}}>
                <Pagination>{getPageNavi}</Pagination>
            </div>
        </Fragment>
    )
}
