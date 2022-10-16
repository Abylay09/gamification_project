import React from 'react'
import Star from "assets/common/star.png"
function Level({ level }) {
  return (
    <div className='d-flex align-items-center px-2 py-1' style={{gap : "8px", border : "2px solid #00BED1", borderRadius  :"8px"}}>
      <img src={Star} alt="" style={{width : "20px", height : "19px"}}/>
      <span style={{fontSize : "17px", color : "#00BED1", fontWeight : "600"}}>{level}</span>
    </div>
  )
}

export default Level