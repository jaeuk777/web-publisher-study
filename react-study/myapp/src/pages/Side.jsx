import React from 'react'
import {Stack, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Side() {
    return (
        <Stack gap={2} className='col-xs-12 col-sm-10 col-md-8 col-lg-6'>
            <Button variant='primary' as={Link} to="/">Home</Button>
            <Button variant='secondary' as={Link} to="/comp1">Mycomp1</Button>
            <hr />
            <ListGroup>
                <ListGroup.Item as={Link} to="/found">menu1</ListGroup.Item>
                <ListGroup.Item>menu2</ListGroup.Item>
                <ListGroup.Item>menu3</ListGroup.Item>
            </ListGroup>
        </Stack>
    )
}
