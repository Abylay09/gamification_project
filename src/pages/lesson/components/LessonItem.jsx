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

function LessonItem({uid,title,order,selectLesson, hasPlay, startLesson}) {
    const progress = hasPlay ? 80 : 0;
    return (
        <div onClick = {hasPlay ? startLesson : ""} className={`lesson-item ${hasPlay ? "" : "not-active"} d-flex justify-content-between align-items-center p-3`} >
            <div>
                <p className='lesson-item__title'>{title}</p>
                <HealthGold gold={150} hp={100} />
            </div>

            <div className='chapter-item__progress'>
                <CircularProgressbarWithChildren value={progress} className="q" styles={progressStyle}>
                    <div className='center-circle d-flex align-items-center justify-content-center' >
                        {progress >= 100 ?
                            <img src={check} alt="" /> :
                            <span className='center-circle__number'>{order}</span>}
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default LessonItem