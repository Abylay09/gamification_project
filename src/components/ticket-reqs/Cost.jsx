import React from 'react'
import Coin from "assets/tickets/coin.png"
function Cost({ cost }) {
    return (
        <div className='d-flex align-items-center px-2 py-1' style={{gap : "8px", border : "2px solid #FFC10C", borderRadius  :"8px"}}>
            <img src={Coin} alt="" style={{width : "20px", height : "19px"}}/>
            <span style={{fontSize : "17px", color : "#FFC10C", fontWeight : "600"}}>{cost}</span>
        </div >
    )
}

export default Cost