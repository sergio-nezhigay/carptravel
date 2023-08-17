import React from "react";
import OtherSection from "./OtherSection";
import Slogan from "./Slogan";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen mb12 hero-img pt-[105px] pb-[56px] px-5 text-white ">
        <Slogan />
        <h1 className="text-4xl  uppercase">
          Uncover <br />
          <span className=" font-thin">
            Carpathian’s
            <br />
            Secrets
          </span>
        </h1>
        <p className="font-extralight text-[10px] leading-4">
          Hoverla / Yaremche / Zakarpattia /<br />
          Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="font-extralight text-sm  ">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>

        <button class="corners-border">JOIN NOW</button>
      </div>
      <OtherSection />
    </>
  );
}
