import React from 'react'
import Health from 'components/price/Health'
import Gold from 'components/price/Gold'
import "./TaskItem.scss"
function TaskItem({ exp, gold, order, hasPlay, uid, onClick }) {
    return (
        <div>
            <div className={`task ${hasPlay ? "" : "not-active"}  mb-4`} onClick={() => onClick()}>
                <p className='task__title mb-0' >Уровень {order}</p>
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