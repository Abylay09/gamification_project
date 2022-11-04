import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import LessonItem from './components/LessonItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import Graduation from 'components/modals/Graduation'
import ClosedLesson from 'components/info/ClosedLesson'
import LessonHeader from './components/LessonHeader'
import { useQuery } from '@tanstack/react-query'
import StickyButton from 'components/buttons/StickyButton'
import { getDataList } from 'utils/api/getDataList'
import Loading from 'components/loading/Loading'
import "./index.scss"
import homebg from "assets/common/homebg.jpg"
function LessonPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const { data: lessonGroup, isError, isLoading, isFetching } = useQuery(["LessonGroup", params.id], () => {
        return getDataList.getLessonsGroup(params.id)
    }, {
        retry: 3
    })
    if (isFetching) {
        return <Loading />
    }
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
        <Layout style={{ position: "relative" }}>
            {/* <div className='bg h-100' style={{ backgroundImage:`url(${homebg})`,backgroundRepeat:"no-repeat"}}> */}
            {/* <div className='bg h-100' > */}
            <div className='bg h-100 pt-4' >
                <Row>
                    <Col>
                        <LessonHeader title={lessonGroup.lessons_group.title} order={lessonGroup.lessons_group.order}
                            prev={lessonGroup.lessons_group.prev} next={lessonGroup.lessons_group.next}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Stack gap={3} >
                            {
                                lessonGroup.lessons_group.lessons?.map(lesson =>
                                (<LessonItem
                                    hasPlay={lesson.hasPlay}
                                    selectLesson={() => setUrl(lesson.uid)}
                                    title={lesson.title}
                                    order={lesson.order}
                                    startLesson={() => navigatePage(lesson.uid)} />)
                                )
                            }
                        </Stack>
                    </Col>
                </Row>
            </div>



            {/* popup с поздравлением */}
            {/* <Graduation show={true} /> */}
        </Layout >
    )
}

export default LessonPage