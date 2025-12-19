"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FacilitiesContent = ({ title, items }) => {

      // Staggered Entrance
      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
            },
      };

      const cardVariants = {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

      return (
            <section className="py-8 md:py-16">
                  <div className="main_container">

                        {/* Title */}
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-12 md:mb-16"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
                                    {title}
                              </h2>
                              <div className="h-1.4 w-24 bg-secondary mx-auto rounded-full"></div>
                        </motion.div>

                        {/* Card Grid */}
                        <motion.div
                              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: "-50px" }}
                        >
                              {items.map((item, i) => (
                                    <motion.div
                                          key={i}
                                          variants={cardVariants}
                                          className="group relative h-[220px] md:h-[280px] bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                    >

                                          {/* 1. Background Fill Animation (Slides up) */}
                                          <div className="absolute inset-0 bg-[#06499bab] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                                          {/* 2. Content Container */}
                                          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 gap-6">

                                                {/* Icon Circle */}
                                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                                                      <Image
                                                            width={100}
                                                            height={100}
                                                            src={item.image}
                                                            alt={item.title}
                                                            // Filter: Default is colored/dark. On hover, we don't need to change image color because the circle stays white.
                                                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                                      />
                                                </div>

                                                {/* Text */}
                                                <h4 className="capitalize text-center font-bold text-base md:text-xl text-[#252B42] group-hover:text-white transition-colors duration-300">
                                                      {item.title}
                                                </h4>

                                                {/* Optional: Small decorative arrow that appears on hover */}
                                                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                      <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                                                </div>

                                          </div>

                                    </motion.div>
                              ))}
                        </motion.div>

                  </div>
            </section>
      );
};

export default FacilitiesContent;