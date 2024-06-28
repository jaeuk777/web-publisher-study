import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(props:any) {
    
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to="/*">Home</Link>
                </li>   
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/postform">PostForm</Link>
                </li>
            </ul>
        </div>
    )
}
