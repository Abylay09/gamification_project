import React, { useState } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import ShowMoreText from "react-show-more-text";
import ReactPlayer from 'react-player'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import PurpleCross from "assets/common/purple-cross.png"
import "./index.scss"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
function LectureInfoPage() {
    const language = useSelector(state => state.language.language)
    const [show, showMore] = useState(false);
    const params = useParams();
    const navigate = useNavigate()
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    const token = localStorage.getItem("token");

    const { data: lecture, status } = useQuery(["lecture"], async () => {
        const response = await axios.get("http://195.49.212.191:8779/lessons/lesson/", {
            params: {
                uid: params.id
            },
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        const result = await response.data;
        console.log(result);
        return result;
    })
    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return <div>Error</div>
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className='page-header d-flex py-4'>
                        <img style={{ height: "20px" }} src={PurpleCross} alt="" onClick={() => navigate(-1)} />
                        <h3 className="lecture-title">{lecture.lesson.lectures[0].title}</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='react-player-container mt-4'>
                        <ReactPlayer className="react-player" width={'100%'} height={'100%'} controls={true} url="http://openskill.uz/static_assets/21ec1001-6e14-4dbf-a20d-12bbd0fbf9be.mp4" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Stack>
                        <h4 className='lecture-text-subtitle' >{language.theory}</h4>
                        <p className='lecture-text' >
                            {lecture.lesson.lectures[0].content}
                        </p>

                    </Stack>
                </Col>
            </Row>

            {/* {show ? lecture.lesson.lectures[0].content : lecture.lesson.lectures[0].content.substring(0, lecture.lesson.lectures[0].content.length / 3)} */}
            {/* <p style={{ color: "#2A80FF", fontSize: "13px" }} onClick={() => showMore(!show)}>Показать еще</p> */}

        </Container>
    )
}

export default LectureInfoPage