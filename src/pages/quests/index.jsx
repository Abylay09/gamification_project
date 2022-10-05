import React, { useState } from 'react'
import { Container, Col, Row, Stack } from 'react-bootstrap'
import QuestsMenu from './components/QuestsMenu'
import Rubik from "assets/quests/rubik-quest.png"
import Cat from "assets/quests/cat-quest.png"
import Ladybug from "assets/quests/ladybug-quest.png"
import Math from "assets/quests/math-quest.png"
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import "./index.scss"
import { useNavigate } from 'react-router-dom'
function QuestsPage() {
    const navigate = useNavigate()
    return (
        <Container className='' style={{ minHeight: "100vh" }}>

            <Row>
                <Col>
                    <div className='d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title" >Квесты</h3>
                    </div>
                </Col>
            </Row>


            <QuestsMenu />

            <Row>
                <Col>
                    <Stack direction="horizontal" gap={3} className="quest-items flex-wrap justify-content-between">

                        <div className={`quest-item  d-flex align-items-center justify-content-center`}
                            style={{ minWidth: "175px" }}
                            onClick={() => navigate("/quests/attention")}
                        >
                            <div>
                                <img style={{ width: "135px", height: "100%" }} src={Rubik} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>Внимательность</p>
                                <p className='quest-item__subtitle '>Найди число</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center `}
                            style={{ minWidth: "175px" }}
                            onClick={() => navigate("/quests/memory")}
                        >
                            <div>
                                <img style={{ width: "135px", height: "100%" }} src={Ladybug} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>Память</p>
                                <p className='quest-item__subtitle '>Найди число</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center `}
                            style={{ minWidth: "175px"}}
                            onClick={() => navigate("/quests/thinking")}
                        >
                            <div>
                                <img style={{ width: "135px", height: "100%" }} src={Math} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>Мышление</p>
                                <p className='quest-item__subtitle '>Найди число</p>
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>

        </Container>

    )
}

export default QuestsPage