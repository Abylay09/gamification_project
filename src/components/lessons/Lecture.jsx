import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Button from '../elements/Button'
function Lecture() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img style={{ height: "20px" }} src={process.env.PUBLIC_URL + "/images/purple-cross.png"} alt="" />
                        <h3 style={{ fontSize: "17px", fontWeight: "bold", marginLeft: "24px", marginBottom: "0" }} className=''>Признаки делимости на 2, 3, 5, 9, 10</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Button text="Продолжить!" />
                </Col>
            </Row>
        </Container>
    )
}

export default Lecture