// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import CrewItem from "./CrewItem";
import { data } from "../../../store/crew";

const CrewSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".crew-pagination",
        renderBullet: function (index, className) {
          return (
            '<div class="bg-white opacity-20 w-10 h-10 xl:w-15 xl:h-15 rounded-full transition-all duration-700 hover:bg-white hover:bg-opacity-50 cursor-pointer ' +
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
      <div className="crew-pagination absolute top-72 z-10 -mt-5 flex w-full max-w-screen-3xl justify-center gap-x-17 xl:top-[34.75rem] xl:ml-168 xl:justify-start xl:gap-x-23 3xl:left-[calc((100%-1920px)/2)]"></div>
    </Swiper>
  );
};

export default CrewSlider;
