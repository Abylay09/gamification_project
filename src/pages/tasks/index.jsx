import React, { useState } from 'react'
import { Container, Row, Col, ProgressBar, Stack, Button } from 'react-bootstrap'

import { useNavigate, useParams } from 'react-router-dom'
import PurpleCross from "assets/common/purple-cross.png"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getDataList } from 'utils/api/getDataList'
import { postDataList } from 'utils/api/postDataList'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import CheckIcon from "assets/modal/check.svg"
import CrossIcon from "assets/modal/cross.svg"
import al_horesmi from "assets/common/al_horesmi.png"

import DOMPurify from 'dompurify'
import "./index.scss"
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Loading from 'components/loading/Loading'
function TaskPage() {
    const language = useSelector(state => state.language.language)
    const [inputValue, setInputValue] = useState([])
    const [show, setShow] = useState(false);
    const [notCorrect, setNotCorrect] = useState(false)
    const [attempt, setAttempt] = useState(0);
    const [time, setTime] = useState(0);
    const navigate = useNavigate();
    const params = useParams()
    const ref = useRef(null)
    let itemEls = useRef(new Array())
    const queryClient = useQueryClient()

    const { data: query, status, refetch, isLoading } = useQuery(["task-info"], () => {
        setInputValue([])
        console.log(inputValue)
        if(itemEls.length)
            itemEls.replace(0, itemEls.length)
        return getDataList.getTask(params.id)
    }, {
        cacheTime: 0,
    })

    const { data: info } = useQuery(["personal-info"], async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://api.openskill.uz/user/me", {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        const result = await response.data
        return result
    }, {
        cacheTime: 0
    })

    const handleClose = () => {
        setShow(false)
        refetch();
    };
    const handleCloseCorrect = () => {
        setNotCorrect(false)
        refetch();
    };

    // if (!inputValue.length && query && query.data.type !== 'test')
    //     setInputValue(new Array(query.data.answers_length).fill())

    const mutation = useMutation(answer => {
        return postDataList.checkTask(answer)
    })
    if (isLoading) {
        return <Loading />
    }
    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return < div > Error</ div>
    }
    let inter = setInterval(() => setTime(time + 1), 1000)
    const closeInter = () => {
        clearInterval(inter)
        setShow(true)
        if (query.data.type !== 'test')
            setInputValue(new Array(query.data.answers_length).fill())
        else setInputValue([])
    }
    const updateValue = (value, index) => {
        let newValue = JSON.parse(JSON.stringify(inputValue))
        console.log(inputValue)
        newValue[index] = value
        setInputValue(newValue)
    }
    const updateValueTest = (value, index) => {
        let newValue = JSON.parse(JSON.stringify(inputValue))
        let findIndex = newValue.findIndex(x => x === value + "_" + index)
        if (!!~findIndex)
            newValue.splice(findIndex, 1)
        else newValue.push(value + "_" + index)
        setInputValue(newValue)
    }



    return (
        <Container className='vh-100 min-vh-100 d-flex flex-column'>
            <Row className="row-sticky">
                <Col>
                    <div className='d-flex py-4 align-items-center'>
                        <img onClick={() => navigate(-1)} style={{ height: "20px" }} src={PurpleCross} alt="" />
                        <h3 className="lecture-title" ></h3>
                        <ProgressBar className='level-progress' now={info?.profile?.exp} />
                    </div>
                </Col>
            </Row>

            <Row className='flex-grow-1'>
                <Col className='d-flex flex-column'>
                    <div className="special-div" >
                        <div className="condition">
                            <h5 className="text-center mb-2"  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(query.data.condition)}}></h5>
                            <div className="condition-img">
                                <img src={al_horesmi} alt="" />
                            </div>
                        </div>

                        <div className='text-center' >
                            {
                                query.data.type === "test"
                                    ? query.data.answers.map((x, i) =>
                                    (<div key={x + "_" + i} onClick={() => updateValueTest(x, i)} className={`answer ${inputValue.find((y) => y === x + "_" + i) ? "active" : ""}`}>
                                        {x}
                                    </div>)
                                    )
                                    : new Array(query.data.answers_length).fill().map((x, i) =>
                                    (
                                        <input autoFocus
                                            key={x + "_" + i}
                                            ref={(e) => itemEls.current[i] = e}
                                            // ref={ref} 
                                            onChange={e => updateValue(e.target.value, i)} value={x} className='condition-input' type="text" placeholder={language.answer} />
                                    )
                                    )
                            }
                            {/* {inputValue.length <= 0 ? <p>{language.your_answer}</p> : ""} */}
                        </div>
                    </div>
                    {inputValue}
                    <Button className='w-100 py-3 mt-auto btn-sticky' disabled={inputValue.some(x => !x) || inputValue.length < query.data.answers_length} variant="primary" onClick={() => {
                        if (inputValue.length !== 0) {
                            console.log(inputValue, itemEls)
                            if (itemEls && itemEls.current && itemEls.current.length) {
                                itemEls.current.forEach(x => x ? x.value = '' : "")
                            }
                            mutation.mutate({ uid: query.data.task_uid, answer: inputValue.map(x => (x + "").split("_")[0]), attempt: setAttempt(attempt + 1), time }, {
                                onSuccess: (data) => {
                                    if (data.validate) {
                                        closeInter()
                                        queryClient.invalidateQueries(['personal-info'])
                                    } else {
                                        setNotCorrect(true)
                                        setInputValue([])
                                        queryClient.invalidateQueries(['personal-info'])
                                    }
                                }
                            })
                        } else {
                            console.log(false);
                        }
                    }}>{language.check}</Button>
                </Col>
            </Row>

            <Modal dialogClassName='custom-modal' contentClassName="custom-content" show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='custom-success'>
                        <span>{language.well_done}!</span>
                        <div className='custom-success__img'><img src={CheckIcon} alt="" /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix="custom-footer">
                    <Button className='w-100 py-3 mt-auto' style={{ marginBottom: "64px", backgroundColor: "#19E439" }} onClick={handleClose}>
                        {language.next}</Button>
                </Modal.Footer>
            </Modal>

            <Modal dialogClassName='custom-modal' contentClassName="custom-content" show={notCorrect} onHide={handleCloseCorrect}>
                <Modal.Body>
                    <div className='custom-success'>
                        {/* <span>{language.no_answer}</span> */}
                        <span>Неправильный ответ</span>
                        <div className='custom-success__img custom-success__img--not-correct'><img src={CrossIcon} alt="" /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix="custom-footer">
                    <Button className='w-100 py-3 mt-auto' style={{ marginBottom: "64px", backgroundColor: "#EB2E72" }} onClick={handleCloseCorrect}>
                        {language.next}</Button>
                </Modal.Footer>
            </Modal>
        </Container>


    )
}

export default TaskPage