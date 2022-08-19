import React from 'react'
import { Container, Stack, Row, Col } from 'react-bootstrap'
import ChapterMenu from './stats/ChapterMenu'
import ChapterItem from '../elements/ChapterItem'
import Button from '../elements/Button'
import BottomMenu from '../elements/BottomMenu'
import ChapterHeader from './ChapterHeader'
import Health from '../elements/awards/Health'
import Gold from '../elements/awards/Gold'
import "./Chapter.scss"
import Trophy from '../elements/awards/Trophy'


export default function Chapter() {
    return (
        // <Container fluid = {'sm'} className = "main-container">
        <Container >
            <Row className='top-menu '>
                <Col>
                    <div className='d-flex align-items-center justify-content-between'>
                        <ChapterMenu />
                    </div>
                </Col>
            </Row>
            {/* Название Главы*/}
            <Row >
                <Col className='mt-2'>

                    <div className='d-flex align-items-center justify-content-between px-2'>
                        <ChapterHeader />
                    </div>
                    <div className='d-flex justify-content-center my-4'>
                        <Trophy title="Рекомендуется" />
                        <Health title="+25 HP"/>
                        <Gold title="+500 GOLD"/>
                    </div>
                </Col>
            </Row>
            {/* Тесты*/}
            <Stack gap={5}>
                <ChapterItem title="Делимость натуральных чисел" />
                <ChapterItem title="Признаки делимости на 2, 3, 5, 9, 10" />
                <ChapterItem title="Простые и составные числа. Разложение натурального числа на простые множители" />
                <ChapterItem title="Наибольший общий делитель и наименьшее общее кратное" />
            </Stack>
            {/* кнопка*/}
            <Row>
                <Col >
                    <Button regularMarginBottom = '150px' text ="Начать"/>
                </Col>
            </Row>
            {/* Нижнее меню */}
            <BottomMenu />
        </Container>
    )
}
