import React, { useState } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import ShowMoreText from "react-show-more-text";
import ReactPlayer from 'react-player'
import FixedButton from 'components/buttons/fixed-button/FixedButton'

import PurpleCross from "assets/common/purple-cross.png"
import "./index.scss"
function LectureInfoPage() {
    const data = "Известно, что любое натуральное число a можно представить в виде суммы некоторого числа десятков и однозначного числа.Например: 37 = 3⋅10 + 7; 124 = 12⋅10 + 4; 6782 = 678⋅10 + 2. В общем виде можно записать так: a = m⋅10 + n, где n — это последняя цифра в записи числа a. Первое слагаемое, т.е.выражение m⋅10, делится и на 2, и на 5, и на 10, т.к.множитель 10 в этом произведении делится на каждое из названных чисел. Поэтому делимость числа a на 2, на 5 или на 10 зависит от последней цифры числа a, т.е.от цифры n. Если последняя цифра числа чётная, то оно делится на 2."
    const [show, showMore] = useState(false);

    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img style={{ height: "20px" }} src={PurpleCross} alt="" />
                        <h3 className="lecture-title">Признаки делимости на 2, 3, 5, 9, 10</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='react-player-container mt-4'>
                        <ReactPlayer className="react-player" width={'100%'} height={'100%'} controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Stack>
                        <h4 className='lecture-text-subtitle' >Теория</h4>
                        <p className='lecture-text' >
                            {show ? data : data.substring(0, data.length / 3)}
                        </p>
                        <p style={{ color: "#2A80FF", fontSize: "13px" }} onClick={() => showMore(!show)}>Показать еще</p>
                        
                    </Stack>
                </Col>
            </Row>
            
        </Container>
    )
}

export default LectureInfoPage