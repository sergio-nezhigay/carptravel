import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-[56px] md:py-[64px] xl:py-[104px] h-screen gallery-img bg-img text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6"
    >
      <div className="container mx-auto px-5 md:px-8 xl:px-6 flex flex-col  ">
        <h2 className="text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-6 md:mb-[75px] xl:mb-[28px]">
          <span className="font-thin">Our </span>Gallery
        </h2>
        <ul className="block md:hidden ">
          <li className="relative h-[187px] mb-5 shadow-3xl">
            <Image
              src="/images/gallery1.jpg"
              objectFit="cover"
              fill
              alt="Mountines"
            />
          </li>
          <li className="relative h-[187px] mb-5 shadow-3xl">
            <Image
              src="/images/gallery2.jpg"
              objectFit="cover"
              fill
              alt="Lake"
            />
          </li>
          <li className="relative h-[187px] shadow-3xl">
            <Image
              src="/images/gallery3.jpg"
              objectFit="cover"
              fill
              alt="Trees"
            />
          </li>
        </ul>
        <div className="relative hidden md:block ">
          <Swiper
            slidesPerView={3}
            watchOverflow={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
            speed={500}
            className="gallerySwiper"
          >
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper">
                <Image
                  src="/images/gallery1.jpg"
                  objectFit="cover"
                  width={606}
                  height={429}
                  alt="Mountines"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev">Prev</div>
          <div className="swiper-button-next">Next</div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
