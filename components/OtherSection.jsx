import React from "react";

function OtherSection() {
  return (
    <div>
      <section
        id="about"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7x1 text-white">About</h1>
      </section>
      <section
        id="services"
        className="text-white h-screen bg-red-400 text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7x1 text-white">Services</h1>
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
