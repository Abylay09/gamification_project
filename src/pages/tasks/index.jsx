import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import PurpleCross from "assets/common/purple-cross.png"
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import "./index.scss"
import { useEffect } from 'react'
function TaskPage() {
    const params = useParams()
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const { data: query, status } = useQuery(["task-info"], async () => {
        const response = await axios.get("http://195.49.212.191:8779/lessons/task", {
            params: {
                uid: params.id
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.data;
        return result;
    }, {
        cacheTime: 0
    })

    const mutation = useMutation(answer => {
        return axios.post("http://195.49.212.191:8779/lessons/check-task", answer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    })



    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return < div > Error</ div>
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img onClick={() => navigate("/lecture/89ee46c4-842e-4615-abac-ae60086b80d6")} style={{ height: "20px" }} src={PurpleCross} alt="" />
                        <h3 className="lecture-title" ></h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className='mt-5'>
                    <h5 className="condition">{query.data.condition}</h5>
                </Col>
            </Row>

            <Row>
                <Col className='text-center mt-4'>
                    <input onChange={e => setInputValue(e.target.value)} className='condition-input' type="text" placeholder='Ответ' />
                </Col>
            </Row>

            <Row>
                <Col className='text-center mt-4'>
                    <Button className='w-100 py-3' variant="primary" onClick={() => {
                        mutation.mutate({ uid: query.data.task_uid, answer: inputValue }, {
                            onSuccess: (data) => {
                                data.data.validate ? alert("Правильный ответ") : alert("Неправильный ответ")
                            }
                        })
                    }}>Проверить</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskPage