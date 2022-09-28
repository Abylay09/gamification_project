import React, { useState } from 'react'
import { Container, Col, Row, Stack } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatsItem from './components/StatsItem';
import NumberOne from "assets/stats/number-one.svg"
import NumberTwo from "assets/stats/number-two.svg"
import NumberThree from "assets/stats/number-three.svg"

import "./index.scss"
import Layout from 'layout/Layout';
function StatsPage() {
    const [toggleState, setToggleState] = useState(1);
    const [styleState, setStyleState] = useState(1)

    const tabs = ["Общий", "Индикаторы"]

    const toggleTab = (index) => {
        setToggleState(index)
    }
    const toggleStyleState = (num) => {
        setStyleState(num)
    }
    return (
        <Layout>
                <Row>
                    <Col>
                        <h3 className='rates-title my-4'>Показатели</h3>
                        <div>
                            <p className='mb-0'>Фильтровать по:</p>
                            <div className='filter-list'>
                                <span className={`filter-list__item ${styleState === 1 ? "active" : ""}`} onClick={() => toggleStyleState(1)}>По классу</span>
                                <span className={`filter-list__item ${styleState === 2 ? "active" : ""}`} onClick={() => toggleStyleState(2)}>По школе</span>
                                <span className={`filter-list__item ${styleState === 3 ? "active" : ""}`} onClick={() => toggleStyleState(3)}>По области</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Tabs>
                    <TabList>
                        <Tab>Общий</Tab>
                        <Tab>Индикаторы</Tab>
                    </TabList>

                    <TabPanel>
                    </TabPanel>
                    <TabPanel >
                    </TabPanel>
                </Tabs>
                <Row>
                    <Col>
                        <Stack direction="horizontal" className='rating-top'>
                            <div className='rating-top-item second-place'>
                                <img className='mb-3' src={NumberTwo} alt="" />
                                <p style={{ fontSize: "13px", fontWeight: "600" }}>Рахов Тимур</p>
                                <p style={{ fontSize: "11px" }}>Одноклассник</p>
                            </div>
                            <div className='rating-top-item first-place'>
                                <img className='mb-3' src={NumberOne} alt="" />
                                <p style={{ fontSize: "13px", fontWeight: "600" }}>Рахов Тимур</p>
                                <p style={{ fontSize: "11px" }}>Одноклассник</p>
                            </div>
                            <div className='rating-top-item third-place'>
                                <img className='mb-3' src={NumberThree} alt="" />
                                <p style={{ fontSize: "13px", fontWeight: "600" }}>Рахов Тимур</p>
                                <p style={{ fontSize: "11px" }}>Одноклассник</p>
                            </div>
                        </Stack>
                    </Col>
                </Row>

                <Stack gap={3} className="my-3">
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                </Stack>

        </Layout>

    )
}

export default StatsPage