import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import LectureItem from './components/LectureItem'
import "./index.scss"
import TaskItem from './components/TaskItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import StickyButton from 'components/buttons/StickyButton'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function LecturePage() {
    const [uidLink, setLink] = useState("")
    const params = useParams();
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { data: lesson, status } = useQuery(["lesson"], async () => {
        const response = await axios.get("http://195.49.212.191:8779/lessons/lesson/", {
            params: {
                uid: params.id
            },
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        const result = await response.data;
        return result;
    })
    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return <div>Error</div>
    }
    console.log(lesson);
    return (
        // <Container className='min-vh-100'>
        <Container >
            <Row>
                <Col>
                    <div className='d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        {/* <div className='d-flex align-items-center py-4' > */}
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >{lesson.lesson.title}</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col >
                    <h4 className='section-title my-4' >Лекции</h4>
                    <Stack gap={3}>
                        {lesson.lesson.lectures.map(item => {
                            return <LectureItem title={item.title} order={item.order} />
                        })}
                    </Stack>
                </Col>
            </Row>

            <Row >
                <Col >
                    <h4 className='section-title my-4' >Задания</h4>
                    <Stack>
                        {/* <TaskItem /> */}
                        {lesson.lesson.tasks.map(item => {
                            return <TaskItem exp={item.exp} gold={item.gold} order={item.order}
                                uid={item.uid} onClick={setLink} />
                        })}

                    </Stack>

                    <StickyButton text={"Погнали!"} onClick={() => {
                        console.log(uidLink);
                        navigate(`/task/${uidLink}`)
                    }
                    } />

                    {/* <FixedButton text={"Погнали!"} /> */}
                </Col>
            </Row>



        </Container>
    )
}

export default LecturePage