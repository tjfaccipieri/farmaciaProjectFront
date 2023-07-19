import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MarcasCard } from "./MarcasCard";
export function MarcasCarousel() {
  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-slate-700">Principais Marcas</h3>
      <Swiper
        spaceBetween={35}
        slidesPerView={8}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="px-12"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <SwiperSlide key={i}>
            <MarcasCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
