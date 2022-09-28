import React from 'react'
import "./StatsItem.scss"
function StatsItem() {
  return (
    <div className='rate-item d-flex justify-content-between align-items-center'>
        <div className='rate-item__info '>
            <span className='rate-item__number'>1</span>
            <p className=''>
                <p className='rate-item__name'>Арынов Аян</p>
                <p className='rate-item__type'>Одноклассник</p>
            </p>
        </div>
        <div className='rate-item__level'> 
            4 уровень
        </div>
    </div>
  )
}

export default StatsItem  