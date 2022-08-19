import React from 'react'
import Health from './awards/Health'
import Gold from './awards/Gold'
import 'react-circular-progressbar/dist/styles.css';
import "./ChapterItem.scss"
import CircleProgressBar from './CircleProgressBar';
import {Link} from "react-router-dom"
function ChapterItem(props) {
    return (
        // <Stack gap={5}>
            <div className="chapter-item  d-flex align-items-center justify-content-between">
                <div className='chapter-item__text'>
                    <p className="chapter-item__title">{props.title}</p>
                    <div className="chapter-item__awards">
                        <Health title="+25 HP"/>
                        <Gold title="+150 GOLD"/>
                    </div>
                </div>
                <div className="chapter-item__progress" >
                    <CircleProgressBar />
                </div>
            </div>
        // </Stack>
    )
}

export default ChapterItem