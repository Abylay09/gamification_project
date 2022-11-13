import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PurpleCross from "assets/common/purple-cross.png"
import { useQueries, useQuery } from '@tanstack/react-query'
import { coupons } from 'utils/api/getCoupons';
import 'react-tabs/style/react-tabs.css';
import "./index.scss"
import CouponInfo from 'components/info/CouponInfo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import QRCode from "react-qr-code";
function TicketPage() {
    const language = useSelector(state => state.language.language)
    const navigate = useNavigate()
    const [myCoupons, myFinishedCoupons] = useQueries({
        queries: [
            { queryKey: ['getMyCoupons'], queryFn: () => coupons.getMyCoupons(), staleTime: Infinity },
            { queryKey: ['getMyFinishedCoupons'], queryFn: () => coupons.getMyFinishedCoupons(), staleTime: Infinity }
        ]
    },)
    // const { data: coupon, isError, isLoading } = useQuery(["getMyCoupons"], () => {
    //     return coupons.getMyCoupons()
    // })

    // if (isLoading) {
    //     return <div>Loading</div>
    // }


    // else if (isError) {
    //     return <div>Error</div>
    // }

    // if (myCoupons.isFetching) {
    //     return <Loading />
    // }
    if (myCoupons.isLoading) {
        return <div>Loading</div>
    }
    if (myFinishedCoupons.isLoading) {
        return <div>Loading</div>
    }
    else if (myCoupons.isError) {
        return <div>Error</div>
    }
    else if (myFinishedCoupons.isError) {
        return <div>Error</div>
    }


    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex py-4'>
                        <img style={{ height: "20px" }} src={PurpleCross} alt="" onClick={() => navigate(-1)} />
                        <h3 className="lecture-title">{language.my_coupons}</h3>
                    </div>
                </Col>
            </Row>
            <Tabs>
                <TabList>
                    <Tab>{language.coupns_activity}</Tab>
                    <Tab>{language.coupns_ended}</Tab>
                </TabList>

                <TabPanel>
                    <Stack>
                        {myCoupons.data.offers ? myCoupons.data.offers.map(item => {
                            return (
                                <Card className='coupon-ticket' style={{ marginBottom: "20px" }} onClick={() => navigate(`/ticket/${item.merchant_store_uid}`)} >
                                    <Card.Img style={{ height: "160px" }} variant="top" src={item.images[0]} alt="" />
                                    <Card.Body className='coupon-body'>
                                        <Card.Title className='coupon-title'>{item.title}</Card.Title>
                                        <Card.Text className='coupon-text'>
                                            {item.address}
                                        </Card.Text>
                                        <Card.Subtitle className='coupon-subtitle'>
                                            {item.date.slice(0, 19).replace('T', ' ').split("   ")}
                                        </Card.Subtitle>
                                        {item.merchant_type === "openskill_qr" ?
                                            (
                                                <div style={{ dispay: "flex", justifyContent: "center", alignItems: "center", padding: "1rem 0" }}>
                                                    <QRCode
                                                        value={item.uid}
                                                        style={{ height: "auto" }}
                                                    />
                                                </div>
                                            )
                                            : ""
                                        }
                                    </Card.Body>
                                    <div className='coupon-circle'>
                                        {
                                            new Array(13).fill("").map((item) => <span className='coupon-circle__item'></span>)
                                        }
                                    </div>
                                </Card>
                            )
                        }) : <CouponInfo />}
                    </Stack>
                </TabPanel>
                <TabPanel style={{ position: "relative" }}>
                    {myFinishedCoupons.data.offers ? myFinishedCoupons.data.offers.map(item => {
                        return (
                            <Card className='coupon-ticket' style={{ marginBottom: "20px" }} onClick={() => navigate(`/ticket/${item.merchant_store_uid}`)} >
                                <Card.Img style={{ height: "160px" }} variant="top" src={item.images[0]} alt="" />
                                <Card.Body className='coupon-body'>
                                    <Card.Title className='coupon-title'>{item.title}</Card.Title>
                                    <Card.Text className='coupon-text'>
                                        {item.address}
                                    </Card.Text>
                                    <Card.Subtitle className='coupon-subtitle'>
                                        {item.date.slice(0, 19).replace('T', ' ').split("   ")}
                                    </Card.Subtitle>
                                    {item.merchant_type === "openskill_qr" ?
                                        (
                                            <div style={{ dispay: "flex", justifyContent: "center", alignItems: "center", padding: "1rem 0" }}>
                                                <QRCode
                                                    value={item.uid}
                                                    style={{ height: "auto" }}
                                                />
                                            </div>
                                        )
                                        : ""
                                    }
                                </Card.Body>
                                <div className='coupon-circle'>
                                    {
                                        new Array(13).fill("").map((item) => <span className='coupon-circle__item'></span>)
                                    }
                                </div>
                            </Card>
                        )
                    }) : <CouponInfo />}
                    {/* <CouponInfo /> */}
                </TabPanel>
            </Tabs>

        </Container>

    )
}

export default TicketPage