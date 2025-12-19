"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowOutward, MdPrecisionManufacturing } from "react-icons/md";

const PortfolioGrid = ({ items, locale }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {items?.map((portfolio, i) => (
        <TechCard key={portfolio._id || i} portfolio={portfolio} locale={locale} index={i} />
      ))}
    </div>
  );
};

const TechCard = ({ portfolio, locale, index }) => {
  const isEn = locale === "en";
  const name = isEn ? portfolio?.name_en : portfolio?.name_cn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white"
    >
      <Link href={`/portfolio/${portfolio?._id}`} className="block h-full">
        
        {/* --- 1. THE IMAGE AREA (Technical View) --- */}
        <div className="relative h-[300px] w-full overflow-hidden bg-gray-50 mb-5">
            
            {/* The Image */}
            <Image
                src={portfolio?.image}
                alt={name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:contrast-105"
            />

            {/* Overlay Gradient (Subtle tech grid could go here) */}
            <div className="absolute inset-0 bg-[#064a9b]/0 group-hover:bg-[#064a9b]/5 transition-colors duration-300" />

            {/* --- UNIQUE: The 4 Focus Brackets (Animated) --- */}
            {/* Top Left */}
            <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#064a9b] opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
            {/* Top Right */}
            <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#064a9b] opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
            {/* Bottom Left */}
            <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#064a9b] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
            {/* Bottom Right */}
            <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#064a9b] opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />

            {/* Status Tag */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-mono uppercase tracking-widest px-2 py-1 flex items-center gap-2 border border-gray-200 group-hover:opacity-0 transition-opacity">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Active</span>
            </div>
        </div>

        {/* --- 2. THE INFO AREA (Industrial Label) --- */}
        <div className="relative pl-4 border-l-2 border-gray-200 group-hover:border-[#064a9b] transition-colors duration-300">
            
            {/* Decorative Number */}
            <span className="text-4xl font-black text-gray-100 absolute -top-10 right-0 -z-10 select-none group-hover:text-blue-50 transition-colors">
                0{index + 1}
            </span>

            <div className="flex items-start justify-between gap-4">
                <div>
                     {/* Subtitle / Category */}
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        <MdPrecisionManufacturing className="text-[#064a9b]" />
                        <span>KYD Series</span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-md md:text-xl font-bold text-[#252B42] leading-tight group-hover:text-[#064a9b] transition-colors">
                        {name.slice(0, 60)}{name.length > 60 ? "..." : ""}
                    </h3>
                </div>

                {/* Circle Arrow Button */}
                <div className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#064a9b] group-hover:border-[#064a9b] group-hover:text-white transition-all duration-300">
                    <MdArrowOutward className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
            </div>

            {/* Bottom Line Progress (Fills on hover) */}
            <div className="absolute -bottom-4 left-0 w-0 h-0.5 bg-[#064a9b] group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>

      </Link>
    </motion.div>
  );
};

export default PortfolioGrid;