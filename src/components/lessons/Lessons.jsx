import React from 'react'
import {Col, Container, Row, Stack } from 'react-bootstrap'
import Gold from '../elements/awards/Gold'
import Health from '../elements/awards/Health'
import Button from '../elements/Button'


export default function Lessons() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img style={{ height: "20px" }} src={process.env.PUBLIC_URL + "/images/blue-left-arrow.png"} alt="" />
                        <h3 style={{ fontSize: "17px", fontWeight: "bold", marginLeft: "24px", marginBottom: "0" }} className=''>Признаки делимости на 2, 3, 5, 9, 10</h3>
                    </div>
                </Col>
            </Row>

            <Stack style = {{marginBottom : '-24px'}}>
            <h4 className='my-4' style = {{fontSize : "15px", fontWeight : "bold"}}>Лекции</h4>
                <div className='lesson mb-4' style={{
                    padding: '16px',
                    borderRadius: "8px",
                    border: "2px solid #2A80FF"
                }}>
                    <p className='lesson__title mb-0' style={{ fontSize: "13px", fontWeight: "600" }}>Признаки делимости на 2, 5, 10, 4 и 25</p>
                    <p className='lesson__number mb-0' style={{ fontSize: "11px", fontWeight: "400", margin: "4px 0 10px 0" }}>Лекция 1</p>
                    <Health title="+5 HP" />
                </div>
                <div className='lesson mb-4' style={{
                    padding: '16px',
                    borderRadius: "8px",
                    border: "2px solid #2A80FF"
                }}>
                    <p className='lesson__title mb-0' style={{ fontSize: "13px", fontWeight: "600" }}>Признаки делимости на 2, 5, 10, 4 и 25</p>
                    <p className='lesson__number mb-0' style={{ fontSize: "11px", fontWeight: "400", margin: "4px 0 10px 0" }}>Лекция 1</p>
                    <Health title="+5 HP" />
                </div>
            </Stack>

            <Stack>
            <h4 className='my-4' style = {{fontSize : "15px", fontWeight : "bold"}}>Задания</h4>
                <div className='level mb-4' style={{
                    padding: '16px',
                    borderRadius: "8px",
                    border: "2px solid #2A80FF"
                }}>
                    <p className='level__title mb-0' style={{ fontSize: "13px", fontWeight: "600" }}>Уровень 1</p>
                    <p className='level__number mb-0' style={{ fontSize: "11px", fontWeight: "400", margin: "4px 0 10px 0" }}>Сложность: 10</p>
                    <Health title="+5 HP" />
                    <Gold title="+150 GOLD"/>
                </div>
                <div className='level mb-4' style={{
                    padding: '16px',
                    borderRadius: "8px",
                    border: "2px solid #2A80FF"
                }}>
                    <p className='level__title mb-0' style={{ fontSize: "13px", fontWeight: "600" }}>Уровень 2</p>
                    <p className='level__number mb-0' style={{ fontSize: "11px", fontWeight: "400", margin: "4px 0 10px 0" }}>Сложность: 50</p>
                    <Health title="+5 HP" />
                    <Gold title="+300 GOLD"/>
                </div>
            </Stack>
            <div></div>
            <Row>
                <Col >
                    <Button text = "Погнали!"/>
                </Col>
            </Row>
        </Container>

    )
}
