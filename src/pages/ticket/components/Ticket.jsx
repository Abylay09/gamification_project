import React from 'react'
import { Container, Row, Col, Stack } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { useNavigate, useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import Level from 'components/ticket-reqs/Level';
import Cost from 'components/ticket-reqs/Cost';
import FixedButton from 'components/buttons/fixed-button/FixedButton';
import Library from "assets/tickets/library.png"
import { useQuery } from '@tanstack/react-query'
import { coupons } from 'utils/api/getCoupons';
import 'swiper/css';
import "swiper/css/pagination";
import "./Ticket.scss"
// import styles from "./Ticket.module.scss"
function Ticket() {
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
        <Container>
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
                            <Tab>Описание</Tab>
                            <Tab>Условия</Tab>
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
                                    <p className="ticket__info__title ">Адрес</p>
                                    <p className="ticket__info__desc">
                                        {coupon.offer.address}
                                    </p>
                                </div>

                                <div>
                                    <p className="ticket__info__title ">График работы</p>
                                    <p className="ticket__info__desc">
                                        {coupon.offer.grafic}
                                    </p>
                                </div>
                            </Stack>



                            <FixedButton text={"Купить"} />
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
                                {/* <div className=''>
                                    <p className="ticket__info__title ">Размер скидки</p>
                                    <p className="ticket__info__desc">
                                        При первой покупке 5% <br />
                                        При второй покупке 10% <br />
                                        При третьей и последующих покупках 15%
                                    </p>
                                </div>

                                <div>
                                    <p className="ticket__info__title ">Стоимость без скидки</p>
                                    <p className="ticket__info__desc">
                                        Стоимость книг: от 40 000 сум до 400 000 сум
                                    </p>
                                </div>

                                <div className=''>
                                    <p className="ticket__info__title ">Срок годности активного купона</p>
                                    <p className="ticket__info__desc">
                                        При первой покупке 5% <br />
                                        При второй покупке 10% <br />
                                        При третьей и последующих покупках 15%
                                    </p>
                                </div>
                                <div className=''>
                                    <p className="ticket__info__title ">Условия пользования</p>
                                    <p className="ticket__info__desc">
                                        1 приобретенный купон можно использовать только на 1 покупку. Данный купон, могут использовать до 7 чел.
                                    </p>
                                </div>
                                <div className=''>
                                    <p className="ticket__info__title ">Контактные данные </p>
                                    <p className="ticket__info__desc">
                                        Номер телефона: +998 97 409 35 34 <br />
                                        Instagram: topar.uz <br />
                                        Сайт: www.topar.uz
                                    </p>
                                </div> */}
                                <FixedButton text={"Купить"} />

                            </Stack>
                        </TabPanel>
                    </Tabs>
                </Col>

            </Row>

        </Container>
    )
}

export default Ticket