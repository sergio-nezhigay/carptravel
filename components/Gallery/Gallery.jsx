import React from 'react';
import { galleryImages } from '@helpers/galleryImages';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';
import '@styles/swiper.css';

function Gallery() {
  return (
    <section
      id="gallery"
      className="gallery py-[56px] text-sm md:py-[64px] md:text-base md:leading-5 xl:py-[104px] xl:text-lg xl:leading-6">
      <div className="container relative z-10  md:flex md:h-full md:flex-col md:justify-between ">
        <h2 className="relative mb-6 text-4xl uppercase  md:col-start-1 md:row-start-1 md:mb-[75px]  md:self-start md:text-[67px] md:leading-[81px] xl:mb-[28px] xl:text-[98px] xl:leading-[119px]">
          <span className="font-thin">Our </span>Gallery
        </h2>
        <ul className="block md:hidden ">
          <Swiper
            wrapperTag="ul"
            loop={true}
            direction="vertical"
            slidesPerView={3}
            className="h-[609px]"
            spaceBetween={24}>
            {galleryImages.map(({ fileName, title }, index) => (
              <SwiperSlide key={index} tag="li" className="relative">
                <Image
                  src={`/images/${fileName}`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
            speed={500}
            wrapperTag="ul"
            className="gallerySwiper">
            {galleryImages.map(({ fileName, title }, index) => (
              <SwiperSlide key={index} tag="li">
                <div className="image-wrapper">
                  <Image
                    src={`/images/${fileName}`}
                    width={606}
                    height={429}
                    alt={title}
                    sizes="(min-width: 768px) 415px, (min-width: 1200px) 607px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev" aria-label="Previous Slide">
            Prev
          </button>
          <button className="swiper-button-next" aria-label="Next Slide">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
