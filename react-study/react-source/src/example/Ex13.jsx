import React, { useState } from "react";
import pasta1 from '../Gallery/pasta1.jpeg'
import pasta2 from '../Gallery/pasta2.jpeg'
import pasta3 from '../Gallery/pasta3.jpeg'

const images = [pasta1, pasta2, pasta3];

const imgstyle = {
    width: '200px',
    height: '200px',
    border: '1px solid gray',
    borderRadius: '10px'
}


export default function OurGallery() {
    // images 배열에서 햔재 보여줄 인덱스 번호를 statefh 관리하자
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevChange = () => {
        // alert('prev')
        let prevIndex = (currentIndex-1+images.length)%images.length;
        setCurrentIndex(prevIndex)
    }
    const handleNextChange = () => {
        // alert('next')
        let nextIndex = (currentIndex+1)%images.length; // 배열길이: 3, 인덱스: 0,1,2
        console.log(`nextIndex:  ${nextIndex}`)
        setCurrentIndex(nextIndex)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img style={imgstyle} src={images[currentIndex]} alt="pasta2" />
                    <br /><br />
                    <button onClick={handlePrevChange} className="btn btn-outline-success my-3" >Prev</button>
                    <button onClick={handleNextChange} className="btn btn-outline-danger my-3" >Next</button>
                </div>
            </div>
        </div>
    )
}