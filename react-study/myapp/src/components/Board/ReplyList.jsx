import React from 'react'

export default function ReplyList({replies}) {
    return (
        <div>
            <ul className='list-group'>
                {replies.length>0&&
                    replies.map((reply,i)=>(
                    <li key={reply.rid} className='list-group-item'>
                        <div>
                            <strong>{reply.userid}</strong>
                            <br />
                            {reply.content}
                            <br />
                            <small>{reply.wdate}</small>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
