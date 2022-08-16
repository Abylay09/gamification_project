import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
function CircleProgressBar() {
    return (
        <CircularProgressbarWithChildren  value={66} className="q" styles= {{
            path: {
                stroke: '#00FA37' ,
                strokeLinecap: 'butt',
              },
              trail : {
                stroke : "transparent"
              },
        }}>
            
            <div className='center-circle d-flex align-items-center justify-content-center' >
            <img src={process.env.PUBLIC_URL + "/images/Vector.svg"} alt="" />
                {/* <span>2</span> */}
            </div>
        </CircularProgressbarWithChildren>
    )
}

export default CircleProgressBar