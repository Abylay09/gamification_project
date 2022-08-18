import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import "./BottomMenu.scss"
function BottomMenu() {
    return (
        <div className='bottom-menu' style={{ backgroundColor: "#27272F", }}>
            <Container>
                <Row style={{ padding: "24px 12px 40px 12px" }}>
                    <Col xs  style={{ textAlign: "center" }}>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                        <p className='bottom-menu__item-title' >Питомец</p>
                    </Col>
                    <Col xs  style={{ textAlign: "center" }}>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/shop-icon.svg"} alt="" />
                        <p className='bottom-menu__item-title' >Питомец</p>
                    </Col>
                    <Col xs  style={{ textAlign: "center" }}>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/home-icon.svg"} alt="" />
                        <p className='bottom-menu__item-title' >Питомец</p>
                    </Col>
                    <Col xs  style={{ textAlign: "center" }}>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/indicator-icon.svg"} alt="" />
                        <p className='bottom-menu__item-title' >Питомец</p>
                    </Col>
                    <Col xs  style={{ textAlign: "center" }}>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/room-icon.svg"} alt="" />
                        <p className='bottom-menu__item-title' >Питомец</p>
                    </Col>
                </Row>
            </Container>

            {/* <Container >
                <Row>
                    <Col> */}
            {/* <Stack direction="horizontal" className='bottom-menu__items justify-content-between' >
                         */}
            {/* <Stack direction="horizontal" >

                            <div className='bottom-menu__item' >
                                <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                                <p className='bottom-menu__item-title' >Питомец</p>
                            </div>
                            <div className='bottom-menu__item'>
                                <img src={process.env.PUBLIC_URL + "/images/bottom-menu/shop-icon.svg"} alt="" />
                                <p className='bottom-menu__item-title' >Лавка</p>
                            </div>
                            <div className='bottom-menu__item'>
                                <img src={process.env.PUBLIC_URL + "/images/bottom-menu/home-icon.svg"} alt="" />
                                <p className='bottom-menu__item-title' >Домой</p>
                            </div>
                            <div className='bottom-menu__item'>
                                <img src={process.env.PUBLIC_URL + "/images/bottom-menu/indicator-icon.svg"} alt="" />
                                <p className='bottom-menu__item-title'  >Показатели</p>
                            </div>
                            <div className='bottom-menu__item'>
                                <img src={process.env.PUBLIC_URL + "/images/bottom-menu/room-icon.svg"} alt="" />
                                <p className='bottom-menu__item-title' >Комната</p>
                            </div>
                        </Stack>
                    </Col>

                </Row>
            </Container> */}



            {/* <Row className='align-items-center'> 
                <Col style={{ backgroundColor: "#000", padding: "0 11px" }}>
                    <Stack className=''>
                        <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                        <p style={{ fontSize: "11px" }}>Питомец</p>
                    </Stack>
                </Col> */}


            {/* <Col className='jusify-content-center' style={{ backgroundColor: "#000", padding: "0 11px" }}>
                    <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                    <p style={{ fontSize: "11px" }}>Питомец</p>
                </Col>
                <Col style={{ backgroundColor: "#000", padding: "0 11px" }}>
                    <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                    <p style={{ fontSize: "11px" }}>Питомец</p>
                </Col>
                <Col style={{ backgroundColor: "#000", padding: "0 11px" }}>
                    <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                    <p style={{ fontSize: "11px" }}>Питомец</p>
                </Col>
                <Col style={{ backgroundColor: "#000", padding: "0 11px" }}>
                    <img src={process.env.PUBLIC_URL + "/images/bottom-menu/pet-icon.svg"} alt="" />
                    <p style={{ fontSize: "11px" }}>Питомец</p>
                </Col> */}
            {/* </Row> */}
        </div>
    )
}

export default BottomMenu