import React from 'react';
import Image from 'next/image';

import { addTrailingZero } from './helpers/addTrailingZero';
import { servicesList } from './helpers/servicesList';

function ServiceCard({ service, serviceIndex, handlePaginationClick, total }) {
  return (
    <div>
      <div className="md:flex md:justify-between md:items-center md:mb-[36px] xl:mb-[23px] ">
        <h2 className="relative z-10 text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-6 md:mb-0 xl:flex-1">
          <span className="font-thin">We </span>Offer
        </h2>
        <div className="text-[43px] md:text-[67px] xl:text-[98px] leading-[52px] md:leading-[68px] xl:leading-[119px] font-thin mb-4 md:mb-0 text-right xl:flex-1 xl:text-left ">
          <span>{addTrailingZero(serviceIndex + 1)}</span>/
          <span className="opacity-20">{addTrailingZero(total)}</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-[463px,auto] xl:grid-cols-[50%,1fr,1fr] md:gap-x-5 ">
        <figure className="object-cover w-auto h-[213px]  mb-[12px] md:mb-0 md:h-[370px] xl:h-[429px] md:w-full md:row-span-3 xl:row-span-2">
          <Image
            src={`/images${service.imageSmall}`}
            width="607"
            height="429"
            alt={`${service.title}`}
          />
        </figure>
        <figcaption className="font-extralight text-right md:text-left mb-6 md:mb-[34px] text-[12px] leading-6 tracking-[0.20em] md:col-start-2 md:row-start-2 xl:col-start-3 xl:row-start-1">
          {service.slogan}
        </figcaption>
        <ul className="mb-[34px] md:mb-[25px] md:col-start-2 md:row-start-1">
          {servicesList.map((menuItem, menuIndex) => {
            const isActive = serviceIndex === menuIndex;
            return (
              <li
                key={menuIndex}
                className="mb-4 last:mb-0"
                onClick={() => handlePaginationClick(menuIndex)}>
                <button
                  className={`text-left text-xl md:text-[22px] xl:text-[28px] leading-[17px] md:leading-[18px] xl:leading-[24px] uppercase ${
                    isActive
                      ? 'font-medium active-menu'
                      : 'font-extralight opacity-50'
                  }`}>
                  {menuItem.title}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="text-sm md:text-[13px] xl:text-[18px] md:text-justify font-extralight leading-5 xl:leading-[24px] md:col-start-2 md:row-start-3 xl:row-start-2 xl:col-start-3 self-end ">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
