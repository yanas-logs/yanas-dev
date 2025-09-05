"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="relative flex justify-center items-center"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="absolute w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden flex justify-center items-center"
        >
          {/* Blur ring */}
          <div className="absolute inset-0 rounded-full ring-8 ring-white/20 blur-3xl opacity-70 pointer-events-none"></div>

          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt="Profile photo"
            className="object-cover rounded-full shadow-2xl"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
