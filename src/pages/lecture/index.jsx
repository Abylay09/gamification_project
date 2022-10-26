import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import LectureItem from './components/LectureItem'
import TaskItem from './components/TaskItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import StickyButton from 'components/buttons/StickyButton'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataList } from 'utils/api/getDataList'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import "./index.scss"

function LecturePage() {
    const language = useSelector(state => state.language.language)
    const [uidLink, setLink] = useState("")
    const params = useParams();
    const navigate = useNavigate()
    const { data: lesson, status, isSuccess, isLoading, isError } = useQuery(["lesson"], () => {
        return getDataList.getLecture(params.id)
    })

    if (isLoading) {
        return <div>Loading</div>
    }
    else if (isError) {
        return <div>Error</div>
    }
    if(!uidLink && lesson && lesson.lesson && lesson.lesson.tasks && lesson.lesson.tasks.length) {
        let find = lesson.lesson.tasks.find(x => x.hasPlay && x.exp)
        if(find)
            setLink(find.uid)
    }
    return (
        <Container className='min-vh-100'>
            <Row>
                <Col>
                    <div className='page-header d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >{lesson.lesson.title}</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col >
                    <h4 className='section-title my-4' >{language.lectures}</h4>
                    <Stack gap={3}>
                        {lesson.lesson.lectures.map(item => {
                            return <LectureItem goToLecture = {() => navigate(`/lecture-info/${lesson.lesson.uid}`)} title={item.title} order={item.order} />
                        })}
                    </Stack>
                </Col>
            </Row>

            <Row >
                <Col >
                    <h4 className='section-title ' >{language.tasks}</h4>
                    <Stack>
                        {/* <TaskItem /> */}
                        {lesson.lesson.tasks.map(item => {
                            return <TaskItem hasPlay = {item.hasPlay} exp={item.exp} gold={item.gold} order={item.order}
                                onClick={() => { 
                                    if(item.hasPlay) {
                                        navigate(`/task/${item.uid}`) 
                                    }  
                                }} />
                        })}

                    </Stack>

                    {
                        uidLink ?
                        <StickyButton text={language.next} onClick={() => {
                            navigate(`/task/${uidLink}`)
                        }
                        } />
                        : ""
                    }

                    {/* <FixedButton text={"Погнали!"} /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default LecturePage