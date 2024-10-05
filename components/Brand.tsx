import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <div className="flex flex-col w-full gap-[35px]">
      <p className="text-center text-[#929292]">
        We have the fast paced growing companies with us
      </p>
      <div className="flex justify-center gap-[152px]">
        <div className="flex  items-center gap-4 text-3xl font-bold text-title-color">
          <Image src="/assets/flui.svg" alt="img" width={34} height={34} />
          <h3>Fluid glu</h3>
        </div>
        <div className="flex items-center gap-4 text-3xl font-bold ">
          <Image src="/assets/hikkenko.svg" alt="img" width={31} height={38} />
          <h1>Hikkeno</h1>
        </div>
        <div className="flex items-center gap-4 text-3xl font-bold ">
          <Image src="/assets/bubble.svg" alt="img" width={34} height={34} />
          <h3>Bubble</h3>
        </div>
      </div>
    </div>
  );
};

export default Brand;
