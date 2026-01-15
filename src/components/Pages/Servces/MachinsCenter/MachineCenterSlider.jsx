"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MdArrowBack, MdArrowForward, MdZoomIn } from "react-icons/md";

// --- SUB-COMPONENT: Image Card ---
const MachineCenterCard = ({ img }) => {
  return (
    <div className="px-1 md:px-3 py-4 h-full">
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6">
          <Image
            width={500}
            height={400}
            src={img}
            alt="Machine Gallery"
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Overlay - Soft Blue Tint */}
          <div className="absolute inset-0 bg-[#064a9b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#064a9b] shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
               <MdZoomIn size={24} />
            </span>
          </div>
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="h-1 w-full bg-gray-50 group-hover:bg-[#064a9b] transition-colors duration-300"></div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const MachineCenterSlider = ({ shortTitle, title, images }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    // Changed bg to Soft Blue-Grey
    <section className="py-12 md:py-20 bg-[#cae3fd] relative overflow-hidden">
      
      {/* Background Decor (Very subtle blobs) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -ml-20 -mb-20 pointer-events-none"></div>

      <div className="main_container relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="text-center md:text-left">
            {/* Short Title: Primary Blue */}
            <h6 className="text-[#064a9b] font-bold uppercase tracking-widest text-sm mb-2">
              {shortTitle}
            </h6>
            {/* Main Title: Dark Secondary */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
              {title}
            </h2>
          </div>

          {/* Navigation Buttons (Updated for Light BG) */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300 shadow-sm"
              aria-label="Previous Slide"
            >
              <MdArrowBack size={20} />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300 shadow-sm"
              aria-label="Next Slide"
            >
              <MdArrowForward size={20} />
            </button>
          </div>
        </div>

        {/* --- SLIDER --- */}
        <div className="-mx-3">
          <Slider ref={sliderRef} {...settings}>
            {images?.map((img, i) => {
              return (
                <MachineCenterCard key={i} img={img} />
              );
            })}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default MachineCenterSlider;