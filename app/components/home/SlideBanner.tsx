'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function SlideBanner() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        spaceBetween={60}
        className="w-full h-[300px] md:h-[400px] mySwiper my-10"
      >
        {[1, 2, 3, 4, 5, 6].map(e => <SwiperSlide key={e}>
          {/* <Image
          width={700}
          height={400}
          src="https://dragonball-api.com/characters/ginyu.webp"
          alt="Slide 2"
          className="w-full h-full object-cover"
        /> */}
          <div className='w-full h-[400px] bg-red-300'>

          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default SlideBanner