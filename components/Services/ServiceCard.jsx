import React from 'react';
import { addTrailingZero } from '@helpers/addTrailingZero';
import { servicesList } from '@helpers/servicesList';
import Image from 'next/image';

function ServiceCard({
  service,
  serviceIndex,
  handlePaginationClick,
  total,
  activeServiceIndex,
  currentMenuIndex,
}) {
  return (
    <>
      <div className="container relative z-10 flex flex-col py-[56px] md:py-[64px] xl:py-[104px] ">
        <div className="md:mb-[36px] md:flex md:items-center md:justify-between xl:mb-[23px] ">
          <h2 className=" mb-6 text-4xl uppercase  md:col-start-1 md:row-start-1 md:mb-0  md:self-start md:text-[67px] md:leading-[81px] xl:flex-1 xl:text-[98px] xl:leading-[119px]">
            <span className="font-thin">We </span>Offer
          </h2>
          <div className="mb-4 text-right text-[43px] font-thin leading-[52px] md:mb-0 md:text-[67px] md:leading-[68px] xl:flex-1 xl:text-left xl:text-[98px] xl:leading-[119px] ">
            <span>{addTrailingZero(serviceIndex + 1)}</span>/
            <span className="opacity-20">{addTrailingZero(total)}</span>
          </div>
        </div>
        <div className="relative z-10 md:grid md:grid-cols-[463px,auto] md:gap-x-5 xl:grid-cols-[50%,1fr,1fr] ">
          <div className="relative mb-[12px] h-[213px] w-auto  object-cover md:row-span-3 md:mb-0 md:h-[370px] md:w-full xl:row-span-2 xl:h-[429px]">
            <Image
              src={`/images${service.imageSmall}`}
              fill
              alt={`${service.title}`}
              className="w-full object-cover"
            />
          </div>
          <div className="mb-6 text-right text-[12px] font-extralight leading-6 tracking-[0.20em] md:col-start-2 md:row-start-2 md:mb-[34px] md:text-left xl:col-start-3 xl:row-start-1">
            {service.slogan}
          </div>
          <ul className="mb-[34px] md:col-start-2 md:row-start-1 md:mb-[25px]">
            {servicesList.map((menuItem, menuIndex) => {
              const isActive = serviceIndex === menuIndex;
              return (
                <li
                  key={menuIndex}
                  className="mb-4 last:mb-0"
                  onClick={() => handlePaginationClick(menuIndex)}>
                  <button
                    type="button"
                    tabindex={activeServiceIndex === serviceIndex ? '' : '-1'}
                    className={`text-left text-xl uppercase leading-[17px] md:text-[22px] md:leading-[18px] xl:text-[28px] xl:leading-[24px] ${
                      isActive
                        ? 'active-menu font-medium'
                        : 'font-extralight opacity-50'
                    }`}>
                    {menuItem.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="self-end text-sm font-extralight leading-5 md:col-start-2 md:row-start-3 md:text-justify md:text-[13px] xl:col-start-3 xl:row-start-2 xl:text-[18px] xl:leading-[24px] ">
            {service.description}
          </p>
        </div>
      </div>

      <Image
        src={`/images${servicesList[currentMenuIndex].imageBG}`}
        fill
        sizes="100vw"
        alt={servicesList[currentMenuIndex].title}
        className=" object-cover object-center "
      />
    </>
  );
}

export default ServiceCard;
