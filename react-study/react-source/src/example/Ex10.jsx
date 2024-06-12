// Ex10.jsx
import { images } from "../Data/imageData"
import { useState } from "react"
export default function MyImgeGallery(){

    const imgstyle = {
        width: '200px',
        height: '200px',
        border: '1px solid gray',
        borderRadius: '10px'
    }
    const titlestyle = {
        padding: '10px',
        fontWeight: 'bold'
    }

    const [imgs, setImages]=useState(images)
    

    return (
        <div>
            <h2>내가 좋아하는 파스타</h2>
            <ul>
                {
                    imgs.map((pic, i)=>(
                        <li key={i}>
                            <img style={imgstyle} src={pic.src} alt={pic.alt}/><br />
                            <h4 style={titlestyle}>{pic.title}</h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}