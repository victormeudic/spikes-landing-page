"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ListImage = () => {
  return (
    <div className="relative h-[800px]">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          className="absolute left-0 top-[97px]"
          src="/assets/orange.svg"
          alt="img"
          width={290}
          height={290}
        />
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          className="absolute left-[352px] top-[169px]"
          src="/assets/purple.svg"
          alt="img"
          width={290}
          height={290}
        />
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          className="absolute right-[365px] top-[284px]"
          src="/assets/green.svg"
          alt="img"
          width={290}
          height={290}
        />
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          className="absolute right-[305px] top-[67px]"
          src="/assets/black.svg"
          alt="img"
          width={366}
          height={145}
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          className="absolute -right-[60px] top-[306px]"
          src="/assets/brown.svg"
          alt="img"
          width={407}
          height={434}
        />
      </motion.div>
    </div>
  );
};

export default ListImage;
