import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ChapterMenu from './stats/ChapterMenu'
import "./Chapter.scss"
import ChapterItem from '../elements/ChapterItem'
export default function Chapter() {
    return (
        // <Container fluid = {'sm'} className = "main-container">
        <Container >
            <ChapterMenu/>
            <ChapterItem/>
        </Container>
    )
}
