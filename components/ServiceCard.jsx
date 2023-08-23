import React from "react";
import { servicesList } from "./helpers/servicesList";
import Image from "next/image";

function ServiceCard({ service, serviceIndex, handlePaginationClick, total }) {
  return (
    <div>
      <div className="md:flex md:justify-between md:items-center md:mb-[36px] ">
        <h2 className="relative z-10 text-4xl md:text-[67px] xl:text-[98px]  md:leading-[81px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-6 md:mb-0 xl:mb-[24px]">
          <span className="font-thin">We </span>Offer
        </h2>
        <div className="text-[43px] md:text-[67px] leading-[52px] md:leading-[68px] font-thin mb-4 md:mb-0 text-right">
          <span>{serviceIndex + 1}</span>/
          <span className="opacity-20">{total}</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-[463px,auto] md:gap-x-5 ">
        <Image
          src={`/images/${service.imageSmall}`}
          width="607"
          height="429"
          className="object-cover w-auto h-[213px]  mb-[12px] md:mb-0 md:h-[370px] md:w-[463px] md:row-span-3"
          alt="service.title"
        />
        <p className="font-extralight text-right md:text-left mb-6 md:mb-[34px] text-[12px] leading-6 tracking-[0.20em] md:col-start-2 md:row-start-2">
          {service.slogan}
        </p>
        <ul className="mb-[34px] md:mb-[25px] md:col-start-2 md:row-start-1">
          {servicesList.map((menuItem, menuIndex) => {
            const isActive = serviceIndex === menuIndex;
            return (
              <li
                key={menuIndex}
                className="mb-4 last:mb-0"
                onClick={() => handlePaginationClick(menuIndex)}
              >
                <span
                  className={`text-xl md:text-[22px] leading-[17px] md:leading-[18px] uppercase ${
                    isActive
                      ? "font-medium active-menu"
                      : "font-extralight opacity-50"
                  }`}
                >
                  {menuItem.title}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="text-sm md:text-[13px] md:text-justify font-extralight leading-5 md:col-start-2 md:row-start-3">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
