// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

import CrewItem from "./CrewItem";
import { data } from "../../../store/crew";

const CrewSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".crew-pagination",
        renderBullet: function (index, className) {
          return (
            '<div class="bg-white opacity-20 w-10 h-10 rounded-full transition-all duration-700 ' +
            className +
            '"></div>'
          );
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.name}>
            <CrewItem {...item} />
          </SwiperSlide>
        );
      })}
      <div className="crew-pagination absolute top-72 z-10 -mt-5 flex w-full justify-center gap-x-17"></div>
    </Swiper>
  );
};

export default CrewSlider;
