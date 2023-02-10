import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../../style/swiperslide.css";
import { useStateContext } from "../../contexts/contextProvider";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Topslider(props) {
  const { apiBaseUrl } = useStateContext();
  const postLIst = props.post ? props.post : [];

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
          {postLIst.map((data) => (
            <SwiperSlide className="sliderDiv" key={data.id}>
              <Link className="slideBlogtitle" to={`/blogdetails/${data.id}`}>
                <span>{data.title.slice(0, 40)} ...</span>
              </Link>
              <img src={`${apiBaseUrl}${data.image}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
