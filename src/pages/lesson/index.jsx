import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import LessonItem from './components/LessonItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import Graduation from 'components/modals/Graduation'
import ClosedLesson from 'components/info/ClosedLesson'
import LessonHeader from './components/LessonHeader'
import {useQuery } from '@tanstack/react-query'
import StickyButton from 'components/buttons/StickyButton'
import { getDataList } from 'utils/api/getDataList'
function LessonPage() {
    const params = useParams();
    const navigate = useNavigate();

    const { data: lessonGroup, status, isError, isLoading } = useQuery(["LessonGroup", params.id], () => {
        return getDataList.getLessonsGroup(params.id)
    })

    if (isLoading) {
        return <div>Loading</div>
    }
    else if (isError) {
        return <div>Error</div>
    }

    const navigatePage = (id) => {
        navigate(`/lecture/${id}`)
    }
    return (
        <Layout  >
            <Row>
                <Col>
                    <LessonHeader title={lessonGroup.lessons_group.title} order={lessonGroup.lessons_group.order}
                        prev={lessonGroup.lessons_group.prev} next={lessonGroup.lessons_group.next}
                    />
                </Col>
            </Row>
            <Row>
                <Col >
                    <Stack gap={3}>
                        <LessonItem
                            title={lessonGroup.lessons_group.lessons[1]?.title}
                            order={lessonGroup.lessons_group.lessons[1]?.order} />

                        <LessonItem
                            title={lessonGroup.lessons_group.lessons[1]?.title}
                            order={lessonGroup.lessons_group.lessons[1]?.order} />

                        <LessonItem
                            title={lessonGroup.lessons_group.lessons[1]?.title}
                            order={lessonGroup.lessons_group.lessons[1]?.order} />

                        <LessonItem
                            title={lessonGroup.lessons_group.lessons[1]?.title}
                            order={lessonGroup.lessons_group.lessons[1]?.order} />
                        <StickyButton text={"Начать"} onClick={() => navigatePage(lessonGroup.lessons_group.lessons[1].uid)} />
                    </Stack>
                </Col>
            </Row>
            {/* popup с поздравлением */}
            {/* <Graduation show={true} /> */}
        </Layout >
    )
}

export default LessonPage