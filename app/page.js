"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import OtherSection from "@/components/OtherSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <OtherSection /> */}
    </>
  );
}
