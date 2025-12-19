"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyChooseUsContent = ({ title, buttonText, features }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="main_container px-4">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center w-full md:w-1/2 mx-auto text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {title}
        </h2>
      </motion.div>

      {/* Grid Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#064a9b]/20 overflow-hidden flex flex-col h-full"
          >
            {/* Icon & Title Area */}
            <div className="p-6 pb-2">
              <div className="h-16 w-16 mb-4 p-3 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-[#064a9b] group-hover:scale-110 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-auto h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <h4 className="capitalize font-semibold text-xl text-[#064a9b] group-hover:text-[#070F11] transition-colors">
                {item.title}
              </h4>
            </div>

            {/* Description Area */}
            <div className="px-6 pb-8 flex-grow">
              <p className="text-[#000000]/80 leading-relaxed group-hover:text-[#000000] transition-colors">
                {item.description}
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="h-1 w-0 bg-[#064a9b] group-hover:w-full transition-all duration-500 ease-out" />
          </motion.div>
        ))}
      </motion.div>

      {/* Button Animation */}
      <motion.div
        className="text-center mt-8 md:my-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href={"/product"}>
          <button className="font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC] p-3 px-8 md:px-12 text-sm md:text-md rounded-md text-[#FFFFFF] shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out">
            {buttonText}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsContent;