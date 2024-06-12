import React from 'react'
// import 'react/css/bootstrap.css'
import {Row, Col, Carousel} from 'react-bootstrap'
import { useState } from 'react'
import { images } from '../Data/imageData'

export default function MyCarousel() {
    const [imgs, setImages] = useState(images);

    const imgstyle = {
        width: '200px',
        height: '200px',
        border: '1px solid gray',
        borderRadius: '10px'
    }

    return (
        <Row>
            <Col>
                <Carousel>
                    {/* =========== */}
                    { imgs.map((pic, i)=>(
                    <Carousel.Item>
                        <img style={imgstyle} src={pic.src} alt="" />
                        <Carousel.Caption>
                            <h3 style={{color:'black', paddingTop:'50px'}}>{pic.title}</h3>
                            {/* <p>설명</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))
                    }
                    {/* =========== */}
                </Carousel>
            </Col>
        </Row>
    )
}
