import React from "react";
import Button from "./Button";
import clsx from "clsx";

type PriceCardProps = {
  title: string;
  price: string;
  description: string;
  advantages: string[];
  annual: boolean;
  label: string;
};

const PriceCard = ({
  title,
  price,
  description,
  advantages,
  annual,
  label,
}: PriceCardProps) => {
  return (
    <div
      className={clsx(
        "bg-[#F6F6F6] max-w-[550px] w-fit p-8 rounded-[20px] border h-fit ",
        annual ? "border-[#F2B53C]" : "border-[#3E3E3E] border-opacity-15"
      )}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-[38px] font-bold">{price}</p>
        <p className="text-lg text-title-color">{description}</p>
      </div>
      <div className="h-[1px] bg-[#CFCFCF] my-8"></div>
      <ul className="flex flex-col gap-[25px] mb-[32px]">
        {advantages.map((advantage, index) => (
          <li key={index} className="text-lg flex items-center gap-3 list-none">
            <p>&#9679;</p>
            {advantage}
          </li>
        ))}
      </ul>
      <Button label={label} px={168} py={15} />
    </div>
  );
};

export default PriceCard;
