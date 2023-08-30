import React from 'react';

import ContactForm from './ContactForm';

function Contacts() {
  return (
    <section
      id="contacts"
      className=" contacts py-[56px] text-sm md:py-[64px] md:text-base md:leading-5 xl:py-[104px] xl:text-lg xl:leading-6">
      <div className="container relative  md:flex md:h-full md:flex-col md:justify-between">
        <h2 className="mb-9 text-4xl uppercase  md:col-start-1 md:row-start-1 md:self-start  md:text-[67px] md:leading-[66px] xl:mb-[71px] xl:text-[98px] xl:leading-[119px]">
          <span className="font-thin">Contact </span>US
        </h2>
        <div className="xl:flex ">
          <div className="align-items-center  mb-3 grid auto-rows-auto grid-cols-[auto,auto] gap-x-[20px] leading-6 md:mb-16 md:grid-cols-[221px,auto,auto,auto] xl:mb-0 xl:basis-1/2 xl:grid-cols-2 xl:grid-rows-[auto,auto,100px]">
            <div className="ml-auto text-sm leading-6 md:text-base xl:text-lg">
              <a href="tel:+380981234567" className="link block">
                +38 (098) 12 34 567
              </a>
              <a href="tel:+380731234567" className="link block">
                +38 (073) 12 34 567
              </a>
            </div>
            <p className="text-xs font-extralight leading-6">Phone number</p>
            <p className=" text-right text-sm leading-6 md:col-start-1 md:row-start-2 md:self-end md:text-base xl:self-start xl:text-lg">
              <a href="mailto:support@carptravel.com" className="link">
                support@carptravel.com
              </a>
            </p>
            <p className="text-xs font-extralight leading-6 md:col-start-2 md:row-start-2 md:self-end xl:self-start ">
              E-mail
            </p>
            <p className="text-right text-xs font-extralight leading-6 md:col-start-3 xl:col-start-2 xl:row-start-3 xl:text-left ">
              Follow us
            </p>
            <ul className="text-sm leading-6 md:col-start-4 md:row-span-2 xl:col-start-1 xl:row-span-1 xl:row-start-3 xl:text-right ">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link">
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link">
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link">
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link">
                  tiktok
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
