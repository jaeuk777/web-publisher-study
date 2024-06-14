import React from 'react'
// npm install --save react-icons 설치한 후 import해서 사용
import { FaCalendarCheck } from "react-icons/fa";
export default function TodoHeader() {
    return (
        <div className='container py-4'>
            <h1 className='text-secondary'>오늘 할 일 (To Do List)</h1>
            <h2 className='text-success'>
                <FaCalendarCheck />
                {new Date().toDateString()}
                </h2>
        </div>
    )
}
