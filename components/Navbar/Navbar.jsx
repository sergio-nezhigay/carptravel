import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const MENU_ITEMS = ['about', 'services', 'gallery', 'contacts'];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = navbar ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [navbar]);

  return (
    <nav className="relative w-full  shadow">
      <div className="lg:max-w-7xl container absolute left-1/2 top-0 z-30 w-full -translate-x-1/2 transform justify-between  md:flex md:items-center ">
        <div>
          <div className=" flex items-center justify-between py-9 md:block md:py-6">
            <a href="/" className={navbar ? 'invisible' : ''}>
              <Image
                src="/images/logo.svg"
                priority
                width="0"
                height="0"
                className="w-[63px]"
                alt="Logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className=" text-sm tracking-widest outline-none "
                onClick={() => setNavbar(!navbar)}>
                {navbar ? <span>CLOSE</span> : <span>OPEN</span>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` mt-8 flex-1 justify-self-center md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            } md:flex`}>
            {/* Desktop Menu */}
            <ul className=" hidden items-center justify-center space-y-8 text-sm leading-[17px] tracking-widest md:flex md:space-x-6 md:space-y-0  xl:space-x-14">
              {MENU_ITEMS.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item}
                    href={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="link capitalize">
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center  justify-center bg-custom-green ${
          navbar ? 'block' : 'hidden'
        } md:hidden`}>
        {MENU_ITEMS.map((item) => (
          <li
            key={item}
            className="block py-6 text-lg uppercase leading-[22px] tracking-widest">
            <ScrollLink
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setNavbar(false)}>
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
