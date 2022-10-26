import React from 'react'

import { useSelector } from 'react-redux'
function IndicatorItem({ name, lastName, value, queue  }) {
    const language = useSelector(state => state.language.language)
    return (
        <div className='rate-item d-flex justify-content-between align-items-center'>
            <div className='rate-item__info '>
                <span className='rate-item__number'>{queue}</span>
                <p className=''>
                    <p className='rate-item__name'>{lastName} {name}</p>
                    <p className='rate-item__type'>{language.classmate}</p>
                </p>
            </div>
            <div className='rate-item__level'>
                {language.game_score} : {value ? value : 0}
            </div>
        </div>
    )
}

export default IndicatorItem