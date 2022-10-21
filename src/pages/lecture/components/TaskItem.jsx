import React from 'react'
import Health from 'components/price/Health'
import Gold from 'components/price/Gold'
import "./TaskItem.scss"
import { useSelector } from 'react-redux'
function TaskItem({ exp, gold, order, hasPlay, uid, onClick }) {
    const language = useSelector(state => state.language.language)
    return (
        <div>
            <div className={`task ${hasPlay ? "" : "not-active"}  mb-4`} onClick={() => onClick()}>
                <p className='task__title mb-0' >{language.level} {order}</p>
                <p className='task__number'></p>
                <div className='d-flex justify-content-between' style={{ width : "140px" }}>
                    <Health hp={exp} />
                    <Gold gold={gold} />
                </div>
            </div>
        </div>
    )
}

export default TaskItem