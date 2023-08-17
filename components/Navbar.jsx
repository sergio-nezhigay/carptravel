import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  absolute top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src="./images/logo.svg"
                  alt="Logo"
                  width={61}
                  height={33}
                />
              </Link>
              {/* button for mobile */}
              <div className="md:hidden ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <span>MENU</span> : <span>CLOSE</span>}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#career" onClick={() => setNavbar(!navbar)}>
                    Career
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <div>
        <Link href="/">
          <h1>CarpTravel</h1>
        </Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
