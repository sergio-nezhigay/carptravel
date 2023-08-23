import React from "react";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="py-[56px] md:py-[64px] xl:py-[104px] about  text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6"
    >
      <div className="container mx-auto px-5 md:px-8 xl:px-6 md:grid h-full md:auto-rows-auto md:gap-x-[24px] md:grid-cols-[auto,220px] xl:grid-cols-[50%,50%]  ">
        <h2 className="text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase mb-2 md:col-start-1 md:row-start-1 md:self-start">
          <span className="font-thin">WHO </span>WE ARE
        </h2>

        <p className="  mb-5 md:mb-4 max-w-[180px] md:max-w-none xl:max-w-[292px] md:col-start-2 md:row-start-1">
          a team of enthusiasts
          <span className="font-extralight">
            &nbsp;who are fully committed to the mission of creating
            unforgettable and extraordinary trips to the most beautiful parts of
            the Carpathians. Our goal is not just to show you the natural
            wonders of the mountains, but to provide you with a deep immersion
            in their magical atmosphere.
          </span>
        </p>
        <p className="  mb-10 md:mb-0 max-w-[180px] md:max-w-none xl:max-w-[292px] md:col-start-2 row-start-2 md:self-end">
          We believe
          <span className="font-extralight">
            &nbsp; that nature has the power to inspire, strengthen character
            and provide new perspectives. Therefore, each of our tours is aimed
            at unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </span>
        </p>

        <div className="mb-10 md:mb-0 md:col-start-1 md:row-start-2 xl:row-start-3 xl:col-start-2 md:self-end xl:ml-auto  ">
          <h3 className=" uppercase ">
            <span className="mr-5 ml-auto md:ml-0 w-fit block">
              From vacationers <br />
            </span>
            <span className="ml-auto md:ml-5 xl:ml-[100px] w-fit block ">
              to active travelers
            </span>
          </h3>
          <p className="font-extralight ml-auto md:ml-0 w-fit   md:mb-0">
            we have a tour for everyone.
          </p>
        </div>

        <p className=" md:mb-0 md:col-start-1 md:pt-16 md:row-start-3 md:col-span-2 xl:col-span-1 md:self-end  md:max-w-[463px] xl:max-w-none md: ml-auto">
          We use methods
          <span className="font-extralight">
            &nbsp; that are time-tested and proven. Our expert guides with
            in-depth knowledge of the Carpathian landscapes lead you safely
            through the mysteries of these mountains.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
