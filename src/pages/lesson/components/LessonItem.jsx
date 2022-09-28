import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import HealthGold from 'components/price/HealthGold'
import check from "assets/common/check.svg"
import "./LessonItem.scss"

const progressStyle = {
    path: {
        stroke: '#00FA37',
        strokeLinecap: 'butt',
    },
    trail: {
        stroke: "transparent"
    },
}

function LessonItem() {
    const progress =80;
    return (
        <div className='lesson-item d-flex justify-content-between align-items-center p-3'>
            <div>
                <p className='lesson-item__title'>Делимость натуральных чисел</p>
                <HealthGold gold={150} hp={20} />
            </div>

            <div className='chapter-item__progress'>
                <CircularProgressbarWithChildren value={progress} className="q" styles={progressStyle}>
                    <div className='center-circle d-flex align-items-center justify-content-center' >
                        {progress >= 100 ?
                            <img src={check} alt="" /> :
                            <span className='center-circle__number'>2</span>}
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default LessonItem