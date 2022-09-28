import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import LectureItem from './components/LectureItem'
import "./index.scss"
import TaskItem from './components/TaskItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import StickyButton from 'components/buttons/StickyButton'
function LecturePage() {
    return (
        // <Container className='min-vh-100'>
        <Container >
            <Row>
                <Col>
                    <div className='d-flex align-items-center py-4'>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >Признаки делимости на 2, 3, 5, 9, 10</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col >
                    <h4 className='section-title my-4' >Лекции</h4>
                    <Stack gap={3}>
                        <LectureItem />

                    </Stack>
                </Col>
            </Row>

            <Row >
                <Col >
                    <h4 className='section-title my-4' >Лекции</h4>
                    <Stack>
                        <TaskItem />
                        <TaskItem />

                        <TaskItem />

                    </Stack>

                    <StickyButton text={"Погнали!"} />

                    {/* <FixedButton text={"Погнали!"} /> */}
                </Col>
            </Row>



        </Container>
    )
}

export default LecturePage