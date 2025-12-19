"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WintechStandardContent = ({ title, items }) => {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger cards by 0.2s
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="main_container px-4">
        
        {/* Title Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#252B42] mb-3">
            {title}
          </h2>
          {/* Decorative Divider */}
          <div className="h-1 w-20 bg-[#064a9b] mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              
              {/* Background Gradient Blob (Subtle) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 z-0" />

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 mb-6 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-inner group-hover:border-[#064a9b]/30 transition-colors duration-300">
                <div className="w-12 h-12 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h4 className="capitalize font-bold text-xl text-[#252B42] mb-3 group-hover:text-[#064a9b] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line Indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#064a9b] group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WintechStandardContent;