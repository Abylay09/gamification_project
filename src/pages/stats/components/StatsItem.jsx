import React from 'react'
import "./StatsItem.scss"
import { useSelector } from 'react-redux'
function StatsItem({ name, lastName, level, queue }) {
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
        {level} {language.level}
      </div>
    </div>
  )
}

export default StatsItem  