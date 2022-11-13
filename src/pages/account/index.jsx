import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form } from 'react-bootstrap'
import Layout from 'layout/Layout'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { User } from 'utils/api/User'
import Profile from '../profile/components/Profile'
import MusicNote from "assets/common/musical-note.svg"
import { useSelector } from 'react-redux'
import "./index.scss"
import Loading from 'components/loading/Loading';
import { inputHelper } from 'utils/InputHelper';
function AccountPage() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const queryClient = useQueryClient()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const language = useSelector(state => state.language.language);

    const onSubmit = (event) => {
        event.preventDefault();
        mutation.mutate({ first_name: name, last_name: surname, email: email }, {
            onSuccess(data) {
                console.log("success");
                queryClient.invalidateQueries(['personal-info'])
                setName("");
                setSurname("");
                setEmail("");
                handleClose();
            },
            onError() {
                console.log("error");
            }
        })
    }

    const mutation = useMutation((info) => {
        return User.changeUserInfo(info)
    })
    const { data: userInfo, isError, isLoading, isFetching } = useQuery(["personal-info"], () => {
        return User.getMyInfo()
    })

    
    if (isLoading) {
        return <Loading/>
    }

    else if (isError) {
        return <div>Error</div>
    }
    return (
        <Layout>
            <Profile name={userInfo.profile.first_name}
                surname={userInfo.profile.last_name}
                school={userInfo.profile.school}
                grade={userInfo.profile.class}
                func={() => handleShow()} />

            <Row>
                <Col >
                    <div className='account-sound d-flex justify-content-between align-items-center'>
                        <div className='d-flex  align-items-center' style={{ gap: "8px" }}>
                            <img src={MusicNote} alt="" />
                            <span>{language.sound}</span>
                        </div>
                        <Form.Check
                            className='my-switch'
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center my-4'>
                <Col>
                    <p className='account-page__title mb-3'>{language.rating}</p>
                </Col>
                <Row className='' style={{ gap: "16px" }}>
                    <Col className='account-rating p-3'>
                        <p className='account-rating__title mb-1'>{userInfo.profile.class_rating}</p>
                        <span className='account-rating__text'>{language.class_pos}</span>
                    </Col>
                    <Col className='account-rating p-3'>
                        <p className='account-rating__title mb-1'>{userInfo.profile.school_rating}</p>
                        <span className='account-rating__text'> {language.school_pos}</span>
                    </Col>
                </Row>
            </Row>

            <Row className='justify-content-center my-4'>
                <Col>
                    <p className='account-page__title mb-3'>{language.stats}</p>
                </Col>
                <Row>
                    <Col xs={12} className="account-rating account-rating--stats p-3 my-3">
                        <p className='account-rating__title mb-1'>{userInfo.profile.lesson}</p>
                        <span className='account-rating__text'>{language.last_theme}</span>
                    </Col>
                </Row>

                <Row className='' style={{ gap: "16px" }}>
                    <Col className='account-rating account-rating--stats p-3' >
                        <p className='account-rating__title mb-1'>{userInfo.profile.tasks}</p>
                        <span className='account-rating__text'>{language.complete_tasks}</span>
                    </Col>
                    <Col className='account-rating account-rating--stats p-3' >
                        <p className='account-rating__title mb-1'>{userInfo.profile.indicators}</p>
                        <span className='account-rating__text'>{language.complete_indicators}</span>
                    </Col>
                </Row>
                {/* <Row className='mt-3' style={{ gap: "16px" }}>
                    <Col className='account-rating account-rating--stats p-3' >
                        <p className='account-rating__title mb-1'>7</p>
                        <span className='account-rating__text'>место в классе</span>
                    </Col>
                    <Col className='account-rating account-rating--stats p-3' >
                        <p className='account-rating__title mb-1'>23</p>
                        <span className='account-rating__text'> место в школе</span>
                    </Col>
                </Row> */}
            </Row>

            <Modal  backdrop="static" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{language.profile}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmit} className = "px-1 ">
                        {/* <p className='mb-1'>{language.phone}</p>
                        <input className='w-100 px-2 mb-3' type="text" disabled={true} placeholder={userInfo.profile.phone} /> */}
                        <p className='mb-1  mt-2'>{language.first_name}</p>
                        <input className='w-100 px-2 mb-3 qw' type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            placeholder={userInfo.profile.first_name} />
                        <p className='mb-1  mt-2'>{language.last_name}</p>
                        <input className='w-100 px-2 mb-3'
                            onChange={e => setSurname(e.target.value)}
                            value={surname}
                            type="text" placeholder={userInfo.profile.last_name} />
                        {/* <p className='mb-1 mt-1'>E-mail</p>
                        <input className='w-100 px-2 mt-1'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="text" placeholder={userInfo.profile.email} /> */}

                        {/* <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button> */}
                        <div className='text-center pt-3'>
                            <Button variant="primary" className="px-4" type='submit'>
                                {language.save}
                            </Button>
                        </div>


                    </form>
                </Modal.Body>

            </Modal>

        </Layout>

    )
}

export default AccountPage