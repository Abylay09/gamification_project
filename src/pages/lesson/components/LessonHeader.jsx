import React from 'react'
import "./LessonHeader.scss"
import LeftArrow from "assets/common/left-arrow.svg"
import RightArrow from "assets/common/right-arrow.svg"
import HealthGold from 'components/price/HealthGold'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LessonHeader({ title, prev, next, order }) {
    const lesson = useSelector(state => state.lessonGroup);
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex align-items-center justify-content-between px-2'>
                {
                    prev
                        ? <div onClick={() => navigate(`/lesson/${prev}`)}>
                            <img src={LeftArrow} alt="" />
                        </div>
                        : <div></div>
                }
                <div className='chapter-top'>
                    <p className='chapter-subtitle'>Глава {order}</p>
                    <h4 className='chapter-header'>{title}</h4>
                </div>
                {
                    next
                        ? <div onClick={() => navigate(`/lesson/${next}`)}>
                            <img src={RightArrow} alt="" />
                        </div>
                        : <div></div>
                }
            </div>
            <div className='d-flex justify-content-center my-4'>
                <HealthGold gold={500} hp={25} />
            </div>

        </>

    )
}

export default LessonHeader