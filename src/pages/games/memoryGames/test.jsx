import FixedButton from 'components/buttons/fixed-button/FixedButton';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { dataImages } from './dataImages'

function Test() {
    const [images, setImages] = useState([]);
    const [fakeImages, setFakeImages] = useState([]);
    // const [answers, setAnswers] = useState([]);
    const [show, setShow] = useState(true);
    const [showAnswers, setShowAnswers] = useState(false);
    const [finish, setFinish] = useState(false)
    let answers = [];
    const [level, setLevel] = useState(1);
    useEffect(() => {
        generateGame()
    }, [])
    function generateGame() {
        if (level <= dataImages.length - 1) {
            setShow(true)
            setShowAnswers(false)
            setImages([])
            answers = []
            setFakeImages([])
            console.log(level);
            for (let i = 0; i <= level; i++) {
                let rand = Math.floor(Math.random() * dataImages.length);
                setImages(oldArr => [...oldArr, dataImages[Math.floor(Math.random() * dataImages.length)].url])
            }

            for (let i = 0; i < level + 1; i++) {
                setFakeImages(oldArr => [...oldArr, dataImages[i].url])
            }
            setLevel(oldLevel => oldLevel + 1)
            setTimeout(() => {
                setShow(false)
            }, 2100)
            setTimeout(() => {
                setShowAnswers(true)
            }, 2200)
        } else {
            setFinish(true)
        }

    }
    function setId(img, index) {
        let result = images.find(elem => elem == img ? true : false)
        if (result) {
            return "yes"
        } else {
            return index
        }
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function checkAnswer() {
        console.log(answers);
        if (answers.every(item => item == "yes") && answers.length == images.length) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    return (
        <>
            {
                finish ? (
                    <div> Игра завершена</div >
                ) : (
                    <Container style={{ height: "100vh" }}>
                        <Row>
                            <Col>Игра</Col>
                        </Row>
                        <Row>
                            <Col >
                                <div style={{ display: show ? "block" : "none" }}>
                                    {
                                        images.map((img, index) => <img key={index} src={img} alt="" style={{ width: "80px", height: '80px' }} />)
                                    }
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: showAnswers ? "block" : "none" }}>
                                    <div className='d-flex flex-wrap' style={{ gap: "20px" }}>
                                        {
                                            fakeImages ? shuffle(fakeImages.concat(images)).map((img, index) => <img
                                                custom-key={setId(img, index)}
                                                onClick={(e) => {
                                                    // setAnswers(oldArr => [...oldArr, e.target.getAttribute("custom-key")])
                                                    answers.push(e.target.getAttribute("custom-key"))
                                                }}
                                                key={index}
                                                src={img} alt=""
                                                style={{ width: "80px", height: '80px' }} />)
                                                : ""
                                        }
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <FixedButton onClick={() => {
                            checkAnswer()
                            generateGame()
                        }} text={"Продолжить"} />
                    </Container>
                )

            }
        </>
    )
}

export default Test