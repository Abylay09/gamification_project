import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Stack } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from "swiper";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameHeader from 'pages/games/components/GameHeader'
import axios from 'axios';
import { figures } from "./figuresData.js"
import "./Figures.scss"
import 'swiper/css';


function Figures() {
    const [slide, setSlides] = useState([])
    const [show, setShow] = useState(false);
    const [score, setScore] = useState(0)
    const [time, setTime] = useState();
    const [finish, setFinish] = useState(false)
    const [start, setStart] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * figures.length)
        setSlides([...Object.values(figures[randomNum])])
        setShow(true)

    }, [start])

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(oldTime => oldTime - 1)
        }, 999)

        if (time == 0) {
            setFinish(true)
            setStart(false)
            sendData();
        }
        return () => clearInterval(timer)
    }, [time])

    function sendData() {
        const token = localStorage.getItem("token");
        let data = {
            type: "thinkings",
            value: score
        }
        axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    }

    function changeSlides() {
        setShow(false)
        const randomNum = Math.floor(Math.random() * figures.length)
        setSlides([...Object.values(figures[randomNum])])
        setTimeout(() => {
            setShow(true)
        }, 100);
    }

    function checkAnswer(answer) {
        if (answer === slide[slide.length - 1]) {
            setScore(oldScore => oldScore + 5)
        } else {
            score === 0 ? setScore(0) : setScore(oldScore => oldScore - 5)

        }
    }

    return start ? (
        <Container className='figures-wrapper' style={{ height: "100vh" }}>
            <GameHeader title={"Отличительные свойства"} />
            <Row style={{ paddingTop: "100px" }}>
                <Col className='text-center figures-score'>
                    Счет  : {score}
                </Col>
                <Col className='text-center figures-time'>
                    Время  : {time} сек.
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='text-center'>
                    {
                        show ? <Swiper
                            className="mt-5"
                            modules={[Autoplay, Parallax]}
                            parallax={true}
                            slidesPerView={1}
                            autoplay={{
                                delay: 1600,
                                stopOnLastSlide: true
                            }}
                            allowTouchMove={false}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                slide.map((item, index) => {
                                    if (index === slide.length - 1) {
                                        return
                                    } else {
                                        return (
                                            <SwiperSlide>
                                                <div style={{ margin: "0 auto", width: '125px', height: '125px' }} className={item}></div>
                                            </SwiperSlide>
                                        )
                                    }
                                })
                            }
                        </Swiper> : <div style={{ height: "100px" }}></div>
                    }
                </Col>
            </Row>
            <Row className='tw '>
                <h5 className='text-center mb-3'>
                    {slide.length - 1 === 2 ? "Совпадает ли эта фигура предыдущей?" : "Совпадает ли эта фигура предыдущими?"}
                </h5>
                <Col xs={6}>
                    <Button className='w-100 py-2' variant="success" onClick={() => {
                        checkAnswer("yes")
                        changeSlides()
                    }} >Да</Button>
                </Col>
                <Col xs={6} >
                    <Button className='w-100  py-2' variant="danger" onClick={() => {
                        checkAnswer("no")
                        changeSlides()
                    }}>Нет</Button>
                </Col>
                <Col xs={8} style={{ margin: "25px auto" }} >
                    <Button className='w-100 py-2' variant="primary" onClick={() => {
                        checkAnswer("partially")
                        changeSlides()
                    }}>Частично</Button>
                </Col>
            </Row>
        </Container >
    ) : <Container className='vh-100'>
        {
            finish ? (
                <div>
                    <h1 className='text-center' style={{ paddingTop: "50%" }}>Игра окончена</h1>
                    <p className='text-center' style={{ fontSize: "20px" }}>Твой счет : {score}</p>
                    <Button className='w-100 py-3 mt-4' style={{ fontSize: "18px" }} variant="primary" onClick={() => {
                        navigate("/quests")
                    }}>Вернуться в раздел игр</Button>
                </div>
            ) : (
                <Row className='h-100'>
                    <Col>
                        <Stack className='h-100 justify-content-center'>
                            <div>
                                <p style={{ fontSize: "16px" }} className='text-center'>Тебе будут показывать фигуры и будет задан вопрос: совпадает ли эта фигура предыдущей?
                                    Будет три варианта ответов в виде кнопок да, нет и частично. Готов? </p>
                                <Button className='w-100 py-3' style={{ fontSize: "18px" }} variant="primary" onClick={() => {
                                    setTime(60)
                                    setStart(true)
                                }}> Начать игру</Button>
                            </div>
                        </Stack>
                    </Col>
                </Row>

            )
        }

    </Container>

}

export default Figures