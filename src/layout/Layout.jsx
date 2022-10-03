import React from 'react'
import { Container, Row, Col, ProgressBar, Stack } from 'react-bootstrap'
import coins from "assets/common/gold-coins.png"
import star from "assets/common/star.png";
import "./Layout.scss"
import BottomMenu from 'components/bottom-menu/BottomMenu';
function Layout({ children }) {
    return (
        <Container style={{ position: " relative" }} className="d-flex min-vh-100 flex-column">
            <Row className='d-flex align-items-center g-0 py-3'>
                <Col className='d-flex align-items-center' xs={6} style={{ gap: "16px" }}>
                    <img src={star} alt="" />
                    <span>1</span>
                    <ProgressBar className='level-progress' now={60} />
                </Col>
                <Col className='d-flex justify-content-end' xs={6}>
                    <div className='d-flex align-items-center' style={{ gap: "16px" }}>
                        <img src={coins} alt="" />
                        <span style={{fontWeight : '400'}}>500</span>
                    </div>
                </Col>
            </Row>

            <Row className="d-flex justify-content-start" style={{ flex: "1" }}>
                <Col>
                    {children}
                </Col>
            </Row>
            <BottomMenu />

        </Container>
    )
}

export default Layout 