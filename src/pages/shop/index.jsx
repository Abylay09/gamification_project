import React from 'react'
import { Container, Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import { useQuery } from '@tanstack/react-query'
import ShopItem from './components/ShopItem'
import { coupons } from 'utils/api/getCoupons'

import RightArrow from "assets/common/right-arrow.svg"
import "./index.scss"

function ShopPage() {
    const { data: coupon, isError, isLoading } = useQuery(["getAllCoupons"], () => {
        return coupons.getAllCoupons()
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    else if (isError) {
        return <div>Error</div>
    }
    console.log(Object.values(coupon.offers));
    return (
        <Layout>
            <Stack style={{ marginBottom: '-24px' }}>
                <h4 className='section-title my-4' >Лавка</h4>
                <div className='coupon mb-4 d-flex align-items-center justify-content-between' >
                    <div>
                        <p className='coupon__title mb-0' >Мои купоны</p>
                        <p className='coupon__number'>У вас нет активных купонов</p>
                    </div>
                    <img src={RightArrow} alt="" />
                </div>
            </Stack>
            <Stack style={{ marginBottom: '-24px' }}>
            <h4 className='section-title my-4' >1 Уровень</h4>
                {/* <ShopItem data = {coupon}/> */}
                {
                    Object.values(coupon.offers).map(item =>
                        item.map(another =>
                            <ShopItem merchant_title={another.merchant_title} level = {another.level}
                                title={another.title} price = {another.price}/>))
                }


            </Stack>

            {/* <Stack style={{ marginBottom: '24px' }}>
                <h4 className='section-title my-4' >2 Уровень</h4>
                <div className='coupon not-available mb-4 d-flex align-items-center justify-content-between' >
                    <div>
                        <p className='coupon__title mb-0' >Посещение развлекательного парка</p>
                        <p className='coupon__number'>Nasledniki в ТЦ Атриум</p>
                    </div>
                    <img src={RightArrow} alt="" />
                </div>
                <div className='coupon not-available mb-4 d-flex align-items-center justify-content-between' >
                    <div>
                        <p className='coupon__title mb-0' >Посещение развлекательного парка</p>
                        <p className='coupon__number'>Nasledniki в ТЦ Атриум</p>
                    </div>
                    <img src={RightArrow} alt="" />
                </div>
            </Stack> */}
        </Layout>
    )
}

export default ShopPage