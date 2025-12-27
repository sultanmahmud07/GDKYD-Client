"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdSpeed, MdArrowForward } from "react-icons/md";
import { BsCpu } from "react-icons/bs";
// 1. Import motion
import { motion } from "framer-motion";
import { generateSlug } from '../../../../utils/generateSlug';
import SendQuoteModal from '../../Products/SendQuoteModal';

// 2. Accept index prop for staggered animation
const ProductCard = ({ product, locale, index = 0 }) => {
      // 1. Language Logic
      const isEn = locale === 'en';
      const title = isEn ? product.title_en : product.title_cn;
      const categoryTitle = isEn ? product.category?.title_en : product.category?.title_cn;
      const [showModal, setShowModal] = useState(false)

      // 2. Safe Data Access (Configs)
      const speed = product.configurations?.["Production Speed"] || "N/A";
      // const power = product.configurations?.["Power Supply"] || "N/A"; // Unused
      const control = product.configurations?.["Control System"] || "PLC";

      // 3. Image Logic (Main + Hover Image)
      const mainImage = product.images?.[0] || '/placeholder.jpg';
      const hoverImage = product.images?.[1] || mainImage;

      // Generate Slug and Link
      const slug = generateSlug(product?.title_en);
      const link = `/product/${slug}/${product?._id}`;

      return (
            // 3. Wrap in motion.div for entrance animation
            <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 50 }} // Start invisible and lower
                  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and natural position
                  viewport={{ once: true, margin: "-50px" }} // Trigger slightly before it enters view
                  transition={{
                        duration: 0.5,
                        delay: index * 0.1, // Stagger effect based on index
                        ease: "easeOut"
                  }}
            >
                  {/* Existing Card Structure handles the hover effects */}
                  <div className="group relative flex flex-col h-full bg-white border border-gray-100 rounded overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                        {/* --- Image Section --- */}
                        <div className="relative aspect-square bg-gray-50 p-4 overflow-hidden">
                              {/* Category Badge */}
                              <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] md:text-xs font-bold text-[#064a9b] rounded-full shadow-sm">
                                    {categoryTitle}
                              </span>

                              <Link href={link}>
                                    {/* Main Image */}
                                    <Image
                                          src={mainImage}
                                          alt={title}
                                          fill
                                          className="object-contain mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    {/* Secondary Image (Shown on Hover) */}
                                    <Image
                                          src={hoverImage}
                                          alt={title}
                                          fill
                                          className="object-contain mix-blend-multiply absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105"
                                    />
                              </Link>
                        </div>

                        {/* --- Content Body --- */}
                        <div className="p-3 md:p-4 flex flex-col flex-grow">
                              {/* Title */}
                              {/* FIX: Updated to use the SEO friendly 'link' variable */}
                              <Link href={link}>
                                    <h3 className="text-base md:text-lg font-bold text-[#252B42] leading-snug mb-4 line-clamp-2 group-hover:text-[#064a9b] transition-colors">
                                          {title}
                                    </h3>
                              </Link>

                              {/* Specs Grid */}
                              <div className="mt-auto grid grid-cols-2 gap-3 mb-6">
                                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-slate-50 p-1 md:p-2 rounded border border-slate-100">
                                          <MdSpeed className="text-[#064a9b] text-base shrink-0" />
                                          <span className="truncate text-xs">{speed}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-slate-50 p-1 md:p-2 rounded border border-slate-100">
                                          <BsCpu className="text-[#064a9b] text-base shrink-0" />
                                          <span className="truncate text-xs">{control} System</span>
                                    </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 md:gap-3">
                                    <Link href={link} className="flex-1">
                                          <button className="w-full py-1 md:py-2.5 rounded-lg border border-gray-200 text-gray-700 text-xs font-semibold hover:border-[#064a9b] hover:text-[#064a9b] transition-all flex items-center justify-center gap-2 group-hover/btn">
                                                {isEn ? "Details" : "详情"}
                                                <MdArrowForward className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                          </button>
                                    </Link>

                                    <button onClick={() => setShowModal(true)} className="w-full py-1 md:py-2.5 rounded-lg bg-[#064a9b] text-white text-xs font-bold shadow-md hover:bg-[#053a7a] hover:shadow-lg transition-all">
                                          {isEn ? "Get Quote" : "询价"}
                                    </button>

                              </div>
                        </div>
                  </div>
                  {showModal && <SendQuoteModal locale={locale} product={product} onClose={() => setShowModal(false)} />}
            </motion.div>
      );
};

export default ProductCard;