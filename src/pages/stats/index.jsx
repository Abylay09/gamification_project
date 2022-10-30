import React, { useState, useEffect } from 'react'
import Layout from 'layout/Layout';
import { Container, Col, Row, Stack } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatsItem from './components/StatsItem';
import { useQuery } from '@tanstack/react-query';
import NumberOne from "assets/stats/number-one.svg"
import NumberTwo from "assets/stats/number-two.svg"
import NumberThree from "assets/stats/number-three.svg"

import { Rating } from 'utils/api/getRating';
import IndicatorItem from './components/IndicatorItem';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./index.scss"
import Loading from 'components/loading/Loading';


export default function StatsPage() {
    const [rating, setRating] = useState();
    const [indicators, setIndicators] = useState();
    const [styleState, setStyleState] = useState(0);
    const language = useSelector(state => state.language.language)
    const navigate = useNavigate()
    const nums = [NumberOne, NumberTwo, NumberThree];
    const topStyles = ["first-place", "second-place", "third-place"]

    async function fetchRatingBy(type) {
        const filterData = await Rating.getRatingBy(type);
        const res = await filterData.data;
        console.log('changing state');
        setRating(res.users)
    }

    async function fetchRating() {
        const ratingData = await Rating.getRating();
        const res = await ratingData.data;
        setRating(res.users)
    }
    async function getIndicatorsRating() {
        const indicatorData = await Rating.getIndicatorsRating();
        const res = await indicatorData.data;
        setIndicators(res.users)
    }

    useEffect(() => {
        fetchRating()
        getIndicatorsRating()
    }, [])

    if (!rating) return <Loading />
    if (!indicators) return <Loading />

    return (
        <Layout>
            <Row>
                <Col>
                    <h3 className='rates-title my-4'>{language.stats_indicatrors}</h3>
                    <div>
                        <p className='mb-0'>{language.filter_by}:</p>
                        <div className='filter-list'>
                            <span className={`filter-list__item ${styleState === 1 ? "active" : ""}`} onClick={() => {
                                fetchRatingBy("school")
                                setStyleState(1)
                            }}>{language.by_class}</span>
                            <span className={`filter-list__item ${styleState === 2 ? "active" : ""}`} onClick={() => {
                                fetchRatingBy("class")
                                setStyleState(2)
                            }}>{language.by_school}</span>
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
                                    rating.map((ratingitem, index) => {
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
                    <Row>
                        <Col>
                            <Stack gap={3} className="my-3">
                                {
                                    rating.map((ratingitem, index) => <StatsItem
                                        onClick={() => navigate(`/stats/${ratingitem.uid}`)}
                                        lastName={ratingitem.last_name}
                                        name={ratingitem.first_name}
                                        level={ratingitem.level}
                                        queue={index + 1}
                                    />)
                                }
                            </Stack>
                        </Col>
                    </Row>

                </TabPanel>

                <TabPanel >
                    <Row>
                        <Col>
                            <Stack gap={3} className="my-3">
                                {
                                    indicators.map((ratingitem, index) => <IndicatorItem
                                        lastName={ratingitem.last_name}
                                        name={ratingitem.first_name}
                                        value={ratingitem.value}
                                        queue={index + 1}
                                    />)
                                }
                            </Stack>
                        </Col>
                    </Row>

                </TabPanel>
            </Tabs>

        </Layout>
    )
}
// function StatsPage() {
//     // const toggleTab = (index) => {
//     //     setToggleState(index)
//     // }
//     // const toggleStyleState = (num) => {
//     //     setStyleState(num)
//     // }
//     const language = useSelector(state => state.language.language)
//     // const [toggleState, setToggleState] = useState(1);
//     const [styleState, setStyleState] = useState(0);
//     const [filterData, setFilterData] = useState(true);
//     const navigate = useNavigate();

//     const { data: ratingList, isError, isLoading } = useQuery(["getRating"], () => {
//         return Rating.getRating()
//     })
//     const indicators = useQuery(["getIndicatorsRating"], () => {
//         return Rating.getIndicatorsRating()
//     })

//     const filter = useQuery(["filter"], (item) => {
//         return Rating.getRatingBy(item)
//     }, {
//         enabled: false
//     })
//     // const { data: indicatorsList, isError : indicatorError,  isLoading : indicatorLoading } = useQuery(["getIndicatorsRating"], () => {
//     //     return rating.getIndicatorsRating()
//     // })

//     const tabs = ["Общий", "Индикаторы"]
//     const nums = [NumberOne, NumberTwo, NumberThree];
//     const topStyles = ["first-place", "second-place", "third-place"]

//     if (isLoading) {
//         return <div>Loading</div>
//     }

//     else if (isError) {
//         return <div>Error</div>
//     }

//     console.log(indicators);
//     return (
//         <Layout>
//             <Row>
//                 <Col>
//                     <h3 className='rates-title my-4'>{language.stats_indicatrors}</h3>
//                     <div>
//                         <p className='mb-0'>{language.filter_by}:</p>
//                         <div className='filter-list'>
//                             <span className={`filter-list__item ${styleState === 1 ? "active" : ""}`} onClick={() => {
//                                 filter.refetch("school");
//                                 setFilterData(false)
//                                 setStyleState(1)
//                             }}>{language.by_class}</span>
//                             <span className={`filter-list__item ${styleState === 2 ? "active" : ""}`} onClick={() => setStyleState(2)}>{language.by_school}</span>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//             <Tabs>
//                 <TabList>
//                     <Tab>{language.general}</Tab>
//                     <Tab>{language.indicators}</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <Row>
//                         <Col>
//                             <Stack direction="horizontal" className='rating-top'>
//                                 {
//                                     ratingList.users?.map((ratingitem, index) => {
//                                         return (
//                                             <div className={`rating-top-item  ${topStyles[index]} `}>
//                                                 <img className='mb-3' src={nums[index]} alt="" />
//                                                 <p style={{ fontSize: "13px", fontWeight: "600" }}>{ratingitem.last_name} {ratingitem.first_name}</p>
//                                                 <p style={{ fontSize: "11px" }}>{language.classmate}</p>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </Stack>
//                         </Col>
//                     </Row>

//                     <Stack gap={3} className="my-3">
//                         {
//                             filter ? ratingList.users?.map((ratingitem, index) => <StatsItem
//                                 onClick={() => navigate(`/stats/${ratingitem.uid}`)}
//                                 lastName={ratingitem.last_name}
//                                 name={ratingitem.first_name}
//                                 level={ratingitem.level}
//                                 queue={index + 1}
//                             />) : <>
//                                 {
//                                     filter.isLoading ? ""
//                                         : filter.isError ? <h1>error</h1>
//                                             : filter.data.users?.map(item => <h1>{item.phone}</h1>)
//                                 }
//                             </>
//                         }
//                         {/* {
//                             ratingList.users?.map((ratingitem, index) => <StatsItem
//                                 onClick={() => navigate(`/stats/${ratingitem.uid}`)}
//                                 lastName={ratingitem.last_name}
//                                 name={ratingitem.first_name}
//                                 level={ratingitem.level}
//                                 queue={index + 1}
//                             />)
//                         }

//                         {
//                             filter.isLoading ? ""
//                                 : filter.isError ? <h1>error</h1>
//                                     : filter.data.users?.map(item => <h1>{item.phone}</h1>)

//                         } */}
//                     </Stack>
//                 </TabPanel>

//                 <TabPanel >
//                     <Stack gap={3} className="my-3">
//                         {
//                             indicators.isLoading ? <div>loading</div>
//                                 : indicators.isError ? <div>error</div>
//                                     : indicators.data.users?.map((ratingitem, index) => <IndicatorItem
//                                         lastName={ratingitem.last_name}
//                                         name={ratingitem.first_name}
//                                         value={ratingitem.value}
//                                         queue={index + 1}
//                                     />)
//                         }
//                     </Stack>
//                 </TabPanel>
//             </Tabs>


//         </Layout>

//     )
// }

// export default StatsPage