import Health from 'components/price/Health'
import React from 'react'
import "./LectureItem.scss"
function LectureItem({title, goToLecture}) {
    return (
        <>
            <div className='lesson mb-4' onClick={goToLecture}>
                <p className='lesson__title mb-0' >{title}</p>
                <p className='lesson__number'>Лекция 1</p>
                <Health hp={5} />
            </div>
        </>
    )
}

export default LectureItem