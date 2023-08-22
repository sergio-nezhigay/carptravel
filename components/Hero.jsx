import React from "react";
import OtherSection from "./Services";
import Slogan from "./Slogan";

export default function Hero() {
  return (
    <section className="pt-[105px] md:pt-[121px] xl:pt-[130px] pb-[56px] md:pb-[64px] xl:pb-[110px] h-screen hero-img bg-img">
      <div className="container mx-auto px-5 md:px-8 xl:px-6 flex flex-col justify-between md:grid h-full md:grid-rows-2 md:gap-x-[24px] md:grid-cols-[auto,250px] xl:grid-cols-[auto,370px] ">
        <Slogan className="slogan " />
        <h1 className="text-4xl md:text-[67px] xl:text-[98px] md:leading-[81px] xl:leading-[119px] uppercase md:col-start-1 md:row-start-1 self-start  ">
          Uncover <br />
          <span className=" font-thin">
            Carpathian’s
            <br />
            Secrets
          </span>
        </h1>

        <p className="font-extralight text-[10px] max-w-[180px] md:max-w-[240px] xl:max-w-none md:text-[14px] xl:text-[16px] leading-4  md:col-start-1 self-end ">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className=" md:col-start-2 md:row-start-2 md:row-span-1 self-end ">
          <p className="font-extralight text-sm md:text-[16px] xl:text-[18px] text-justify mb-6 md:mb-[28px] xl:leading-6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <button className=" corners-border font-bold text-lg xl:text-lg ">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
}
