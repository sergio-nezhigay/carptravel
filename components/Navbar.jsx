import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

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
              <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                className="w-[63px]"
                alt="Logo"
              />
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
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  Contacts
                </ScrollLink>
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
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbar(false)}
          >
            About
          </ScrollLink>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbar(false)}
          >
            Services
          </ScrollLink>
        </li>

        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbar(false)}
          >
            Gallery
          </ScrollLink>
        </li>
        <li className="block uppercase tracking-widest text-lg leading-[22px] py-6">
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNavbar(false)}
          >
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
