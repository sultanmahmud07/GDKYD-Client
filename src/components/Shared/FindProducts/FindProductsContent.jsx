"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // We will use Next Image for the background
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

const FindProductsContent = ({ title, description, buttonText, bgImage }) => {
  
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Replace with a real factory/machine image */}
        <Image 
            src={bgImage || "/assets/placeholder-factory.jpg"} 
            alt="Factory Background"
            fill
            className="object-cover"
        />
        {/* Dark Blue Overlay to make text readable */}
        <div className="absolute inset-0 bg-[#064a9b]/80 mix-blend-multiply" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="main_container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-blue-50 text-base md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>
            
            <Link href="/product">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#064a9b] font-bold text-lg rounded-full shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                {buttonText}
                <span className="p-1 bg-[#064a9b]/10 rounded-full group-hover:bg-[#064a9b] group-hover:text-white transition-colors duration-300">
                    <MdArrowForward />
                </span>
              </motion.button>
            </Link>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default FindProductsContent;