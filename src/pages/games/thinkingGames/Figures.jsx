import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import "./Figures.scss"
// import { figures } from "./figuresData.js"
const data = ["triangle-up--green ", "circle--green", "square--green"]


function Figures() {
    const [name, setName] = useState("")

    // useEffect(() => {
    //     for (let i of data) {
    //         setInterval(() => {
    //             setName(i)
    //         }, 2000)
    //         // setTimeout(() => {
    //         //     setName(i)
    //         // }, 2000)
    //     }
    // }, [])


    return (
        <Container>
            <Row className='mt-5'>
                {
                    setInterval(() => {
                        <div className={name}></div>
                    }, 2000)
                }

            </Row>
            <Row className='mt-5 ' >
                <Col xs={4}>
                    <Button className=' w-100' variant="danger" >Да</Button>
                </Col>
                <Col xs={4}>
                    <Button className='w-100' variant="primary" >Нет</Button>
                </Col>
                <Col xs={4}>
                    <Button className='w-100' variant="primary" >Частично</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Figures