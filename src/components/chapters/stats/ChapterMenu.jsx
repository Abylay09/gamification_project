import React from 'react'
import { Row, Col } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ChapterMenu.scss';

function ChapterMenu() {
    return (
        <Row className='top-menu d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center test'>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/bonbon-star.png"} alt="" />
                    <span className='star-block__number'>1</span>
                </div>
                <Col>
                    <ProgressBar now={50} />
                </Col>
            </div>
            <div className="coin-block">
                <img
                    src={process.env.PUBLIC_URL + "/images/bonbon-stack-of-gold-coins.png"}
                    alt=""
                    className='coin-img' />
                <span className='coin-number'>500</span>
            </div>
        </Row>
        // <Row className='align-items-center'>
        //     <Col className='star-block d-flex align-items-center' >
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/bonbon-star.png"} alt="" />
        //             <span  className='star-block__number'>1</span>
        //         </div>
        // <Col class="col">
        //     <ProgressBar now={50} />
        // </Col>
        //     </Col>
        //     <Col className='d-flex align-items-right'>
        //         <img
        //             src={process.env.PUBLIC_URL + "/images/bonbon-stack-of-gold-coins.png"}
        //             alt=""
        //             className='coin-img' />
        //         <span className='coin-number'>500</span>
        //     </Col>
        // </Row>
    )
}

export default ChapterMenu