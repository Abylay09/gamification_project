import Health from 'components/price/Health'
import React from 'react'
import "./LectureItem.scss"
import { useSelector } from 'react-redux'
function LectureItem({title, goToLecture}) {
    const language = useSelector(state => state.language.language)
    return (
        <>
            <div className='lesson mb-4' onClick={goToLecture}>
                <p className='lesson__title mb-0' >{title}</p>
                <p className='lesson__number'>{language.lecture} 1</p>
                <Health hp={5} />
            </div>
        </>
    )
}

export default LectureItem