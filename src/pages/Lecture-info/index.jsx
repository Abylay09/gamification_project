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
import CommonButton from 'components/buttons/CommonButton';
import StickyButton from 'components/buttons/StickyButton';
import Spinner from 'react-bootstrap/Spinner';
function LectureInfoPage() {
    const language = useSelector(state => state.language.language)
    const [show, showMore] = useState(false);
    const params = useParams();
    const navigate = useNavigate()
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    const token = localStorage.getItem("token");

    const { data: lecture, status, isFetching } = useQuery(["lecture", params.id], async () => {
        const response = await axios.get("http://api.openskill.uz/lessons/lesson/", {
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
    if (isFetching) {
        return <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='text-center'>
                <Spinner animation="border" variant="primary" />
                <h3>Загрузка...</h3>
            </div>
        </Container>
    }
    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return <div>Error</div>
    }
    return (
        <Container className='position-relative vh-100'>
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
            {
                lecture.lesson.next ?
                    <div className='position-absolute start-50 w-100' style={{ padding: "0 24px", bottom: "64px", transform: "translateX(-50%)" }}>
                        <CommonButton text={"Следующий урок"} onClick={() => navigate(`/lecture-info/${lecture.lesson.next}`)} />
                    </div> : ""
            }


            {/* {show ? lecture.lesson.lectures[0].content : lecture.lesson.lectures[0].content.substring(0, lecture.lesson.lectures[0].content.length / 3)} */}
            {/* <p style={{ color: "#2A80FF", fontSize: "13px" }} onClick={() => showMore(!show)}>Показать еще</p> */}

        </Container>
    )
}

export default LectureInfoPage