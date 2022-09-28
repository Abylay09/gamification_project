import React from 'react'
import Ticket from "assets/info/two-airline-tickets.png"
import "./CouponInfo.scss"
function CouponInfo() {
    return (

        <div className='coupon-info-item'>
            <div className='coupon-info-img'>
                <img src={Ticket} alt="" />
            </div>
            <div className='coupon-info-title'>
                Недоступно
            </div>
            <div className='coupon-info-text'>
                “Глава 2: Рациональные числа” откроется после
                прохождения “Глава 1: Натуральные числа”
            </div>
        </div>

        // <div className='d-flex flex-column align-items-center justify-content-center ' style={{flex : "1"}}>
        // {/* <div style = {{position : "absolute", top : "50%", left : "0"}}> */ }

        // </div>

    )
}

export default CouponInfo