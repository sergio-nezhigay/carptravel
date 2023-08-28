import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Slogan from './Slogan';

export default function Hero() {
  return (
    <section className="hero pb-[56px] pt-[105px] md:h-screen md:pb-[64px] md:pt-[121px] xl:pb-[110px] xl:pt-[130px]">
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-5 md:grid md:grid-cols-[auto,250px] md:grid-rows-2 md:gap-x-[24px] md:px-8 xl:grid-cols-[auto,370px] xl:px-6 ">
        <Slogan className="slogan " />
        <h1 className="mb-6 self-start text-4xl uppercase md:col-start-1 md:row-start-1 md:text-[67px] md:leading-[81px] xl:text-[98px] xl:leading-[119px]  ">
          Uncover <br />
          <span className=" font-thin">
            Carpathian’s
            <br />
            Secrets
          </span>
        </h1>

        <p className="mb-6 max-w-[180px] self-end text-[10px] font-extralight leading-4 md:col-start-1 md:mb-0 md:max-w-[240px] md:text-[14px]  xl:max-w-none xl:text-[16px] ">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className=" self-end md:col-start-2 md:row-span-1 md:row-start-2 ">
          <p className="mb-6 text-justify text-sm font-extralight md:mb-[28px] md:text-[16px] xl:text-[18px] xl:leading-6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className="corners-border flex items-center justify-center text-lg font-bold leading-[48px] tracking-widest xl:text-[32px]"
            aria-label="Join our adventure">
            JOIN NOW
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
