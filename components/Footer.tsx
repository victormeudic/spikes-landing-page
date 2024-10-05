"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#F7F7F7] pt-[92px] pb-20">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-center font-bold text-title-color">
          <Image src="/assets/logo.svg" alt="log" width={35} height={35} />
          <h3>Squaree</h3>
        </div>
        <p className="text-para-color text-sm font-medium max-w-[186px]">
          What matters is productivity with fun culture
        </p>
      </div>

      <div className="flex pl-[141px] pr-[88px] gap-[159px]">
        <ul className="flex flex-col gap-9 text-para-color font-semibold">
          <li className="text-title-color">About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Story</li>
        </ul>
        <ul className="flex flex-col gap-9 text-para-color font-semibold">
          <li className="text-title-color">Company</li>
          <li>Product</li>
          <li>Press</li>
          <li>More</li>
        </ul>
      </div>

      <div className="flex gap-8 bg-white rounded-[20px] border border-[#DDDDDD] p-[26px]">
        <div>
          <h1 className="text-2xl font-bold text-title-color">
            Follow us on twitter
          </h1>
          <p className="text-para-color">notion.com</p>
        </div>
        <button className="px-6 py-3 bg-[#F2B53C] text-lg rounded-xl text-white font-bold">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Footer;
