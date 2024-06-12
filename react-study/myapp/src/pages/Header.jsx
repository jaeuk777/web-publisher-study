import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/comp1">MyComp1</Link>
                </li>
            </ul>
        </div>
    )
}
