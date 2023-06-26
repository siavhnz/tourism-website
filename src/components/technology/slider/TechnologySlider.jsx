// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import TechnologyItem from "./TechnologyItem";
import { data } from "../../../store/technology";

const TechnologySlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".technology-pagination",
        renderBullet: function (index, className) {
          return (
            '<div class="bg-transparent border border-white border-opacity-25 w-40 h-40 md:w-60 md:h-60 md:text-24 xl:text-32 xl:w-80 xl:h-80 rounded-full flex justify-center items-center text-16 leading-18 font-bellefair text-white transition-all duration-700 cursor-pointer hover:border-opacity-100 ' +
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
          <SwiperSlide key={item.word}>
            <TechnologyItem {...item} />
          </SwiperSlide>
        );
      })}
      <div className="technology-pagination absolute top-60 z-10 -mt-7 flex w-full justify-center gap-x-16 md:top-96 md:mt-44 xl:top-24 xl:ml-168 xl:w-auto xl:flex-col xl:justify-start xl:gap-y-32 3xl:left-[calc((100%-1920px)/2)]"></div>
    </Swiper>
  );
};

export default TechnologySlider;
