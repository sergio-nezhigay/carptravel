'use client';

import React from 'react';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { galleryImages } from './helpers/galleryImages';

import 'swiper/css';
import './swiper.css';

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-[56px] md:py-[64px] xl:py-[104px] gallery text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6">
      <div className="container mx-auto relative  px-5 md:px-8 xl:px-6 md:h-full md:flex md:flex-col md:justify-between ">
        <h2 className="relative z-10 text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-6 md:mb-[75px] xl:mb-[28px]">
          <span className="font-thin">Our </span>Gallery
        </h2>
        <ul className="block md:hidden ">
          {galleryImages.slice(0, 3).map(({ title, fileName }, index) => (
            <li key={index} className="relative h-[187px] mb-6 last:mb-0 ">
              <Image src={`/images/${fileName}`} fill alt={title} />
            </li>
          ))}
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
            className="gallerySwiper">
            {galleryImages.map(({ fileName, title }, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <Image
                    src={`/images/${fileName}`}
                    width={606}
                    height={429}
                    alt={title}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev ">Prev</div>
          <div className="swiper-button-next ">Next</div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
