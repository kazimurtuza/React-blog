import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../../style/swiperslide.css";

// import required modules
import { Pagination } from "swiper";

export default function Topslider() {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2020/08/1140-panda-smithsonian-esp.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://azertag.az/files/2020/3/1200x630/16005083856299144853_1200x630.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
