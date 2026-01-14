"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MdOutlineMessage, 
  MdDesignServices, 
  MdPrecisionManufacturing, 
  MdFactCheck, 
  MdBuild, 
  MdSupportAgent 
} from "react-icons/md";

const HowWorksContent = ({ title, steps, imageSrc }) => {
  
  // Icon Mapping based on your 6 specific steps
  const icons = [
    MdOutlineMessage,           // 1. Consultation
    MdDesignServices,           // 2. Custom Design
    MdPrecisionManufacturing,   // 3. Manufacturing
    MdFactCheck,                // 4. Testing
    MdBuild,                    // 5. Installation
    MdSupportAgent              // 6. Support
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Slide in from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Slide in from left
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="main_container px-4">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-3xl font-bold text-[#252B42] my-6 md:my-10"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* --- Left Side: Image --- */}
        <motion.div
          className="w-full h-full relative  overflow-hidden group"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <Image
            width={1000}
            height={800}
            src={imageSrc}
            alt="How it works process"
            className="w-full pt-3 md:pt-24 lg:pt-44 transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* --- Right Side: Process Steps --- */}
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => {
            const IconComponent = icons[i] || MdOutlineMessage; // Fallback icon

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex items-start gap-4 p-4 rounded border border-transparent hover:border-[#064a9b]/20 hover:bg-white hover:shadow transition-all duration-300"
              >
                {/* Icon Box */}
                <div className="shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#064a9b] text-2xl group-hover:bg-[#064a9b] group-hover:text-white transition-all duration-300">
                    <IconComponent />
                  </div>
                  {/* Vertical Line Connector (Except for last item) */}
                  {i !== steps.length - 1 && (
                    <div className="absolute left-1/2 bottom-[-20px] w-[2px] h-6 bg-blue-100 -translate-x-1/2 group-hover:bg-[#064a9b]/30 transition-colors" />
                  )}
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="capitalize font-bold text-lg text-[#252B42] mb-1 flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#064a9b]/60 uppercase tracking-widest">Step 0{i + 1}</span>
                    <span className="group-hover:text-[#064a9b] transition-colors">{step.title}</span>
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
};

export default HowWorksContent;