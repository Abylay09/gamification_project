import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import LessonItem from './components/LessonItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import Graduation from 'components/modals/Graduation'
import ClosedLesson from 'components/info/ClosedLesson'
import LessonHeader from './components/LessonHeader'
import { useGetLessonsGroupQuery } from 'redux/services/lessonApi'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle } from 'redux/features/lessonGroupSlice'
import axios from 'axios'
function LessonPage() {
    const [data, setData] = useState(null);
    const lessons = useSelector(state => state.lessonGroup);
    const params = useParams();
    const dispatch = useDispatch()

    
    // const { isLoading, isSuccess, error, data } = useGetLessonsGroupQuery("11870796-3253-11ed-a261-0242ac120002")

    const { currentData, isLoading, isSuccess, isError, error, refetch } = useGetLessonsGroupQuery(params.id)
    if (isLoading) return <div>Loading...</div>

    return (
        <Layout  >
            <Row>
                <Col>
                    <LessonHeader title={currentData.lessons_group.title} order = {currentData.lessons_group.order} 
                        prev = {currentData.lessons_group.prev} next = {currentData.lessons_group.next}
                    />
                    {/* <LessonHeader title={data.lessons_group.title} order = {data.lessons_group.order} 
                        prev = {data.lessons_group.prev} next = {data.lessons_group.next}
                    /> */}
                </Col>
            </Row>
            <Row>
                <Col >
                    <Stack gap={3}>
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <LessonItem />
                        <FixedButton text={"начать"} />
                    </Stack>
                </Col>
            </Row>
            {/* popup с поздравлением */}
            {/* <Graduation show={true} /> */}
        </Layout >
    )
}

export default LessonPage