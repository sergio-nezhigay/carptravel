import React from "react";
import Slogan from "./Slogan";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section className="pt-[105px] md:pt-[121px] xl:pt-[130px] pb-[56px] md:pb-[64px] xl:pb-[110px] md:h-screen hero">
      <div className="container relative z-10 mx-auto px-5 md:px-8 xl:px-6 flex flex-col justify-between md:grid h-full md:grid-rows-2 md:gap-x-[24px] md:grid-cols-[auto,250px] xl:grid-cols-[auto,370px] ">
        <Slogan className="slogan " />
        <h1 className="mb-6 text-4xl md:text-[67px] xl:text-[98px] md:leading-[81px] xl:leading-[119px] uppercase md:col-start-1 md:row-start-1 self-start  ">
          Uncover <br />
          <span className=" font-thin">
            Carpathian’s
            <br />
            Secrets
          </span>
        </h1>

        <p className="font-extralight text-[10px] mb-6 md:mb-0 max-w-[180px] md:max-w-[240px] xl:max-w-none md:text-[14px] xl:text-[16px] leading-4  md:col-start-1 self-end ">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className=" md:col-start-2 md:row-start-2 md:row-span-1 self-end ">
          <p className="font-extralight text-sm md:text-[16px] xl:text-[18px] text-justify mb-6 md:mb-[28px] xl:leading-6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className="corners-border font-bold text-lg leading-[48px] flex items-center justify-center xl:text-[32px] tracking-widest"
            type="button"
            aria-label="Join our adventure"
          >
            JOIN NOW
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
