import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
function QuestsMenu() {
    return (
        <Swiper
            direction={"horizontal"}
            slidesPerView={"auto"}
            freeMode={true}
            mousewheel={true}
            modules={[FreeMode]}
            spaceBetween={24}
            className="custom-slider mySwiper"
        >
            <SwiperSlide><span className="quest-category" >Все</span></SwiperSlide>
            <SwiperSlide><span className='quest-category'>Логическое мышление</span></SwiperSlide>
            <SwiperSlide><span className='quest-category'>Внимательность</span></SwiperSlide>
            <SwiperSlide><span className='quest-category'>Креативность</span></SwiperSlide>
            <SwiperSlide><span className='quest-category'>Память</span></SwiperSlide>
            <SwiperSlide><span className='quest-category'>Мышление</span></SwiperSlide>
        </Swiper>
    )
}

export default QuestsMenu