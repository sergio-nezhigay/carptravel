import React from "react";
import Image from "next/image";

function About() {
  return (
    <section id="services" className="py-14 h-screen relative ">
      <div className="container px-5 m-auto">
        <div className="absolute t-0 l-0 w-full h-full">
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
        <div className="absolute mx-auto  text-center z-10 py-[56px] px-5 ">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
