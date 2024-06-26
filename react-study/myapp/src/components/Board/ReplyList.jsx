import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

export default function ReplyList({replies, deletReply, startEditReply, logId}) {
    console.log('logId======',logId)
    return (
        <div>
            <ul className='list-group'>
                {replies.length>0&&
                    replies.map((reply,i)=>(
                    <li key={reply.rid} className='list-group-item d-flex justify-content-between align-item-center'>
                        <div>
                            [{reply.rid}]
                            <strong>{reply.userid}</strong>
                            {reply.content}
                            <br />
                            <small>{reply.wdate}</small>
                        </div>
                        <div>
                            {logId&& logId===reply.userid&&
                            <Fragment>
                            <Button variant='info' size='sm' 
                            onClick={()=>{
                                startEditReply(reply)
                            }}
                            className='mx-2 mt-2'>댓글Edit</Button>
                            <Button variant='danger' size='sm' 
                            onClick={()=>{deletReply(reply.rid)}}
                            className='mx-2 mt-2'>댓글Delete</Button>
                            </Fragment>
                            }
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
