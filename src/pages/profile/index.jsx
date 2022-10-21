import Indicator from 'pages/pet/components/Indicator'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from './components/Profile'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProfilePage() {
    const language = useSelector(state => state.language.language)
    const navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col>
                    <div className='page-header d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >{language.profile}</h3>
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
                    <h6 style={{ marginBottom: "-50px" }}>{language.inditaros}</h6>
                    <Indicator />
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage