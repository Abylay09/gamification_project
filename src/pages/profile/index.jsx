import Indicator from 'pages/pet/components/Indicator'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from './components/Profile'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
    const navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >Профиль</h3>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Profile />
                </Col>
            </Row>


            <Row>
                <Col>
                    <h6 style={{ marginBottom: "-50px" }}>Индикаторы</h6>
                    <Indicator />
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage