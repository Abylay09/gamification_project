import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Container, Button, Row, Col, Stack } from 'react-bootstrap'
import { data } from "./cardGameData"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GameHeader from '../components/GameHeader'
import "./CardGame.scss"
export default function CardGame() {
    const [colorInfo, setColorInfo] = useState()
    const [fakeInfo, setFakeInfo] = useState();
    const [fakeName, setFakeName] = useState();
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60);
    const [level, setLevel] = useState(1)
    const [finish, setFinish] = useState(false)
    const navigate = useNavigate()
    const flag = useRef(false)


    useEffect(() => {
        setColorInfo(data[Math.floor(Math.random() * data.length)])
        setFakeInfo(data[Math.floor(Math.random() * data.length)])
        const timer = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (time === 35) {
            setLevel(2)
            setFakeName(data[Math.floor(Math.random() * data.length)].colorName)
        } else if (time === 0) {
            setFinish(true)
            sendData()
        }
    }, [time])

    useEffect(() => {
        if (level === 1) {
            flag.current = Math.round(Math.random() * 1)
        } else {
            flag.current = Math.round(Math.random() * 2)
        }
    }, [score])

    function sendData() {
        const token = localStorage.getItem("token");
        let data = {
            type: "attention",
            value: score
        }
        axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }


    function updateQuest() {
        if (flag.current === 1) {
            const temp = Math.floor(Math.random() * data.length)
            setColorInfo(data[temp])
            setFakeInfo(data[temp])
        } else if (flag.current === 0) {
            setColorInfo(data[Math.floor(Math.random() * data.length)])
            setFakeInfo(data[Math.floor(Math.random() * data.length)])
        } else {
            setColorInfo(data[Math.floor(Math.random() * data.length)])
            setFakeInfo(data[Math.floor(Math.random() * data.length)])
        }
    }

    function updateQuestLevel() {
        if (flag.current === 1) {
            const temp = Math.floor(Math.random() * data.length)
            setColorInfo(data[temp])
            setFakeInfo(data[temp])
            setFakeName(data[Math.floor(Math.random() * data.length)].colorName)
        } else if (flag.current === 0) {
            setColorInfo(data[Math.floor(Math.random() * data.length)])
            setFakeInfo(data[Math.floor(Math.random() * data.length)])
            setFakeName(data[Math.floor(Math.random() * data.length)].colorName)

        } else {
            setColorInfo(data[Math.floor(Math.random() * data.length)])
            setFakeInfo(data[Math.floor(Math.random() * data.length)])
            setFakeName(data[Math.floor(Math.random() * data.length)].colorName)

        }
    }

    function checkAnswer(condition) {
        switch (condition) {
            case "Yes":
                if (colorInfo.colorName === fakeInfo.colorName) {
                    setScore(old => old + 1)
                    updateQuest()
                } else {
                    setScore(old => old === 0 ? 0 : old - 1)
                    updateQuest()
                }
                break;
            case "No":
                if (colorInfo.colorName !== fakeInfo.colorName) {
                    setScore(old => old + 1)
                    updateQuest()
                } else {
                    setScore(old => old === 0 ? 0 : old - 1)
                    updateQuest()

                }
                break;
        }
    }

    function compare(condition) {
        switch (condition) {
            case "Yes":
                if (colorInfo.color === fakeInfo.color) {
                    setScore(old => old + 1)
                    updateQuestLevel()
                } else {
                    setScore(old => old === 0 ? 0 : old - 1)
                    updateQuestLevel()
                }
                break;
            case "No":
                if (colorInfo.color !== fakeInfo.color) {
                    setScore(old => old + 1)
                    updateQuestLevel()
                } else {
                    setScore(old => old === 0 ? 0 : old - 1)
                    updateQuestLevel()
                }
                break;
        }
    }

    return finish ? (<Container>
        <h1 className='text-center' style={{ paddingTop: "50%" }}>Игра окончена</h1>
        <p className='text-center' style={{ fontSize: "20px" }}>Твой счет : {score}</p>
        <Button className='w-100 py-3 mt-4' style={{ fontSize: "18px" }} variant="primary" onClick={() => {
            navigate("/quests")
        }}>Вернуться в раздел игр</Button>
    </Container>) : (
        <Container className='card-game-wrapper' style={{ height: "100vh" }}>
            <div style={{ color: "#000" }}>
                <GameHeader title={"Карточки с цветами"} />
            </div>
            <Row className='' style={{ paddingTop: "100px" }}>
                <Col className='text-center' style={{ fontSize: "21px", fontWeight: "500" }}>
                    Счет : {score}
                </Col>
                <Col className='text-center' style={{ fontSize: "21px", fontWeight: "500" }}>
                    Время : {time}
                </Col>
            </Row>
            <Stack style={{ marginTop: "50%" }}>
                {
                    level === 1 ? (
                        <div>
                            <h5 className='text-center mt-3'>Совпадает ли значение написанного с цветом?</h5>
                            <div className='d-flex justify-content-center mt-5' style={{ height: "70px" }}>
                                <div className='thinking-card d-flex justify-content-center align-items-center border border-1 rounded px-5' style={{ width: "auto", }}>
                                    <span style={{ color: colorInfo?.color }}>{fakeInfo?.colorName}</span>
                                </div>
                            </div>
                            <div className='mt-5 d-flex justify-content-center ' style={{ gap: "20px" }}>
                                <Button className='px-5 w-100' variant="primary" style={{ fontSize: "19px" }} onClick={() => checkAnswer("Yes")}>Да</Button>
                                <Button className='px-5 w-100' variant="danger" style={{ fontSize: "19px" }} onClick={() => checkAnswer("No")}>Нет</Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h5 className='text-center mt-3'>Совпадает ли значение первой карточки с цветом второй?</h5>
                            <div className='d-flex justify-content-between mt-5' style={{ height: "70px" }}>
                                <div className='thinking-card d-flex justify-content-center align-items-center border border-1 rounded px-5' >
                                    <span style={{ color: colorInfo?.color }}>{colorInfo?.colorName}</span>
                                </div>
                                <div className='thinking-card d-flex justify-content-center align-items-center border border-1 rounded px-5' >
                                    <span style={{ color: fakeInfo?.color }}>{fakeName}</span>
                                </div>
                            </div>
                            <div className='mt-5 d-flex justify-content-around' style={{ gap: "20px" }}>
                                <Button className='px-5 w-100' variant="primary" style={{ fontSize: "19px" }} onClick={() => compare("Yes")}>Да</Button>
                                <Button className='px-5  w-100' variant="danger" style={{ fontSize: "19px" }} onClick={() => compare("No")}>Нет</Button>
                            </div>
                        </div>
                    )
                }
            </Stack>
        </Container>
    )
}

// import React from 'react'
// import { useState, useEffect, useRef } from 'react'
// import { Container, Button } from 'react-bootstrap'
// import GameHeader from '../components/GameHeader'
// import { useSelector } from 'react-redux'
// import { data } from "./cardGameData"
// import axios from 'axios'
// import FixedButton from 'components/buttons/fixed-button/FixedButton'
// import { useNavigate } from 'react-router-dom'

// function CardGame() {
//     const [time, setTime] = useState(60)
//     const language = useSelector(state => state.language.language);
//     const [state, setState] = useState({
//         currentQuestion: 0,
//         currentColorName: "",
//         randomColorname: "",
//         currentColorCode: "",
//         answer: "",
//         score: 0,
//         finish: false,
//         level: 1
//     });

//     const navigate = useNavigate()

//     useEffect(() => {
//         setState({
//             ...state,
//             currentColorName: data[state.currentQuestion].colorName,
//             answer: data[state.currentQuestion].color,
//             currentColorCode: data[Math.floor(Math.random() * data.length)].color,
//         })
//     }, [])

//     useEffect(() => {
        // const timer = setInterval(() => {
        //     setTime(prev => prev - 1)
        // }, 1000)
        // return () => clearInterval(timer)
//     }, [])

//     // useEffect(() => {
//     //         console.log("work");
//     // }, [state.finish])

//     useEffect(() => {
//         if (state.currentQuestion > data.length - 1) {
//             setState({
//                 ...state,
//                 currentQuestion: 0,
//                 level: 2
//             })
//         } else {
//             setState({
//                 ...state,
//                 currentColorName: data[state.currentQuestion].colorName,
//                 answer: data[state.currentQuestion].color,
//                 currentColorCode: data[Math.floor(Math.random() * data.length)].color,
//                 randomColorname: data[Math.floor(Math.random() * data.length)].colorName
//             })
//         }
//     }, [state.currentQuestion])

    // function sendData() {
    //     const token = localStorage.getItem("token");
    //     let data = {
    //         type: "attention",
    //         value: state.score
    //     }
    //     axios.post("http://api.openskill.uz/indicators/add-indicator", data, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });
    // }

//     function checkAnswer(variant) {
//         switch (variant) {
//             case "yes": {
//                 if (state.answer === state.currentColorCode) {
//                     setState({
//                         ...state,
//                         score: state.score + 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 } else {
//                     setState({
//                         ...state,
//                         score: state.score - 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 }
//                 break;
//             }
//             case "no": {
//                 if (state.answer !== state.currentColorCode) {
//                     setState({
//                         ...state,
//                         score: state.score + 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 } else {
//                     setState({
//                         ...state,
//                         score: state.score - 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 }
//                 break;
//             }
//         }
//     }

//     function compare(variant) {
//         switch (variant) {
//             case "yes": {
//                 if (state.answer === state.currentColorCode) {
//                     setState({
//                         ...state,
//                         score: state.score + 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 } else {
//                     setState({
//                         ...state,
//                         score: state.score - 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 }
//                 break;
//             }
//             case "no": {
//                 if (state.answer !== state.currentColorCode) {
//                     setState({
//                         ...state,
//                         score: state.score + 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 } else {
//                     setState({
//                         ...state,
//                         score: state.score - 1,
//                         currentQuestion: state.currentQuestion + 1
//                     })
//                 }
//                 break;
//             }
//         }
//     }

//     if (state.finish) {
//         return (
//             <Container className='text-center d-flex flex-column justify-content-center' style={{ height: "100vh" }}>
//                 <h1>{language.game_end}</h1>
//                 <p>{language.game_score} {state.score}</p>
//                 <FixedButton text={language.game_back} onClick={() => {
//                     sendData()
//                     navigate(-1)
//                 }} />
//             </Container>

//         )
//     } else {
//         if (state.level == 1) {
//             return (
//                 // <Container style={{height : "100vh"}} className='d-flex flex-column justify-content-center'>
//                 <Container style={{ marginTop: "100px" }}>
//                     <GameHeader title={language.cards_color} />
//                     <div className='d-flex justify-content-between align-items-center mb-4'>
//                         <h4>{language.time}: {time === 0 ? setState({
//                             ...state,
//                             finish: true
//                         }) : time}</h4>
//                         <h5 className='mb-0'>{language.score} {state.score}</h5>
//                     </div>
//                     <h6 className='text-center'>{language.cards_game_title}</h6>
                    // <div className='d-flex justify-content-center mt-5' style={{ height: "70px" }}>
                    //     <div className=' d-flex justify-content-center align-items-center border border-1 rounded px-5' style={{ width: "auto", }}>
                    //         <span style={{ color: state.currentColorCode }}>{state.currentColorName}</span>
                    //     </div>
                    // </div>
//                     <div className='mt-4 d-flex justify-content-center' style={{ gap: "20px" }}>
//                         <Button className='px-5' variant="primary" onClick={() => checkAnswer("yes")}>{language.yes}</Button>
//                         <Button className='px-5' variant="danger" onClick={() => checkAnswer("no")}>{language.no}</Button>
//                     </div>
//                 </Container>
//             )
//         } else {
//             return (
//                 <Container style={{ marginTop: "100px" }}>
//                     <GameHeader title={"Карточки с цветами"} />
//                     <div className='d-flex justify-content-between align-items-center mb-4'>
//                         <h4>{language.time}: {time === 0 ? setState({
//                             ...state,
//                             finish: true
//                         }) : time}</h4>
//                         <h5>{language.score} {state.score}</h5>
//                     </div>

//                     <h6 className='text-center'>Совпадает ли значение первой карточки с цветом второй?</h6>
//                     <div className='d-flex justify-content-center mt-5' style={{ gap: "70px" }}>
//                         <div className='p-4 border border-1 rounded'>
//                             <span>{state.currentColorName}</span>
//                         </div>
//                         <div className='p-4 border border-1 rounded'>
//                             <span style={{ color: state.currentColorCode }}>{
//                                 state.randomColorname
//                             }</span>
//                         </div>
//                     </div>
//                     <div className='mt-5 d-flex justify-content-center' style={{ gap: "20px" }}>
//                         <Button className='px-5' variant="primary" onClick={() => compare("yes")}>Да</Button>
//                         <Button className='px-5' variant="danger" onClick={() => compare("no")}>Нет</Button>
//                     </div>
//                 </Container>
//             )
//         }

//     }
// }

// export default CardGame