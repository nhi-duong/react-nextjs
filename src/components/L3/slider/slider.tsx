"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <div>
      <div className="container mt-16  mb-10">
        <h2 className="text-3xl   from-neutral-700 font-semibold">
          Suggestions for discovery
        </h2>
        <span className="text-gray-500">
          Popular places to stay that Chisfis recommends for you
        </span>
      </div>
      <div className="container mt-10pt-9 pb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
        >
          {new Array(10).fill(0).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[355px]">
                <Image
                  src="/1.jpg"
                  alt=""
                  width={500}
                  height={600}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="text-center mt-6">
                <div className=" text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
                  <span>Enjoy the great cold</span>
                </div>
                <span className="text-sm text-gray-500 justify-center">
                  188,288 properties
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
