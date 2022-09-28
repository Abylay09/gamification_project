import React from 'react'
import { Stack } from "react-bootstrap"
import RightArrow from "assets/common/right-arrow.svg"

function ShopItem() {
    return (
        <>
            <h4 className='section-title my-4' >1 Уровень</h4>
            <div className='coupon mb-4 d-flex align-items-center justify-content-between' >
                <div>
                    <p className='coupon__title mb-0' >Посещение развлекательного парка</p>
                    <p className='coupon__number'>Nasledniki в ТЦ Атриум</p>

                </div>
                <img src={RightArrow} alt="" />
            </div>
            <div className='coupon mb-4 d-flex align-items-center justify-content-between' >
                <div>
                    <p className='coupon__title mb-0' >Посещение развлекательного парка</p>
                    <p className='coupon__number'>Nasledniki в ТЦ Атриум</p>
                </div>
                <img src={RightArrow} alt="" />
            </div>
        </>


    )
}

export default ShopItem