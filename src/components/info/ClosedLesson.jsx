import React from 'react';
import ClosedImg from "assets/info/closed-lock.png"
import "./ClosedLesson.scss"
function ClosedLesson() {
    return (
        <div className='closed-item'>
            <div className='closed-img'>
                <img src={ClosedImg} alt="" />
            </div>
            <div className='closed-title'>
                Недоступно
            </div>
            <div className='closed-text'>
                “Глава 2: Рациональные числа” откроется после
                прохождения “Глава 1: Натуральные числа”
            </div>
        </div>
    )
}

export default ClosedLesson