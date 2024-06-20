import React, {useState} from 'react'
import BoardNavi from './BoardNavi'
import BoardList from '../BoardList'
import BoardForm from './BoardForm'

export default function BoardApp() {
    const [mode, setMode] = useState('list')

    const onChangeMode = (value) => {
        setMode(value)
    }

    return (
        <div>
            <BoardNavi onMode={onChangeMode}/>
            {
                (mode==='list')&&<BoardList/>
            }
            {
                (mode==='write')&&<BoardForm/>
            }
        </div>
    )
}
