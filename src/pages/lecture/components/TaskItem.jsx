import React from 'react'
import Health from 'components/price/Health'
import Gold from 'components/price/Gold'
import "./TaskItem.scss"
function TaskItem() {
    return (
        <div>
            <div className='task mb-4' >
                <p className='task__title mb-0' >Признаки делимости на 2, 5, 10, 4 и 25</p>
                <p className='task__number'>Лекция 1</p>

                <div className='d-flex' style = {{gap : "8px"}}>
                    <Health hp={5} />
                    <Gold gold={5} />
                </div>
            </div>
        </div>
    )
}

export default TaskItem