import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PurpleCross from "assets/common/purple-cross.png"
import Nasledniki from "assets/tickets/Nasledniki.png"
import { useQuery } from '@tanstack/react-query'
import { coupons } from 'utils/api/getCoupons';
import 'react-tabs/style/react-tabs.css';
import "./index.scss"
import CouponInfo from 'components/info/CouponInfo';
import { useNavigate } from 'react-router-dom';
function TicketPage() {
    const navigate = useNavigate()
    const { data: coupon, isError, isLoading } = useQuery(["getMyCoupons"], () => {
        return coupons.getMyCoupons()
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    else if (isError) {
        return <div>Error</div>
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img style={{ height: "20px" }} src={PurpleCross} alt="" />
                        <h3 className="lecture-title">Мои купоны</h3>
                    </div>
                </Col>
            </Row>
            <Tabs>
                <TabList>
                    <Tab>Активные</Tab>
                    <Tab>Завершенные</Tab>
                </TabList>

                <TabPanel>
                    <Stack>
                        {coupon.offers.map(item => {
                            console.log(item.merchant_store_uid);
                            return (
                                <Card className='coupon-ticket' style={{marginBottom : "20px"}} onClick = {() => navigate(`/ticket/${item.merchant_store_uid}`)} >
                                    <Card.Img style={{ height: "160px" }} variant="top" src={item.images[0]} alt="" />
                                    <Card.Body className='coupon-body'>
                                        <Card.Title className='coupon-title'>{item.title}</Card.Title>
                                        <Card.Text className='coupon-text'>
                                            {item.address}
                                        </Card.Text>
                                        <Card.Subtitle className='coupon-subtitle'>
                                            {item.date}
                                        </Card.Subtitle>
                                    </Card.Body>
                                    <div className='coupon-circle'>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                        <span className='coupon-circle__item'></span>
                                    </div>
                                </Card>
                            )

                        })}
                        {/* <Card className='coupon-ticket'>
                            <Card.Img style={{ height: "160px" }} variant="top" src={Nasledniki} alt="" />
                            <Card.Body className='coupon-body'>
                                <Card.Title className='coupon-title'>Детский парк развлечений Nasledniki</Card.Title>
                                <Card.Text className='coupon-text'>
                                    г. Алматы, ул. Наурызбай батыра, 7Б,
                                    ТЦ Атриум
                                </Card.Text>
                                <Card.Subtitle className='coupon-subtitle'>
                                    Использовать до 09.11.2022
                                </Card.Subtitle>
                            </Card.Body>
                            <div className='coupon-circle'>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                                <span className='coupon-circle__item'></span>
                            </div>
                        </Card> */}
                    </Stack>
                </TabPanel>
                <TabPanel style={{ position: "relative" }}>
                    <CouponInfo />
                </TabPanel>
            </Tabs>

        </Container>

    )
}

export default TicketPage