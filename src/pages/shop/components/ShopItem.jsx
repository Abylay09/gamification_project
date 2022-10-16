import React from 'react'
import { Stack } from "react-bootstrap"
import RightArrow from "assets/common/right-arrow.svg"

import StarIcon from "assets/common/star.png"
import Coin from "assets/tickets/coin.png"

const StarStyle = {
    gap : "4px",
    border : "1px solid #00BED1",
    borderRadius : "8px",
    padding : "4px 8px",
    color : "#00BED1",
    fontSize : "11px",
    lineHeight : "16px",
    fontWeight : "bold"
}

const CoinStyle = {
    gap : "4px",
    border : "1px solid #FFC10C",
    borderRadius : "8px",
    padding : "4px 8px",
    color : "#FFC10C",
    fontSize : "11px",
    lineHeight : "16px",
    fontWeight : "bold"
}

function ShopItem({ merchant_title, title, level, data, price }) {
    return (
        <>

            <div className='coupon mb-4 d-flex align-items-center justify-content-between' >
                <div>
                    <p className='coupon__title mb-0' >{title}</p>
                    <p className='coupon__number'>{merchant_title}</p>
                    <div className='d-flex align-items-center' style={{gap : "8px"}}>
                        <span className='d-flex align-items-center' style={StarStyle}>
                            <img src={StarIcon} style={{ height: "16px", width: "16px" }} alt="" />
                            {level}
                        </span>
                        <span className='d-flex align-items-center' style={CoinStyle}>
                            <img src={Coin} style={{ height: "16px", width: "16px" }} alt="" />
                            {price}
                        </span>
                    </div>
                </div>
                <img src={RightArrow} alt="" />
            </div>




            {/* {
                Object.values(data.offers).map(item =>
                    item.map(another => 
                        <div>
                            
                            <div className='coupon mb-4 d-flex align-items-center justify-content-between' >
                                <div>
                                    <p className='coupon__title mb-0' >{another.title}</p>
                                    <p className='coupon__number'>{another.merchant_title}</p>
                                </div>
                                <img src={RightArrow} alt="" />
                            </div>
                            <img src={StarIcon} alt="" />
                        </div>
                    ))
            } */}

        </>


    )
}

export default ShopItem