"use client";
import React, { useRef } from "react";
import Image from "next/image"; // Import Next Image
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const CounterSectionContent = ({ title, description, counters, bgImage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative py-12 md:py-24 overflow-hidden" ref={ref}>
      
      {/* --- LAYER 1: Background Image --- */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
            <Image 
                src={bgImage}
                alt="Factory Background"
                fill
                className="object-cover"
                priority // Load this fast as it is a large visual element
            />
        )}
      </div>

      {/* --- LAYER 2: Gradient Overlay --- */}
      {/* This sits on top of the image to make text readable. 
          It fades from your Dark Secondary color to your Primary Blue. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#252B42]/95 to-[#064a9b]/90 mix-blend-multiply" />


      {/* --- LAYER 3: Content (Z-Index 10) --- */}
      <div className="main_container relative z-10 px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Title Section */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 md:block">
            <div className="flex flex-col gap-3 md:border-l-4 md:border-[#86BCFC] md:pl-4">
              <h4 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {title}
              </h4>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Counters Loop */}
          {counters.map((item, i) => {
            // Remove comma and plus for calculation
            const numericValue = parseFloat(item.countNumber.replace(/,/g, "").replace("+", ""));
            const hasPlus = item.countNumber.includes("+");

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col justify-center items-center gap-1 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <h4 className="text-3xl md:text-5xl font-extrabold text-white tabular-nums drop-shadow-md">
                  {isInView ? (
                    <CountUp
                      start={0}
                      end={numericValue}
                      duration={2.5}
                      separator=","
                      suffix={hasPlus ? "+" : ""}
                    />
                  ) : (
                    "0"
                  )}
                </h4>
                <div className="h-0.5 w-8 bg-[#86BCFC] my-2 rounded-full opacity-70"></div>
                <p className="text-gray-200 text-xs md:text-sm font-medium text-center uppercase tracking-widest">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CounterSectionContent;