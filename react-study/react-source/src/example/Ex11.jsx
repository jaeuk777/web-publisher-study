import React from 'react'
import { images } from "../Data/imageData"
import { useState } from 'react'

export default function YourGallery() {

    const imgstyle = {
        width: '100%',
        height: '250px',
        border: '1px solid gray',
        borderRadius: '10px'
    }

    const [imgs, setImages]=useState(images)

    const addImage=()=>{
        let imgSrc=window.prompt('새로 추가할 이미지 경로 입력','imgsrc/pasta1.jpeg')
        let newTitle=window.prompt('추가할 이미지 타이틀 입력','title')
        let newEx=window.prompt('메뉴를 설명해주세요', 'EX')
        if(!imgSrc||!newTitle||!newEx) {
            return;
        }
        let obj={src:imgSrc, title:newTitle, ex:newEx, alt:'newImage'}
        // 새로 추가할 객체
        let tmpImage = [ ... imgs, obj]
        setImages(tmpImage)
        // imges 배열의 복사본을 만들어 tmpImgs에 할당
        // 얇은 복사 : 원본 배열의 주소값을 참조하여 새 변수에 할당. a1=[1,2,3,4], b1=a1; b1[3]=100
        // a1=[1,2,3,100], b1=[1,2,3,100]
        // 깊은 복사 : 원본 배열을 복사하여 별도의 객체로 만들어 새변수에 할당
        // let a1=[1,2,3,4]
        // let b1=[1,2,3,4]
        // b1[3]=100;
        // let a1=[1,2,3,4]
        // let b2=[1,2,3,100]
    }

    const updateImage=(editIdx)=>{
        alert(editIdx)
        // 새이미지 경로 입력
        let newSrc=window.prompt('변경할 이미지 경로 입력', 'imgsrc/pasta1.jpeg')
        // 새타이틀 입력받기
        let newTitle=window.prompt('변경할 타이틀 입력', 'pastachange')
        if(!(newSrc&&newTitle)) return;
        // 수정할 객체 만들기
        let data={src:newSrc, title:newTitle, alt:'changeimage'}

        // 배열 사본 만들기
        let tmpImgs=[... images]
        // 배열 사본의 editIdx번의 요소를 수정할 객체로 교체
        tmpImgs[editIdx]=data;
        // setImages(교체된배열사본)
        setImages(tmpImgs);
    }
    // 삭제 처리시: filter()함수 활용. true조건을 만족하는 요소로 새로운 배열을 만들어 반환한다
    const deleteImage=(delIdx)=>{
        // alert('삭제 할려고?...'+delIdx)
        let tmpImages = imgs.filter((_, index)=> {
            console.log(delIdx, index);
            return delIdx!==index
        })
        setImages(tmpImages);
    }


    return (
        <>
        <div className='row my-3'>
            <div className='col'>
                <button onClick={addImage} className='btn btn-success'>Add Image</button>
            </div>
        </div>
        <div className='row'>
            {
                imgs.map((pic, i)=>(
                    <div key={i} className='col'>
                        <div className="card" style={{width:'400px', display:'flex'}}>
                            <img key={pic.src} className="card-img-top" style={imgstyle} src={pic.src} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">{pic.title}</h4>
                                <p className="card-text">{pic.ex}</p>
                                <a href="#" className="btn btn-primary" onClick={()=>{updateImage(i);}}>Update</a>
                                <a href="#" className="btn btn-danger" onClick={()=>{deleteImage(i);}}>Delete</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
