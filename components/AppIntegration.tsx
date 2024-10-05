import Image from "next/image";
import React from "react";

const AppIntegration = () => {
  return (
    <div className="flex justify-between mt-[121px]">
      <Image src="assets/icon-brand.svg" alt="icon" width={814} height={314} />
      <div className="flex flex-col gap-5 max-w-[500px] mt-[70px] mr-[116px]">
        <h1 className="text-5xl font-bold text-title-color">
          Seamless integration with best apps
        </h1>
        <p className="text-lg font-medium text-para-color">
          What ever you use, we integrate with the best of best
        </p>
      </div>
    </div>
  );
};

export default AppIntegration;
