import Health from 'components/price/Health'
import React from 'react'
import "./LectureItem.scss"
function LectureItem() {
    return (
        <div>
            <div className='lesson mb-4' >
                <p className='lesson__title mb-0' >Признаки делимости на 2, 5, 10, 4 и 25</p>
                <p className='lesson__number'>Лекция 1</p>
                <Health hp={5} />
            </div>
        </div>
    )
}

export default LectureItem