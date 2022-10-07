import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import PurpleCross from "assets/common/purple-cross.png"
import { useMutation, useQuery } from '@tanstack/react-query'
import { getDataList } from 'utils/api/getDataList'
import { postDataList } from 'utils/api/postDataList'

import "./index.scss"
function TaskPage() {
    const params = useParams()
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();

    const { data: query, status } = useQuery(["task-info"], () => {
        return getDataList.getTask(params.id)
    }, {
        cacheTime: 0
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
                        <h5 className="condition">{query.data.condition}</h5>
                        <div className='text-center mt-4'>
                            <input onChange={e => setInputValue(e.target.value)} className='condition-input' type="text" placeholder='Ответ' />
                        </div>
                    </div>

                    <Button className='w-100 py-3 mt-auto' style = {{marginBottom : "64px"}} variant="primary" onClick={() => {
                        mutation.mutate({ uid: query.data.task_uid, answer: inputValue }, {
                            onSuccess: (data) => {
                                data.validate ? alert("Правильный ответ") : alert("Неправильный ответ")
                            }
                        })
                    }}>Проверить</Button>
                </Col>
            </Row>

        </Container>
    )
}

export default TaskPage