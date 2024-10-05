"use client";

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="max-w-[712px] text-center m-auto mt-[106px]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold font-manrope text-[78px] text-title-color mb-5"
      >
        Predictable growth starts here
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-para-color text-sm font-manrope px-[47px]"
      >
        Squaree helps users to go from Zero to Hero with Pockets flow’s simple
        platform that helps creators like you sell their digital products
        online.
      </motion.p>
    </div>
  );
};

export default HomePage;
