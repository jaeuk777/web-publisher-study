import React from 'react'
import {Stack, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
export default function Side() {

    // useNavigate : 해당 URL로 웹페이지 이동 없이 해당 페이지 바로 이동 가능
    const navigate=useNavigate();

    const moveLoc=()=> {
        let yn=window.confirm('MyComp1으로 이동 하실래요?')
        // alert(yn)
        if(yn){
            // window.location.href='./comp1'
            navigate('./comp1')
        }
    }

    return (
        <Stack gap={2} className='col-xs-12 col-sm-10 col-md-8 col-lg-6'>
            <Button variant='primary' as={Link} to="/">Home</Button>
            <Button variant='secondary' as={Link} to="/comp1">Mycomp1</Button>
            <Button variant='light' onClick={moveLoc}>Confirm</Button>
            <hr />
            <ListGroup >
                <ListGroup.Item as={Link} to="/board?page=2&size=10&keyword=React">Board</ListGroup.Item>
                <ListGroup.Item as={Link} to="/users/2">UserDetail</ListGroup.Item>
                <ListGroup.Item as={Link} to="/life">LifeCycle</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook1">useEffectHook</ListGroup.Item>
                <ListGroup.Item as={Link} to="/clock">Clock</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook2">UseRefHook</ListGroup.Item>
                <ListGroup.Item as={Link} to="/app2">PropsDrill</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook3">Context Api</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook4">useContextHook</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook5">useMemoHook</ListGroup.Item>
                <ListGroup.Item as={Link} to="/hook6">useCallBackHook</ListGroup.Item>
                <ListGroup.Item as={Link} to="/memo">React.Memo</ListGroup.Item>
            </ListGroup>
        </Stack>
    )
}
