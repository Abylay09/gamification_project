import React from 'react'
import { Container, Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import { useQuery } from '@tanstack/react-query'
import ShopItem from './components/ShopItem'
import { coupons } from 'utils/api/getCoupons'
import { useNavigate } from 'react-router-dom'

import RightArrow from "assets/common/right-arrow.svg"
import "./index.scss"

function ShopPage() {
    const navigate = useNavigate()
    const { data: coupon, isError, isLoading } = useQuery(["getAllCoupons"], () => {
        return coupons.getAllCoupons()
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    else if (isError) {
        return <div>Error</div>
    }

    return (
        <Layout>
            <Stack style={{ marginBottom: '-24px' }}>
                <h4 className='section-title my-4' >Лавка</h4>
                <div className='coupon mb-4 d-flex align-items-center justify-content-between' onClick={()=> navigate("/ticket")}>
                    <div>
                        <p className='coupon__title mb-0' >Мои купоны</p>
                        <p className='coupon__number'>{coupon.my_coupons ? `У вас ${coupon.my_coupons} купонов`: "У вас нет активных купонов"}</p>
                    </div>
                    <img src={RightArrow} alt="" />
                </div>
            </Stack>
            <Stack style={{ marginBottom: '-24px' }}>
                {
                    Object.keys(coupon.offers).map((item, index) => {
                        return (
                            <div>
                                <h4 className='section-title my-4' >{index + 1} Уровень</h4>

                                {coupon.offers[item].map(another => {
                                    return (
                                        <ShopItem merchant_title={another.merchant_title} level={another.level}
                                            title={another.title} price={another.price}
                                            openTicket={() => navigate(`/ticket/${another.uid}`)} />
                                    )
                                })}

                            </div>
                        )
                    })
                }
            </Stack>
        </Layout>
    )
}

export default ShopPage