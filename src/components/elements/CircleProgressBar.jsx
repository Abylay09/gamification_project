import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
function CircleProgressBar() {
    const progress = 50;
    return (
        <CircularProgressbarWithChildren  value={progress} className="q" styles= {{
            path: {
                stroke: '#00FA37' ,
                strokeLinecap: 'butt',
              },
              trail : {
                stroke : "transparent"
              },
        }}>
            
            <div className='center-circle d-flex align-items-center justify-content-center' >
            {progress >= 100 ? 
            <img src={process.env.PUBLIC_URL + "/images/Vector.svg"} alt="" /> : 
            <span className='center-circle__number'>2</span>}
                {/* <span>2</span> */}
            </div>
        </CircularProgressbarWithChildren>
    )
}

export default CircleProgressBar