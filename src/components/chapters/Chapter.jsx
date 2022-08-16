import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import ChapterMenu from './stats/ChapterMenu'
import "./Chapter.scss"
import ChapterItem from '../elements/ChapterItem'
import Button from '../elements/Button'
export default function Chapter() {
    return (
        // <Container fluid = {'sm'} className = "main-container">
        <Container >
            <ChapterMenu />
            <Stack gap={5}>
                <ChapterItem title = "Делимость натуральных чисел"/>
                <ChapterItem title = "Признаки делимости на 2, 3, 5, 9, 10"/>
                <ChapterItem title = "Простые и составные числа. Разложение натурального числа на простые множители"/>
                <ChapterItem title = "Наибольший общий делитель и наименьшее общее кратное"/>
            </Stack>
            <Button/>
        </Container>
    )
}
