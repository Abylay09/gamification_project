import React, { useState } from 'react'
import Layout from 'layout/Layout';
import { Container, Col, Row, Stack } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatsItem from './components/StatsItem';
import {useQuery } from '@tanstack/react-query';
import NumberOne from "assets/stats/number-one.svg"
import NumberTwo from "assets/stats/number-two.svg"
import NumberThree from "assets/stats/number-three.svg"

import { rating } from 'utils/api/getRating';
import "./index.scss"
import IndicatorItem from './components/IndicatorItem';
import { useSelector } from 'react-redux'
function StatsPage() {
    const language = useSelector(state => state.language.language)
    const [toggleState, setToggleState] = useState(1);
    const [styleState, setStyleState] = useState(1)

    const { data: ratingList, isError, isLoading } = useQuery(["getRating"], () => {
        return rating.getRating()
    })
    const indicators = useQuery(["getIndicatorsRating"], () => {
        return rating.getIndicatorsRating()
    })
    // const { data: indicatorsList, isError : indicatorError,  isLoading : indicatorLoading } = useQuery(["getIndicatorsRating"], () => {
    //     return rating.getIndicatorsRating()
    // })


    const tabs = ["Общий", "Индикаторы"]
    const nums = [NumberOne, NumberTwo, NumberThree];
    const topStyles = ["first-place", "second-place", "third-place"]
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const toggleStyleState = (num) => {
        setStyleState(num)
    }
    if (isLoading) {
        return <div>Loading</div>
    }

    else if (isError) {
        return <div>Error</div>
    }
    console.log(indicators);
    return (
        <Layout>
            <Row>
                <Col>
                    <h3 className='rates-title my-4'>{language.stats_indicatrors}</h3>
                    <div>
                        <p className='mb-0'>{language.filter_by}:</p>
                        <div className='filter-list'>
                            <span className={`filter-list__item ${styleState === 1 ? "active" : ""}`} onClick={() => toggleStyleState(1)}>{language.by_class}</span>
                            <span className={`filter-list__item ${styleState === 2 ? "active" : ""}`} onClick={() => toggleStyleState(2)}>{language.by_school}</span>
                            {/* <span className={`filter-list__item ${styleState === 3 ? "active" : ""}`} onClick={() => toggleStyleState(3)}>По области</span> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Tabs>
                <TabList>
                    <Tab>{language.general}</Tab>
                    <Tab>{language.indicators}</Tab>
                </TabList>

                <TabPanel>
                    <Row>
                        <Col>
                            <Stack direction="horizontal" className='rating-top'>
                                {
                                    ratingList.users?.map((ratingitem, index) => {
                                        return (
                                            <div className={`rating-top-item  ${topStyles[index]} `}>
                                                <img className='mb-3' src={nums[index]} alt="" />
                                                <p style={{ fontSize: "13px", fontWeight: "600" }}>{ratingitem.last_name} {ratingitem.first_name}</p>
                                                <p style={{ fontSize: "11px" }}>{language.classmate}</p>
                                            </div>
                                        )
                                    })
                                }
                            </Stack>
                        </Col>
                    </Row>

                    <Stack gap={3} className="my-3">
                        {
                            ratingList.users?.map((ratingitem, index) => <StatsItem
                                lastName={ratingitem.last_name}
                                name={ratingitem.first_name}
                                level={ratingitem.level}
                                queue = {index + 1}
                            />)
                        }
                    </Stack>
                </TabPanel>

                <TabPanel >
                    <Stack gap={3} className="my-3">
                        {
                            indicators.isLoading ? <div>loading</div>
                                : indicators.isError ? <div>error</div>
                                    : indicators.data.users?.map((ratingitem, index) => <IndicatorItem
                                        lastName={ratingitem.last_name}
                                        name={ratingitem.first_name}
                                        value = {ratingitem.value}
                                        queue = {index + 1}
                                    />)
                        }
                    </Stack>
                </TabPanel>
            </Tabs>


        </Layout>

    )
}

export default StatsPage