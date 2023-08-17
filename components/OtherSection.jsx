import React from "react";
import Image from "next/image";

function OtherSection() {
  return (
    <div>
      <section
        id="services"
        className=" h-screen bg-red-400 text-center flex pb-[56px] px-5"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/happy-couple-320.jpg"
            alt="Happy couple"
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{ objectFit: "cover" }}
          />
          <div className="gradient" />
          <div />
        </div>

        <div className="absolute mx-auto  text-center z-10 ">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section
        id="career"
        className="text-white h-screen bg-slate-50 text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7x1 text-white">Career</h1>
      </section>
      <section
        id="gallery"
        className="text-white h-screen bg-purple-900 text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7x1 text-white">Gallery</h1>
      </section>
    </div>
  );
}

export default OtherSection;
