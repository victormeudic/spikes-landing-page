import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between rounded-[20px] text-title-color shadow-header px-6 py-4 mx-[164px] mt-[41px]">
      <div className="flex items-center gap-3">
        <Image src="/assets/logo.svg" alt="logo" width={35} height={35} />
        <p className="font-dm-sans text-title font-semibold text-base">
          Squaree
        </p>
      </div>
      <ul className="flex gap-[36px] text-base font-manrope font-medium">
        <li className="flex items-c">
          <p>Features</p>
          <Image
            src="/assets/arrowDown.svg"
            alt="arrow-down"
            width={24}
            height={24}
          />
        </li>
        <li className="flex items-c">
          <p>Ressources</p>
          <Image
            src="/assets/arrowDown.svg"
            alt="arrow-down"
            width={24}
            height={24}
          />
        </li>
        <li className="flex items-c">
          <p>Company</p>
          <Image
            src="/assets/arrowDown.svg"
            alt="arrow-down"
            width={24}
            height={24}
          />
        </li>
        <li className="flex items-c">
          <p>Contact Sales</p>
        </li>
      </ul>
      <Image
        src="/assets/search_icon.svg"
        alt="search_icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default NavBar;
