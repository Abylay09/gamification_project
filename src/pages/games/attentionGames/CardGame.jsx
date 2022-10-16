import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Container, Button } from 'react-bootstrap'
import { data } from "./cardGameData"
function CardGame() {
    const [time, setTime] = useState(60)
    const [state, setState] = useState({
        currentQuestion: 0,
        currentColorName: "",
        randomColorname : "",
        currentColorCode: "",
        answer: "",
        score: 0,
        finish: false,
        level: 1
    });

    useEffect(() => {
        setState({
            ...state,
            currentColorName: data[state.currentQuestion].colorName,
            answer: data[state.currentQuestion].color,
            currentColorCode: data[Math.floor(Math.random() * data.length)].color,
        })
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (state.currentQuestion > data.length - 1) {
            setState({
                ...state,
                currentQuestion : 0,
                level: 2
            })
        } else {
            setState({
                ...state,
                currentColorName: data[state.currentQuestion].colorName,
                answer: data[state.currentQuestion].color,
                currentColorCode: data[Math.floor(Math.random() * data.length)].color,
                randomColorname : data[Math.floor(Math.random() * data.length)].colorName
            })
        }
    }, [state.currentQuestion])



    function checkAnswer(variant) {
        switch (variant) {
            case "yes": {
                if (state.answer === state.currentColorCode) {
                    setState({
                        ...state,
                        score: state.score + 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                } else {
                    setState({
                        ...state,
                        score: state.score - 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                }
                break;
            }
            case "no": {
                if (state.answer !== state.currentColorCode) {
                    setState({
                        ...state,
                        score: state.score + 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                } else {
                    setState({
                        ...state,
                        score: state.score - 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                }
                break;
            }
        }
    }

    function compare(variant) {
        switch (variant) {
            case "yes": {
                if (state.answer === state.currentColorCode) {
                    setState({
                        ...state,
                        score: state.score + 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                } else {
                    setState({
                        ...state,
                        score: state.score - 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                }
                break;
            }
            case "no": {
                if (state.answer !== state.currentColorCode) {
                    setState({
                        ...state,
                        score: state.score + 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                } else {
                    setState({
                        ...state,
                        score: state.score - 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                }
                break;
            }
        }
    }

    if (state.finish) {
        return (
            <Container>
                <h1>Игра окончена</h1>
                <p>Ваш Счет {state.score}</p>
            </Container>

        )
    } else {
        if (state.level == 1) {
            return (
                <Container>
                    <h4>Время: {time === 0 ? setState({
                        ...state,
                        finish: true
                    }) : time}</h4>
                    <p>Счет {state.score}</p>
                    <div>
                        <div className='p-4 border border-1 rounded'>
                            <span style={{ color: state.currentColorCode }}>{state.currentColorName}</span>
                            {/* <span ref={ref}>{activeColor}</span> */}
                        </div>
                    </div>
                    <div className='mt-3 d-flex' style={{ gap: "20px" }}>
                        <Button className='px-4' variant="primary" onClick={() => checkAnswer("yes")}>Да</Button>
                        <Button className='px-4' variant="danger" onClick={() => checkAnswer("no")}>Нет</Button>
                    </div>
                </Container>
            )
        } else {
            return (
                <Container>
                    <h4>Время: {time === 0 ? setState({
                        ...state,
                        finish: true
                    }) : time}</h4>
                    <p>Счет {state.score}</p>
                    <h5>Совпадает ли значение первой карточки с цветом второй?</h5>
                    <div className='d-flex ' style={{ gap: "70px" }}>
                        <div className='p-4 border border-1 rounded'>
                            <span>{state.currentColorName}</span>
                        </div>
                        <div className='p-4 border border-1 rounded'>
                            <span style={{ color: state.currentColorCode }}>{
                                state.randomColorname
                            }</span>
                        </div>
                    </div>
                    <div className='mt-3 d-flex' style={{ gap: "20px" }}>
                        <Button className='px-4' variant="primary" onClick={() => compare("yes")}>Да</Button>
                        <Button className='px-4' variant="danger" onClick={() => compare("no")}>Нет</Button>
                    </div>
                </Container>
            )
        }

    }
}

export default CardGame