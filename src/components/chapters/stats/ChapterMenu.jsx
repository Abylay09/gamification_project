import React from 'react'
import { Row, Col } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ChapterMenu.scss';

function ChapterMenu() {
    return (
        <>  
            <div className=' d-flex align-items-center '>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/bonbon-star.png"} alt="" />
                    <span className='star-block__number'>1</span>
                </div>
                <Col>
                    <ProgressBar className='level-block' now={50} />
                </Col>
            </div>
            <div className="coin-block d-flex">
                <img
                    src={process.env.PUBLIC_URL + "/images/bonbon-stack-of-gold-coins.png"}
                    alt=""
                    className='coin-img' />
                <span className='coin-number'>500</span>
            </div>
        </>
    )
}

export default ChapterMenu