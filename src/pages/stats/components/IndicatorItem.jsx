import React from 'react'

function IndicatorItem({ name, lastName, value, queue  }) {
    return (
        <div className='rate-item d-flex justify-content-between align-items-center'>
            <div className='rate-item__info '>
                <span className='rate-item__number'>{queue}</span>
                <p className=''>
                    <p className='rate-item__name'>{lastName} {name}</p>
                    <p className='rate-item__type'>Одноклассник</p>
                </p>
            </div>
            <div className='rate-item__level'>
                очки : {value ? value : 0}
            </div>
        </div>
    )
}

export default IndicatorItem