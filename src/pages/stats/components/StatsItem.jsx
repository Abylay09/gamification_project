import React from 'react'
import "./StatsItem.scss"
function StatsItem({ name, lastName, level, queue }) {
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
        {level} уровень
      </div>
    </div>
  )
}

export default StatsItem  