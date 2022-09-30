import React from 'react'
import Health from 'components/price/Health'
import Gold from 'components/price/Gold'
import "./TaskItem.scss"
function TaskItem({exp,gold,order}) {
    return (
        <div>
            <div className='task mb-4' >
                <p className='task__title mb-0' >Уровень {order}</p>
                <p className='task__number'></p>

                <div className='d-flex' style = {{gap : "8px"}}>
                    <Health hp={exp} />
                    <Gold gold={gold} />
                </div>
            </div>
        </div>
    )
}

export default TaskItem