import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    title: "ATVS",
    description: "Join exciting rafting",
    slogan: "Feel the adrenaline rush",
  },
  {
    title: "Rock climbing",
    description: "Overcome the peaks ",
    slogan: "Destroy your limitations",
  },
  {
    title: "Hot air ballooning",
    description: "Feel Zen over the mountain ",
    slogan: "Get Inspired",
  },
  {
    title: "Skydiving",
    description: "Fly in the sky o",
    slogan: "Overcome your fears",
  },
  {
    title: "Rafting",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    slogan: "Trust the flow",
  },
];

function Services() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePaginationClick = (index) => {
    console.log("🚀  handlePaginationClick ~ index:", index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  return (
    <section
      id="services"
      className="py-[56px] md:py-[64px] xl:py-[104px] h-screen gallery-img1 bg-img1 text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6"
    >
      <div className="container mx-auto px-5 md:px-8 xl:px-6 flex flex-col  ">
        <h2 className="text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-6 md:mb-[72px] xl:mb-[24px]">
          <span className="font-thin">We </span>Offer
        </h2>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={600}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="servicesSwiper"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              // This callback will be called whenever the slide changes
              console.log("Current slide index:", swiper.realIndex);
            }}
          >
            {slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div
                  className="cardDetails"
                  onClick={() => console.log("clicked")}
                >
                  <div>
                    <div>{slide.slideIndex}</div>
                    <div>{slide.title}</div>
                    <div>{slide.slogan}</div>
                    <hr />
                  </div>
                  <div className="pagination-menu">
                    {slides.map((menuItem, index) => (
                      <div
                        key={index}
                        className="pagination-bullet"
                        onClick={() => handlePaginationClick(index)}
                      >
                        <span>{index}</span>
                        <span>{menuItem.title}</span>
                        {slideIndex === index ? "Curren1t" : "Go to"}
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
