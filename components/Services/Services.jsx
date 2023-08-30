import React, { useState } from 'react';
import { servicesList } from '@helpers/servicesList';
import Image from 'next/image';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import ServiceCard from './ServiceCard';

import 'swiper/css';
import '@styles/swiper.css';

function Services() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const handlePaginationClick = (index) => {
    if (swiperInstance) {
      setActiveServiceIndex(index);
      swiperInstance.slideTo(index);
      setCurrentMenuIndex(index);
    }
  };

  return (
    <section
      id="services"
      className="service relative text-sm   md:text-base  md:leading-5  xl:text-lg xl:leading-6">
      <div>
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
                  activeServiceIndex={activeServiceIndex}
                  handlePaginationClick={handlePaginationClick}
                  currentMenuIndex={currentMenuIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Image
        src={`/images${servicesList[currentMenuIndex].imageBG}`}
        fill
        sizes="100vw"
        alt={servicesList[currentMenuIndex].title}
        className=" object-cover object-center "
      /> */}
    </section>
  );
}

export default Services;
