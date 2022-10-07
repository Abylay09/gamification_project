import React from 'react'
import { Container, Row, Col, Stack } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import 'swiper/css';
import "swiper/css/pagination";
import styles from "./Ticket.module.scss"
import Level from 'components/ticket-reqs/Level';
import Cost from 'components/ticket-reqs/Cost';
import FixedButton from 'components/buttons/fixed-button/FixedButton';

function Ticket() {
    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Col>
                    <div className='page-header d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >Книжный магазин Topar.uz</h3>
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
                            1
                        </SwiperSlide>
                        <SwiperSlide>
                            2
                        </SwiperSlide>
                        <SwiperSlide>
                            3
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

                        <TabPanel className="custom-tab">
                            <div className='d-flex my-3' style={{ gap: "16px" }}>
                                <Level level={1} />
                                <Cost cost={250} />
                            </div>

                            <Stack gap={3}>
                                <p className={styles.ticket__text}>
                                    Регулярное чтение позволяет лучше формулировать собственные мысли.
                                    Благодаря книгам появляется возможность расширить круг общения,
                                    стать интересным собеседником и начать получать удовольствие от взаимодействия с миром.
                                    В нашем магазине ты найдешь книгу на свой вкус и интерес, из разнообразных жанров,
                                    начиная с бестселлеров и классической литературы, заканчивая комиксами и мангой
                                </p>

                                <div className=''>
                                    <p className={styles.ticket__info__title}>Адрес</p>
                                    <p className={styles.ticket__info__desc}>
                                        Мирзо Улугбекский р-н, улица Яхъё Гулямова, 38.
                                        Ориентир: “Посольство Великобритании”
                                    </p>
                                </div>

                                <div>
                                    <p className={styles.ticket__info__title}>График работы</p>
                                    <p className={styles.ticket__info__desc}>
                                        Ежедневно с 10:00 до 20:00
                                    </p>
                                </div>
                            </Stack>



                            <FixedButton text={"Купить"} />
                        </TabPanel>

                        <TabPanel className="custom-tab">
                            <Stack gap={3}>

                                <div className=''>
                                    <p className={styles.ticket__info__title}>Адрес</p>
                                    <p className={styles.ticket__info__desc}>
                                        Мирзо Улугбекский р-н, улица Яхъё Гулямова, 38.
                                        Ориентир: “Посольство Великобритании”
                                    </p>
                                </div>

                                <div>
                                    <p className={styles.ticket__info__title}>График работы</p>
                                    <p className={styles.ticket__info__desc}>
                                        Ежедневно с 10:00 до 20:00
                                    </p>
                                </div>
                            </Stack>
                        </TabPanel>
                    </Tabs>
                </Col>

            </Row>

        </Container>
    )
}

export default Ticket