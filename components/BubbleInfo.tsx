import Image from "next/image";
import React from "react";

const BubbleInfo = () => {
  return (
    <div className="flex justify-between w-full items-center mt-[130px] pl-[123px] pr-[83px]">
      <div className="flex flex-col gap-5 max-w-[610px]">
        <h1 className="text-5xl font-bold text-title-color">
          Know your productivity by squaree
        </h1>
        <p className="text-lg font-medium text-para-color pr-[90px]">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
      </div>
      <div>
        <div className="w-[559px] h-[402px] relative">
          <Image
            src="/assets/bubble-info.svg"
            alt="bubble"
            width={366}
            height={297}
            className="absolute"
          />
          <Image
            src="/assets/mail.svg"
            alt="mail"
            width={366}
            height={156}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleInfo;
