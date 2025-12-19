"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ImQuotesRight } from "react-icons/im"; // Changed to Right quote for watermark
import { TiStarFullOutline } from "react-icons/ti";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

// --- CHILD COMPONENT: Modern Testimonial Card ---
const TestimonialCard = ({ name, des, rating, imgUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxTextLength = 140; // Slightly shorter for cleaner look

  return (
    <div className="px-3 py-4 h-full"> {/* Padding for shadow */}
      <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        
        {/* Watermark Icon (Modern Touch) */}
        <div className="absolute top-6 right-6 text-[#064a9b]/10 text-6xl rotate-12 transition-transform group-hover:rotate-0">
          <ImQuotesRight />
        </div>

        {/* Header: Image & Info */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
            <div className="absolute inset-0 bg-[#064a9b] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <Image
              width={100}
              height={100}
              src={imgUrl || "/assets/placeholder-avatar.png"} // Fallback
              alt={name}
              className="w-full h-full rounded-full object-cover p-1"
            />
          </div>
          <div>
            <h3 className="text-[#252B42] font-bold text-lg leading-tight">{name}</h3>
            {/* Stars */}
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`${i < rating ? "text-yellow-400" : "text-gray-200"} text-sm`}>
                  <TiStarFullOutline />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed italic">
             &quot;{isExpanded || des.length <= maxTextLength
              ? des
              : `${des.slice(0, maxTextLength)}...`} &quot;
          </p>
          
          {des.length > maxTextLength && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-xs font-bold text-[#064a9b] uppercase tracking-wider hover:text-[#053a7a] transition-colors"
            >
              {isExpanded ? "Read Less" : "Read Full Review"}
            </button>
          )}
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#064a9b] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const TestimonialSlider = ({ keys, images, title, description }) => {
  const t = useTranslations('HomePage');
  const sliderRef = useRef(null);

  // Settings
  const settings = {
    dots: false, // Clean look, no dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // We use custom external arrows
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 md:py-20 bg-[#F9FAFB]">
      <div className="main_container">
        
        {/* Header Section: Title + Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-3">
              {title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Custom Navigation Buttons (Top Right) */}
          <div className="flex gap-3 justify-center md:justify-end">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300 shadow-sm"
              aria-label="Previous"
            >
              <MdArrowBack size={22} />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#064a9b] hover:text-white hover:border-[#064a9b] transition-all duration-300 shadow-sm"
              aria-label="Next"
            >
              <MdArrowForward size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="-mx-3"> {/* Negative margin to accommodate card padding */}
          <Slider ref={sliderRef} {...settings}>
            {keys.map((item, i) => {
              const name = t(`Testimonial.testimonialData.${item}.name`);
              const des = t(`Testimonial.testimonialData.${item}.des`);
              // const rating = t(`Testimonial.testimonialData.${item}.rating`) || 5; // Use this if rating is in JSON
              const rating = 5; 
              const imgUrl = images[i];

              return (
                <TestimonialCard
                  key={i}
                  name={name}
                  des={des}
                  rating={rating}
                  imgUrl={imgUrl}
                />
              );
            })}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;