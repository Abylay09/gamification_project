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
function TaskPage() {
    const [inputValue, setInputValue] = useState("")
    const [show, setShow] = useState(false);
    const [notCorrect, setNotCorrect] = useState(false)
    const navigate = useNavigate();
    const params = useParams()

    const handleClose = () => {
        setShow(false)
        refetch();
    };
    const handleCloseCorrect = () => {
        setNotCorrect(false)
        refetch();
    };

    const { data: query, status, refetch } = useQuery(["task-info"], () => {
        return getDataList.getTask(params.id)
    }, {
        cacheTime: 0,

    })

    const mutation = useMutation(answer => {
        return postDataList.checkTask(answer)
    })

    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return < div > Error</ div>
    }
    return (
        <Container className='vh-100 min-vh-100 d-flex flex-column'>
            <Row>
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
                            <input onChange={e => setInputValue(e.target.value)} className='condition-input' type="text" placeholder='Ответ' />
                            {inputValue.length <= 0 ? <p>Введите ответ</p> : ""}
                        </div>
                    </div>

                    <Button className='w-100 py-3 mt-auto' style={{ marginBottom: "64px" }} variant="primary" onClick={() => {
                        if (inputValue.length !== 0) {
                            mutation.mutate({ uid: query.data.task_uid, answer: inputValue }, {
                                onSuccess: (data) => {
                                    console.log(data);
                                    if (data.validate) {
                                        setShow(true)
                                    } else {
                                        setNotCorrect(true)
                                    }
                                }
                            })
                        }else{
                            console.log(false);
                        }
                    }}>Проверить</Button>
                </Col>
            </Row>

            <Modal dialogClassName='custom-modal' contentClassName="custom-content" show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='custom-success'>
                        <span>Молодец!</span>
                        <div className='custom-success__img'><img src={CheckIcon} alt="" /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix="custom-footer">
                    <Button className='w-100 py-3 mt-auto' style={{ marginBottom: "64px", backgroundColor: "#19E439" }} onClick={handleClose}>
                        Продолжить</Button>
                </Modal.Footer>
            </Modal>

            <Modal dialogClassName='custom-modal' contentClassName="custom-content" show={notCorrect} onHide={handleCloseCorrect}>
                <Modal.Body>
                    <div className='custom-success'>
                        <span>Тут должен быть ответ</span>
                        <div className='custom-success__img custom-success__img--not-correct'><img src={CrossIcon} alt="" /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix="custom-footer">
                    <Button className='w-100 py-3 mt-auto' style={{ marginBottom: "64px", backgroundColor: "#EB2E72" }} onClick={handleCloseCorrect}>
                        Продолжить</Button>
                </Modal.Footer>
            </Modal>
        </Container>


    )
}

export default TaskPage