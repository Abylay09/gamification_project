import React from 'react'

function ChapterHeader() {
    return (
        <>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/left-arrow.svg"} alt="" />
            </div>
            <div className='chapter-top'>
                <p className='chapter-subtitle'>Глава 0</p>
                <h4 className='chapter-header'>Введение</h4>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/right-arrow.svg"} alt="" />
            </div>
        </>
    )
}

export default ChapterHeader