import React, { useState } from 'react'
import { Container, Row, Col, Stack } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { useNavigate, useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@tanstack/react-query'
import { coupons } from 'utils/api/getCoupons';
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import Level from 'components/ticket-reqs/Level';
import Cost from 'components/ticket-reqs/Cost';
import FixedButton from 'components/buttons/fixed-button/FixedButton';
import Library from "assets/tickets/library.png"
import SuccessBuyModal from 'components/modals/purchase-modal/SuccessBuyModal';
import 'swiper/css';
import "swiper/css/pagination";
import "./Ticket.scss"
import BuyModal from 'components/modals/purchase-modal/BuyModal';
import { useSelector } from 'react-redux'
// import styles from "./Ticket.module.scss"
function Ticket() {
    const language = useSelector(state => state.language.language)
    const [show, setShow] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const navigate = useNavigate();
    const params = useParams()
    const { data: coupon, isError, isLoading } = useQuery(["getCouponinfo"], () => {
        return coupons.getInfo(params.id)
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    else if (isError) {
        return <div>Error</div>
    }
    return (
        <Container style={{ overflowX: "hidden" }}>
            <Row>
                <Col>
                    <div className='page-header d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >{coupon.offer.merchant_title}</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Swiper
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="my-swiper">
                        <SwiperSlide>
                            <img src={Library} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Library} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Library} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Tabs className="custom-tabs">
                        <TabList>
                            <Tab>{language.about}</Tab>
                            <Tab>{language.terms}</Tab>
                        </TabList>

                        <TabPanel className="custom-tab my-3">
                            <div className='d-flex mb-3' style={{ gap: "16px" }}>
                                <Level level={1} />
                                <Cost cost={250} />
                            </div>

                            <Stack gap={3}>
                                <p className="ticket__text">
                                    {coupon.offer.description}
                                </p>

                                <div className=''>
                                    <p className="ticket__info__title ">{language.address}</p>
                                    <p className="ticket__info__desc">
                                        {coupon.offer.address}
                                    </p>
                                </div>

                                <div>
                                    <p className="ticket__info__title ">{language.grafic}</p>
                                    <p className="ticket__info__desc">
                                        {coupon.offer.grafic}
                                    </p>
                                </div>
                            </Stack>

                            <FixedButton text={language.buy} onClick={() => setShow(!show)} />

                        </TabPanel>

                        <TabPanel className="custom-tab my-3">
                            <Stack gap={3}>
                                {
                                    coupon.offer.conditionals.map((item => {
                                        return (
                                            <div>
                                                <p className="ticket__info__title ">{item.title}</p>
                                                {item.conditionals.map(condition => <p className="ticket__info__desc"> {condition}</p>)}

                                            </div>
                                        )
                                    }))
                                }
                                <FixedButton text={language.buy} onClick={() => setShow(!show)} />

                            </Stack>
                        </TabPanel>
                    </Tabs>
                    <BuyModal uid={coupon.offer.uid} cost={coupon.offer.price}
                        show={show}
                        close={() => setShow(!show)}
                        showSuccess={() => setShowSuccess(true)}
                    />
                    <SuccessBuyModal success={showSuccess} close={() => setShowSuccess(!setShow)} />
                </Col>
            </Row>



        </Container>
    )
}

export default Ticket