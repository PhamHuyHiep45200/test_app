'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SlideBannerItemType } from '@/app/_models/home';
import Image from 'next/image';

interface SlideBannerProps {
  slideBanner: SlideBannerItemType[]
}

function SlideBanner(props: SlideBannerProps) {
  const { slideBanner } = props
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
        {slideBanner?.map(e => <SwiperSlide key={e.id}>
          <Image
            width={700}
            height={400}
            src={e?.images?.[0]}
            alt="Slide 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default SlideBanner