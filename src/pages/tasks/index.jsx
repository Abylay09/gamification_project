import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import PurpleCross from "assets/common/purple-cross.png"
import { useMutation, useQuery } from '@tanstack/react-query'
import { getDataList } from 'utils/api/getDataList'
import { postDataList } from 'utils/api/postDataList'
import Modal from 'react-bootstrap/Modal';

import CheckIcon from "assets/modal/check.svg"
import CrossIcon from "assets/modal/cross.svg"

import "./index.scss"
import { useRef } from 'react'
import { useSelector } from 'react-redux'
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
    const itemEls = useRef(new Array())
    const handleClose = () => {
        setShow(false)
        refetch();
        // setTimeout(() => ref.current.focus(), 500)


    };
    const handleCloseCorrect = () => {
        setNotCorrect(false)
        refetch();
        // setTimeout(() => ref.current.focus(), 500)
    };

    const { data: query, status, refetch } = useQuery(["task-info"], () => {
        return getDataList.getTask(params.id)
    }, {
        cacheTime: 0,
    })
    if(!inputValue.length && query && query.data.type !== 'test')
        setInputValue(new Array(query.data.answers_length).fill())

    const mutation = useMutation(answer => {
        return postDataList.checkTask(answer)
    })

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
        if(query.data.type !== 'test')
            setInputValue(new Array(query.data.answers_length).fill())
        else setInputValue([])
    }
    const updateValue = (value, index) => {
        let newValue = JSON.parse(JSON.stringify(inputValue))
        newValue[index] = value
        setInputValue(newValue)
    }
    const updateValueTest = (value, index) => {
        let newValue = JSON.parse(JSON.stringify(inputValue))
        let findIndex = newValue.findIndex(x => x === value + "_" + index)
        if(!!~findIndex)
            newValue.splice(findIndex, 1)
        else newValue.push(value + "_" + index)
        console.log(newValue)
        setInputValue(newValue)
    }
    return (
        <Container className='vh-100 min-vh-100 d-flex flex-column'>
            <Row className="row-sticky">
                <Col>
                    <div className='d-flex py-4'>
                        <img onClick={() => navigate(-1)} style={{ height: "20px" }} src={PurpleCross} alt="" />
                        <h3 className="lecture-title" ></h3>
                    </div>
                </Col>
            </Row>

            <Row className='flex-grow-1'>
                <Col className='d-flex flex-column'>
                    <div>
                        <h5 className="condition" >{query.data.condition}</h5>
                        <div className='text-center mt-4'>
                            {
                                query.data.type === "test"
                                ? query.data.answers.map((x, i) => 
                                    ( <div key={x + "_" + i} onClick={() => updateValueTest(x, i)} className={`answer ${inputValue.find((y) => y === x + "_" + i) ? "active" : ""}`}>
                                        {x}
                                    </div> )
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
                    <Button className='w-100 py-3 mt-auto btn-sticky' disabled={inputValue.some(x => !x) || inputValue.length !== query.data.answers_length} variant="primary" onClick={() => {
                        if (inputValue.length !== 0) {
                            if(itemEls && itemEls.current && itemEls.current.length){
                                itemEls.current.forEach(x => x.value = '')
                            }
                            mutation.mutate({ uid: query.data.task_uid, answer: inputValue.map(x => (x + "").split("_")[0]), attempt: setAttempt(attempt + 1), time }, {
                                onSuccess: (data) => {
                                    if (data.validate) {
                                        closeInter()
                                    } else {
                                        setNotCorrect(true)
                                        setInputValue(new Array(query.data.answers_length).fill())
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
                        <span>{language.no_answer}</span>
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