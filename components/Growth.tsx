"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Percentage from "./Percentage";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Growth = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // L'animation ne se déclenche qu'une seule fois
    threshold: 1, // Se déclenche lorsque 10% de l'élément est visible
  });
  return (
    <div className="flex flex-col items-center mt-[130px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col text-center gap-5 max-w-[856px]"
      >
        <h2 className="text-title-colore font-bold text-5xl">
          Turn your growth in to Squaree
        </h2>
        <p className="text-para-color text-lg mb-[72px]">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
      </motion.div>
      <Image src="/assets/graph.svg" alt="graph" width={374} height={157} />
      <Percentage />
      <div>
        <Button label="Explore our way" px={24} py={12} />
      </div>
    </div>
  );
};

export default Growth;
