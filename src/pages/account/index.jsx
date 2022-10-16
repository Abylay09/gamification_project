import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Profile from '../profile/components/Profile'
import MusicNote from "assets/common/musical-note.svg"
import "./index.scss"
import Layout from 'layout/Layout'
function AccountPage() {
    return (
        <Layout>
                <Profile />
                <Row>
                    <Col >
                        <div className='account-sound d-flex justify-content-between align-items-center'>
                            <div className='d-flex  align-items-center' style={{ gap: "8px" }}>
                                <img src={MusicNote} alt="" />
                                <span>Звук</span>
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
                        <p className='account-page__title mb-3'>Рейтинг</p>
                    </Col>
                    <Row className='' style={{ gap: "16px" }}>
                        <Col className='account-rating p-3'>
                            <p className='account-rating__title mb-1'>7</p>
                            <span className='account-rating__text'>место в классе</span>
                        </Col>
                        <Col className='account-rating p-3'>
                            <p className='account-rating__title mb-1'>23</p>
                            <span className='account-rating__text'> место в школе</span>
                        </Col>
                    </Row>
                </Row>

                <Row className='justify-content-center my-4'>
                    <Col>
                        <p className='account-page__title mb-3'>Статистика</p>
                    </Col>
                    <Row>
                        <Col xs={12} className="account-rating account-rating--stats p-3 my-3">
                            <p className='account-rating__title mb-1'>Делимость натуральных чисел</p>
                            <span className='account-rating__text'>последняя пройденная тема</span>
                        </Col>
                    </Row>

                    <Row className='' style={{ gap: "16px" }}>
                        <Col className='account-rating account-rating--stats p-3' >
                            <p className='account-rating__title mb-1'>7</p>
                            <span className='account-rating__text'>место в классе</span>
                        </Col>
                        <Col className='account-rating account-rating--stats p-3' >
                            <p className='account-rating__title mb-1'>23</p>
                            <span className='account-rating__text'> место в школе</span>
                        </Col>
                    </Row>
                    <Row className='mt-3' style={{ gap: "16px" }}>
                        <Col className='account-rating account-rating--stats p-3' >
                            <p className='account-rating__title mb-1'>7</p>
                            <span className='account-rating__text'>место в классе</span>
                        </Col>
                        <Col className='account-rating account-rating--stats p-3' >
                            <p className='account-rating__title mb-1'>23</p>
                            <span className='account-rating__text'> место в школе</span>
                        </Col>
                    </Row>
                </Row>


                {/* <Row>
                <Col >
                    <p>Рейтинг</p>
                    <Row className='' style={{gap : "16px"}}>
                        <Col className='account-rating p-3'>
                            <p className='mb-1'>7</p>
                            место в классе
                        </Col>
                        <Col className='account-rating p-3'>
                            <p className='mb-1'>23</p>
                            место в школе
                        </Col>
                    </Row>
                </Col>
            </Row> */}
        </Layout>

    )
}

export default AccountPage