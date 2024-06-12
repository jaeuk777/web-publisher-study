import React from 'react'
import pasta1 from '../Gallery/pasta1.jpeg'
import pasta2 from '../Gallery/pasta2.jpeg'
import pasta3 from '../Gallery/pasta3.jpeg'
import pastanone from '../Gallery/pastaLogo.png'
import { useState } from 'react'
// [1] public/images 를 두는 경우 : 정적인 파일들일 경우 여기에 둔다. url로 접근 가능
// [2] src/imges 를 두는 경우 : 동적인 처리가 필요할 경우 여기에 둔다. import 하여 사용.
//                           Js 모듈로 다루어 진다. 컴포넌트 내에서 상대경로로 접근

export default function DynamicImage() {
    const [pasta, setpasta] = useState('')

    const handleImageChange=(evt)=>{
        // alert(evt.target.value)
        setpasta(evt.target.value)
    }

    return (
        <div className='container p-5'>
            <h2>동적인 이미지 처리</h2>
            <div className='row'>
                <div className='col'>
                    <select className='form-control' onChange={handleImageChange} value={pasta}>
                        <option value="pastanone">먹고싶은 파스타를 선택하세요</option>
                        <option value="pasta1">까르보나라</option>
                        <option value="pasta2">빠네</option>
                        <option value="pasta3">봉골레</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <img src={pastanone==='pastanone'?pastanone:pasta ==='pasta1'?pasta1:pasta==='pasta2'?pasta2:pasta3} alt='img1'/>
                </div>
            </div>
        </div>
    )
}