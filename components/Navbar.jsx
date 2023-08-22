import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = navbar ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [navbar]);

  return (
    <nav className="w-full relative  shadow">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 w-full container justify-between px-5 md:mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className=" flex items-center justify-between py-9 md:py-6 md:block">
            <a href="#" className={navbar ? "invisible" : ""}>
              <Image src="/images/logo.svg" width={61} height={33} alt="Logo" />
            </a>
            <div className="md:hidden">
              <button
                className=" outline-none text-sm tracking-widest "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <span>CLOSE</span> : <span>OPEN</span>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            } md:flex`}
          >
            {/* Desktop Menu */}
            <ul className=" hidden md:flex text-sm leading-[17px] tracking-widest items-center justify-center space-y-8 md:space-x-6 xl:space-x-14  md:space-y-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`absolute flex flex-col justify-center items-center h-screen w-screen left-0 top-0  z-20 bg-custom-green ${
          navbar ? "block" : "hidden"
        } md:hidden`}
      >
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <Link href="/" onClick={() => setNavbar(false)}>
            Home
          </Link>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <Link href="#gallery" onClick={() => setNavbar(false)}>
            Gallery
          </Link>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <Link href="#services" onClick={() => setNavbar(false)}>
            Services
          </Link>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <Link href="#about" onClick={() => setNavbar(false)}>
            About
          </Link>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <Link href="#contacts" onClick={() => setNavbar(false)}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
