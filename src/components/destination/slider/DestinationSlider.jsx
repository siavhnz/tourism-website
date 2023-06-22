// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import DestinationItem from "./DestinationItem";
import { data } from "../../../store/destination";

const DestinationSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".destination-pagination",
        renderBullet: function (index, className) {
          return (
            '<span class="m-2 font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue border-b-3 border-b-transparent pb-8 transition-all duration-700 ' +
            className +
            '">' +
            data[index].title +
            "</span>"
          );
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.title}>
            <DestinationItem {...item} />
          </SwiperSlide>
        );
      })}
      <div className="destination-pagination absolute top-56 z-10 flex w-full justify-center gap-x-20"></div>
    </Swiper>
  );
};

export default DestinationSlider;
