import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="about py-[56px] text-sm    md:py-[64px] md:text-base md:leading-5 xl:py-[104px] xl:text-lg xl:leading-6">
      <div className="container h-full md:grid md:auto-rows-auto md:grid-cols-[auto,220px] md:gap-x-[24px] xl:grid-cols-[50%,50%]  ">
        <h2 className=" mb-2 text-4xl uppercase  md:col-start-1 md:row-start-1 md:self-start md:text-[67px] md:leading-[81px] xl:text-[98px] xl:leading-[119px]">
          <span className="font-thin">WHO </span>WE ARE
        </h2>

        <p className="  mb-5 max-w-[180px] md:col-start-2 md:row-start-1 md:mb-4 md:max-w-none xl:max-w-[292px]">
          a team of enthusiasts
          <span className="font-extralight">
            &nbsp;who are fully committed to the mission of creating
            unforgettable and extraordinary trips to the most beautiful parts of
            the Carpathians. Our goal is not just to show you the natural
            wonders of the mountains, but to provide you with a deep immersion
            in their magical atmosphere.
          </span>
        </p>
        <p className="  row-start-2 mb-10 max-w-[180px]  md:col-start-2 md:mb-0 md:max-w-none md:self-end xl:max-w-[292px]">
          We believe
          <span className="font-extralight">
            &nbsp; that nature has the power to inspire, strengthen character
            and provide new perspectives. Therefore, each of our tours is aimed
            at unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </span>
        </p>

        <div className="mb-10 md:col-start-1 md:row-start-2 md:mb-0 md:self-end xl:col-start-2 xl:row-start-3 xl:ml-auto  ">
          <h3 className=" uppercase ">
            <span className="ml-auto mr-5 block w-fit  md:ml-0">
              From vacationers <br />
            </span>
            <span className="ml-auto block w-fit md:ml-5 xl:ml-[100px] ">
              to active travelers
            </span>
          </h3>
          <p className="ml-auto w-fit font-extralight md:mb-0   md:ml-0">
            we have a tour for everyone.
          </p>
        </div>

        <p className=" md: ml-auto md:col-span-2 md:col-start-1 md:row-start-3 md:mb-0 md:max-w-[463px]  md:self-end md:pt-16 xl:col-span-1 xl:max-w-none">
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
