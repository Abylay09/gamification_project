import React, { useState } from 'react'
import { Container, Col, Row, Stack } from 'react-bootstrap'
import QuestsMenu from './components/QuestsMenu'
import FindNumImg from "assets/quests/find-num.svg"
import ColorCardImg from "assets/quests/color-cards.svg"
import RememberOrderimg from "assets/quests/remember-order.svg"
import RememberItemsImg from "assets/quests/remember-items.svg"
import DirectionImg from "assets/quests/direction.svg"

import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import "./index.scss"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function QuestsPage() {
    const language = useSelector(state => state.language.language)
    const navigate = useNavigate()
    return (
        <Container className='' style={{ minHeight: "100vh" }}>

            <Row>
                <Col>
                    <div className='d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title" >{language.quests}</h3>
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
                            <div className='py-2' style={{ width: "100%", height: "100%" }}>
                                <img style={{ width: "100%", height: "100%" }} src={FindNumImg} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>{language.indicators_mindfulness}</p>
                                <p className='quest-item__subtitle '>{language.find_digit}</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center`}
                            style={{ minWidth: "175px" }}
                            onClick={() => navigate("/quests/attention-cards")}
                        >
                            <div >
                                <img style={{ width: "135px", height: "100%" }} src={ColorCardImg} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>{language.indicators_mindfulness}</p>
                                <p className='quest-item__subtitle '>{language.cards_color}</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center `}
                            style={{ minWidth: "175px" }}
                            onClick={() => navigate("/quests/memory")}
                        >
                            <div style={{ width: "100%", height: "100%" }}>
                                <img style={{ width: "100%", height: "100%" }} src={RememberOrderimg} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>{language.indicators_memory}</p>
                                <p className='quest-item__subtitle '>{language.find_digit}</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center `}
                            style={{ minWidth: "175px" }}
                            onClick={() => navigate("/quests/images")}
                        >
                            <div style={{ width: "100%", height: "100%" }}>
                                <img style={{ width: "100%", height: "90%" }} src={RememberItemsImg} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>{language.indicators_memory}</p>
                                <p className='quest-item__subtitle '>{language.remember_items}</p>
                            </div>
                        </div>

                        <div className={`quest-item  d-flex align-items-center justify-content-center `}
                            style={{ minWidth: "175px"}}
                            onClick={() => navigate("/quests/thinking")}
                        >
                            <div className='py-2' style={{ width: "100%", height: "100%" }}>
                                <img style={{ width: "100%", height: "100%" }} src={DirectionImg} alt="" />
                            </div>
                            <div className='quest-item__text flex-grow-0'>
                                <p className='quest-item__title '>{language.indicators_thinking}</p>
                                <p className='quest-item__subtitle '>{language.direction_and_move}</p>
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>

        </Container>

    )
}

export default QuestsPage