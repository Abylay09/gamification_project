import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Button from '../elements/Button'
import ReactPlayer from 'react-player'
import { useState } from 'react'


function Lecture() {
    const data = "Известно, что любое натуральное число a можно представить в виде суммы некоторого числа десятков и однозначного числа.Например: 37 = 3⋅10 + 7; 124 = 12⋅10 + 4; 6782 = 678⋅10 + 2. В общем виде можно записать так: a = m⋅10 + n, где n — это последняя цифра в записи числа a. Первое слагаемое, т.е.выражение m⋅10, делится и на 2, и на 5, и на 10, т.к.множитель 10 в этом произведении делится на каждое из названных чисел. Поэтому делимость числа a на 2, на 5 или на 10 зависит от последней цифры числа a, т.е.от цифры n. Если последняя цифра числа чётная, то оно делится на 2."
    const [show, showMore] = useState(false);
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
                <Col>
                    {/* <div style={{borderRadius : "12px ", overflow : "hidden"}}> */}
                    <ReactPlayer controls={true} width={'100%'} height={'200px'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    {/* </div> */}
                </Col>
            </Row>
            <Stack>
                <h4 style={{fontWeight: "700", fontSize: "15px", margin : "24px 0 4px 0"}}>Теория</h4>
                <p className='textt'  style={{maxHeight : "100%", marginBottom : "0", fontSize : "13px", textAlign : "justify"}}>
                    {show ?  data :  data.substring(0, data.length / 3)}
                </p>
                <p style={{color : "#2A80FF", fontSize : "13px"}} onClick={() => showMore(!show)}>Показать еще</p>
            </Stack>
            {/* <Row>
                <Col>
                    <p>
                        Известно, что любое натуральное число a можно представить в виде суммы некоторого числа десятков и однозначного числа.
                        Например:
                        37=3⋅10+7;
                        124=12⋅10+4;
                        6782=678⋅10+2.
                        В общем виде можно записать так:
                        a=m⋅10+n, где
                        n — это последняя цифра в записи числа a.
                        Первое слагаемое, т. е. выражение m⋅10, делится и на 2, и на 5, и на 10, т. к. множитель 10 в этом...
                    </p>
                </Col>
            </Row> */}
            <Row className='navbar-fixed-bottom'>
                <Col className='fixed-bottom mb-4'>
                    <Button text="Продолжить!" />
                </Col>
            </Row>
        </Container>
    )
}

export default Lecture