import React from "react";

function Slogan() {
  return (
    <div className="md:col-start-2 row-start-1 flex justify-center items-center w-fit flex-col ml-auto md:ml-0 self-start ">
      <p className="flex  xl:mb-0 text-3xl md:text-[67px] xl:text-[98px] md:leading-[81px] xl:leading-[119px]">
        <span className="  font-semibold xl:mr-[8px]">7</span>
        <span className="  font-light tracking-wider md:tracking-[0.13em] ">
          DAYS
        </span>
      </p>

      <p className="tracking-[0.79em] md:tracking-[1.95em] xl:tracking-[2.38em] md:ml-[17px] text-xs md:text-sm font-light leading-[1.25rem]  xl:text-[16px]">
        JOURNEY
      </p>
    </div>
  );
}

export default Slogan;
