// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import TechnologyItem from "./TechnologyItem";
import { data } from "../../../store/technology";

const TechnologySlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".technology-pagination",
        renderBullet: function (index, className) {
          return (
            '<div class="bg-transparent border border-white border-opacity-25 w-40 h-40 rounded-full flex justify-center items-center text-16 leading-18 font-bellefair text-white transition-all duration-700 ' +
            className +
            '">' +
            (index + 1) +
            "</div>"
          );
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.name}>
            <TechnologyItem {...item} />
          </SwiperSlide>
        );
      })}
      <div className="technology-pagination absolute top-60 z-10 -mt-7 flex w-full justify-center gap-x-16"></div>
    </Swiper>
  );
};

export default TechnologySlider;
