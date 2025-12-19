"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Using react-icons for cleaner look
import CategoryCard from "./CategoryCard";

const ProductCategory = ({ categories, locale }) => {
  const sliderRef = useRef(null);
  const t = useTranslations('HomePage');

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,               // Slower transition for smoothness
    autoplay: true,           // Enable Auto Sliding
    autoplaySpeed: 4000,      // 4 seconds per slide
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,            // We are using custom external buttons
    pauseOnHover: true,       // Pause when user hovers to read
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Smooth easing function
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,   // Shows part of next slide on mobile
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-8 md:py-16 bg-slate-50">
      <div className="main_container px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end md:mb-10 gap-4">
          
          {/* Title Area */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-2">
              {t(`Category.title`) || "Our Product Categories"}
            </h2>
            <p className="text-gray-500 max-w-lg">
            {t(`Category.description`) || "Explore our comprehensive range of automated machinery solutions designed for efficiency."}
            </p>
          </div>

          {/* Controls Area (Arrows + View All) */}
          <div className="flex items-end flex-col gap-4">
            {/* Custom Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300"
                aria-label="Previous Slide"
              >
                <MdArrowBack size={20} />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300"
                aria-label="Next Slide"
              >
                <MdArrowForward size={20} />
              </button>
            </div>

            {/* View All Button */}
            <Link href="/products">
              <button className="bg-[#064a9b] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#053a7a] transition-colors shadow-md hidden md:block">
                {t(`Category.button`) || "VIEW ALL CATEGORIES"}
              </button>
            </Link>
          </div>
        </div>

        {/* --- SLIDER SECTION --- */}
        <div className="-mx-3"> {/* Negative margin to offset card padding */}
          <Slider ref={sliderRef} {...settings}>
            {categories?.map((part, i) => {
              return (
                <CategoryCard locale={locale} key={i} part={part} />
              );
            })}
          </Slider>
        </div>

        {/* Mobile View All Button (Only shows on small screens) */}
        <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <button className="bg-[#064a9b] text-white px-8 py-3 rounded-full font-medium shadow-md w-full">
                {t(`Category.button`) || "VIEW ALL CATEGORIES"}
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductCategory;