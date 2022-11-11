import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Container, Button } from 'react-bootstrap'
import GameHeader from '../components/GameHeader'
import { useSelector } from 'react-redux'
import { data } from "./cardGameData"
import axios from 'axios'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import { useNavigate } from 'react-router-dom'

function CardGame() {
    const [time, setTime] = useState(60)
    const language = useSelector(state => state.language.language);
    const [state, setState] = useState({
        currentQuestion: 0,
        currentColorName: "",
        randomColorname: "",
        currentColorCode: "",
        rand2: 1,
        answer: "",
        score: 0,
        finish: false,
        level: 1
    });

    const navigate = useNavigate()

    useEffect(() => {
        setState({
            ...state,
            currentColorName: data[state.currentQuestion].colorName,
            answer: data[state.currentQuestion].color,
            currentColorCode: data[Math.floor(Math.random() * data.length)].color,
            rand2: Math.random()
        })
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    // useEffect(() => {
    //         console.log("work");
    // }, [state.finish])

    useEffect(() => {
        if (state.currentQuestion > data.length - 1) {
            setState({
                ...state,
                currentQuestion: 0,
                level: 2
            })
        } else {
            let find1 = data[Math.floor(Math.random() * data.length)],
                find2 = data[Math.floor(Math.random() * data.length)]
            console.log(state.rand2)
            if(state.rand2 > 0.5) 
                find2 = find1
            setState({
                ...state,
                currentColorName: find1.colorName,
                answer: find1.color,
                currentColorCode: find2.color,
                randomColorname: find2.colorName,
                rand2: Math.random()
            })
        }
    }, [state.currentQuestion])

    function sendData() {
        const token = localStorage.getItem("token");
        let data = {
            type: "attention",
            value: state.score
        }
        axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

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
                        score: !state.score ? 0 : state.score - 1,
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
                        score:!state.score ? 0 :  state.score - 1,
                        currentQuestion: state.currentQuestion + 1
                    })
                }
                break;
            }
            default: {
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

    // function compare(variant) {
    //     switch (variant) {
    //         case "yes": {
    //             if (state.answer === state.currentColorCode) {
    //                 setState({
    //                     ...state,
    //                     score: state.score + 1,
    //                     currentQuestion: state.currentQuestion + 1
    //                 })
    //             } else {
    //                 setState({
    //                     ...state,
    //                     score: state.score - 1,
    //                     currentQuestion: state.currentQuestion + 1
    //                 })
    //             }
    //             break;
    //         }
    //         case "no": {
    //             if (state.answer !== state.currentColorCode) {
    //                 setState({
    //                     ...state,
    //                     score: state.score + 1,
    //                     currentQuestion: state.currentQuestion + 1
    //                 })
    //             } else {
    //                 setState({
    //                     ...state,
    //                     score: state.score - 1,
    //                     currentQuestion: state.currentQuestion + 1
    //                 })
    //             }
    //             break;
    //         }
    //     }
    // }

    if (state.finish) {
        return (
            <Container className='text-center d-flex flex-column justify-content-center' style={{ height: "100vh" }}>
                <h1>{language.game_end}</h1>
                <p>{language.game_score} {state.score}</p>
                <FixedButton text={language.game_back} onClick={() => {
                    sendData()
                    navigate(-1)
                }} />
            </Container>

        )
    } else {
        if (state.level == 1) {
            return (
                // <Container style={{height : "100vh"}} className='d-flex flex-column justify-content-center'>
                <Container style={{ marginTop: "100px" }}>
                    <GameHeader title={language.cards_color} />
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h4>{language.time}: {time === 0 ? setState({
                            ...state,
                            finish: true
                        }) : time}</h4>
                        <h5 className='mb-0'>{language.score} {state.score}</h5>
                    </div>
                    <h6 className='text-center'>{language.cards_game_title}</h6>
                    <div className='d-flex justify-content-center mt-5' style={{ height: "70px" }}>
                        <div className=' d-flex justify-content-center align-items-center border border-1 rounded px-5' style={{ width: "auto", }}>
                            <span style={{ color: state.currentColorCode }}>{state.currentColorName}</span>
                        </div>
                    </div>
                    <div className='mt-4 d-flex justify-content-center' style={{ gap: "20px" }}>
                        <Button className='px-5' variant="primary" onClick={() => checkAnswer("yes")}>{language.yes}</Button>
                        <Button className='px-5' variant="danger" onClick={() => checkAnswer("no")}>{language.no}</Button>
                    </div>
                </Container>
            )
        } else {
            return (
                state.rand2 > 0.5 ?
                (<Container style={{ marginTop: "100px" }}>
                    <GameHeader title={"Карточки с цветами"} />
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h4>{language.time}: {time === 0 ? setState({
                            ...state,
                            finish: true
                        }) : time}</h4>
                        <h5>{language.score} {state.score}</h5>
                    </div>

                    <h6 className='text-center'>Совпадает ли значение первой карточки с цветом второй?</h6>
                    <div className='d-flex justify-content-center mt-5' style={{ gap: "70px" }}>
                        <div className='p-4 border border-1 rounded'>
                            <span>{state.currentColorName}</span>
                        </div>
                        <div className='p-4 border border-1 rounded'>
                            <span style={{ color: state.currentColorCode }}>{
                                state.randomColorname
                            }</span>
                        </div>
                    </div>
                    <div className='mt-5 d-flex justify-content-center' style={{ gap: "20px" }}>
                        <Button className='px-5' variant="primary" onClick={() => checkAnswer("yes")}>{language.yes}</Button>
                        <Button className='px-5' variant="danger" onClick={() => checkAnswer("no")}>{language.no}</Button>
                    </div>
                </Container>)
                :
                <Container style={{ marginTop: "100px" }}>
                    <GameHeader title={"Карточки с цветами"} />
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h4>{language.time}: {time === 0 ? setState({
                            ...state,
                            finish: true
                        }) : time}</h4>
                        <h5>{language.score} {state.score}</h5>
                    </div>

                    <h6 className='text-center'>Совпадает ли значение второй карточки с цветом первой?</h6>
                    <div className='d-flex justify-content-center mt-5' style={{ gap: "70px" }}>
                        <div className='p-4 border border-1 rounded'>
                            <span style={{ color: state.currentColorCode }}>{
                                state.randomColorname
                            }</span>
                        </div>
                        <div className='p-4 border border-1 rounded'>
                            <span>{state.currentColorName}</span>
                        </div>
                    </div>
                    <div className='mt-5 d-flex justify-content-center' style={{ gap: "20px" }}>
                        <Button className='px-5' variant="primary" onClick={() => checkAnswer("yes")}>{language.yes}</Button>
                        <Button className='px-5' variant="danger" onClick={() => checkAnswer("no")}>{language.no}</Button>
                    </div>
                </Container> 
            )
        }

    }
}

export default CardGame