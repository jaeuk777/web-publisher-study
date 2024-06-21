import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import {Row,Col,Button,Card, Container, Badge} from 'react-bootstrap'
import {AiFillHeart, AiFillDislike} from 'react-icons/ai'
import axios from '../../Lib/AxiosCreate'
export default function BoardView() {
    const {id} = useParams() //게시글 번호
    const [board, setBoard] = useState();

    const navigate = useNavigate();
    
    console.log(board)
    useEffect(()=>{
        const fetchData = async() => {
            // 비동기적으로 수행... 게시글 먼저 가져오고 그런뒤 댓글 가져올 예정
            await updateReadnum(); //조회수 증가
            await getBoard(); // 게시글 가져오기
            // 댓글 가져오기
        }
        fetchData(); //호출
    },[id])

    const onDelete = async () => {
        let yn = window.confirm(`${id}번 글을 정말 삭제하시겠습니까?`)
        if(yn) {
            await axios.delete(`/api/boards/${id}`)
            navigate('/post') // 목록으로 가기
        }
    }

    const updateReadnum = () => {
        axios.put(`/api/boardReadNum/${id}`)
        .then(response=>{
            console.log(response.data)
        })
        .catch(err=>{
            console.log('조회수 증가 실해: ',err)
        })
    }

    const getBoard = () => {
        axios.get(`/api/boards/${id}`)
        .then(response=>{
            // alert(JSON.stringify(response.data))
            setBoard(response.data[0])
        })
        .catch(err=>{
            alert('error: '+err.message)
        })
    }

    return (
        <Container className='py-3'>
            <h2>BoardView [ No. {id}]</h2>
            <div className='text-end my-2'>
                <Link to={`/postEdit/${id}`}><Button variant='success' className='mx-1'>수   정</Button></Link>
                <Button onClick={onDelete} variant='warning'>삭   제</Button>
            </div>
            {board&&
            <Card>
                <Card.Body>
                    <h4> No. {board.id}  {board.title} </h4>
                    <hr />
                    <div className='cArea'>
                        {board.content}
                        <br />
                        <AiFillHeart style={{color:'hotpink'}}/>
                        <AiFillDislike style={{color:'green'}}/>
                        &nbsp;&nbsp;
                        조 회 수: <Badge className='primary'>{board.readnum}</Badge>
                    </div>
                </Card.Body>
                <Card.Footer>
                    Created on {board.wdate} by {board.userid}
                </Card.Footer>
            </Card>
            }
            {!board&&
                <h3 className='text-center text-danger'>존재하지 않는 글입니다.</h3>
            }
        </Container>
    )
}
