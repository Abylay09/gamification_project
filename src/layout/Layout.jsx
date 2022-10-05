import React from 'react'
import { Container, Row, Col, ProgressBar, Stack } from 'react-bootstrap'
import coins from "assets/common/gold-coins.png"
import star from "assets/common/star.png";
import "./Layout.scss"
import BottomMenu from 'components/bottom-menu/BottomMenu';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
function Layout({ children }) {
    const token = localStorage.getItem("token");
    const { data: info, status} = useQuery(["personal-info"], async () => {
        const response = await axios.get("http://195.49.212.191:8779/user/me", {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        const result = await response.data
        return result
    }, {
        cacheTime: 0
    })

    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return <div>Error</div>
    }

    return (
        <Container style={{ position: " relative" }} className="d-flex min-vh-100 flex-column">
            <Row className='d-flex align-items-center g-0 py-3'>
                <Col className='d-flex align-items-center' xs={6} style={{ gap: "16px" }}>
                    <img src={star} alt="" />
                    <span>{info.profile.level}</span>
                    <ProgressBar className='level-progress' now={info.profile.exp} />
                </Col>
                <Col className='d-flex justify-content-end' xs={6}>
                    <div className='d-flex align-items-center' style={{ gap: "16px" }}>
                        <img src={coins} alt="" />
                        <span style={{ fontWeight: '400' }}>{info.profile.gold}</span>
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