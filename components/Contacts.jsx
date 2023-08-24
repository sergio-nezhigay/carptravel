import React from 'react';

import ContactForm from './ContactForm';

function Contacts() {
  return (
    <section
      id="contacts"
      className=" py-[56px] md:py-[64px] xl:py-[104px] contacts text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6">
      <div className="container mx-auto relative  px-5 md:px-8 xl:px-6 md:h-full md:flex md:flex-col md:justify-between ">
        <h2 className="text-4xl md:text-[67px] xl:text-[98px]  md:leading-[66px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-9 xl:mb-[71px]">
          <span className="font-thin">Contact </span>US
        </h2>
        <div className="xl:flex ">
          <div className="grid  grid-cols-[auto,auto] md:grid-cols-[221px,auto,auto,auto] xl:grid-cols-2 auto-rows-auto xl:grid-rows-[auto,auto,100px] gap-x-[20px] align-items-center leading-6 mb-3 md:mb-16 xl:mb-0 xl:basis-1/2">
            <div className="ml-auto text-sm leading-6 md:text-base xl:text-lg">
              <a href="tel:+380981234567" className="block link">
                +38 (098) 12 34 567
              </a>
              <a href="tel:+380731234567" className="block link">
                +38 (073) 12 34 567
              </a>
            </div>
            <p className="text-xs font-extralight leading-6">Phone number</p>
            <p className=" text-right text-sm leading-6 md:text-base xl:text-lg md:col-start-1 md:row-start-2 md:self-end xl:self-start">
              <a href="mailto:support@carptravel.com" className="link">
                support@carptravel.com
              </a>
            </p>
            <p className="text-xs font-extralight leading-6 md:col-start-2 md:row-start-2 md:self-end xl:self-start ">
              E-mail
            </p>
            <p className="text-right text-xs font-extralight leading-6 md:col-start-3 xl:col-start-2 xl:text-left xl:row-start-3 ">
              Follow us
            </p>
            <ul className="text-sm leading-6 md:col-start-4 xl:col-start-1 xl:row-start-3 md:row-span-2 xl:text-right xl:row-span-1 ">
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
