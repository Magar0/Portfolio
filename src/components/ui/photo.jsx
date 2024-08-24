"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="relative h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
        >
          <Image
            src={"/img/my-pic.jpg"}
            fill
            quality={100}
            alt="img"
            className="object-contain  "
          />
          <div className="absolute top-0 left-0 z-10 from-primary to-transparent h-full w-full   custom-gradient"></div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke={"#00ff99"}
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: " 24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeatType: "reverse",
              repeat: Infinity,
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
