import React, { useState } from 'react';
import Image from 'next/image';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { servicesList } from './helpers/servicesList';
import ServiceCard from './ServiceCard';

import 'swiper/css';
import './swiper.css';

function Services() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const handlePaginationClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setCurrentMenuIndex(index);
    }
  };

  return (
    <section
      id="services"
      className="relative py-[56px] md:py-[64px] xl:py-[104px] text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6 service">
      <div className="container mx-auto px-5 md:px-8 xl:px-6 flex flex-col  ">
        <Image
          src={`/images${servicesList[currentMenuIndex].imageBG}`}
          fill
          quality={100}
          sizes="100vw"
          alt="service.title"
          className=" object-cover object-center "
        />

        <div>
          <Swiper
            effect="fade"
            speed="1000"
            autoplay="2500"
            modules={[EffectFade]}
            onSwiper={setSwiperInstance}
            className="services-swiper">
            {servicesList.map((service, serviceIndex) => (
              <SwiperSlide key={serviceIndex}>
                <ServiceCard
                  service={service}
                  serviceIndex={serviceIndex}
                  total={servicesList.length}
                  handlePaginationClick={handlePaginationClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
