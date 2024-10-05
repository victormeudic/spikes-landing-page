import React from "react";

const Percentage = () => {
  return (
    <div className="flex gap-[118px] max-w-[654px] mb-[50px]">
      <div className="flex flex-col gap-[25px]">
        <h2 className="text-title-color text-[58px] font-bold">200%</h2>
        <p className="text-[#929292] text-base text-center">
          Increase in new pipeline generated
        </p>
      </div>
      <div className="flex flex-col gap-[25px]">
        <h2 className="text-title-color text-[58px] font-bold">70%</h2>
        <p className="text-[#929292] text-base text-center">
          Increase in form work
        </p>
      </div>
      <div className="flex flex-col gap-[25px]">
        <h2 className="text-title-color text-[58px] font-bold">40%</h2>
        <p className="text-[#929292] text-base text-center">
          Decrease in cost per lead{" "}
        </p>
      </div>
    </div>
  );
};

export default Percentage;
