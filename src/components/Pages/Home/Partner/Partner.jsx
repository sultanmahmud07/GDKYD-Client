"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Partners = ({ ourPartners, locale }) => {

      // Simple Configuration
      const settings = {
            dots: false,            // No dots at bottom
            infinite: true,         // Loop forever
            speed: 800,             // Animation speed (0.8s)
            slidesToShow: 8,        // Show 5 logos at once
            slidesToScroll: 1,      // Scroll 1 at a time
            autoplay: true,         // Auto play enabled
            autoplaySpeed: 3000,    // Wait 3 seconds before sliding
            arrows: false,          // No Next/Prev buttons
            pauseOnHover: true,     // Stop when user hovers
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: { slidesToShow: 6 }
                  },
                  {
                        breakpoint: 768,
                        settings: { slidesToShow: 6 }
                  },
                  {
                        breakpoint: 480,
                        settings: { slidesToShow: 4 }
                  }
            ]
      };

      return (
            <section className="py-10  bg-white border-t border-gray-50">
                  <div className="main_container">
                        <div className="">
                              <Slider {...settings}>
                                    {ourPartners?.map((partner, i) => {
                                          const name = locale === "en" ? partner?.name_en : partner?.name_cn;
                                          return (
                                                <div key={i} className="px-2 outline-none">
                                                      <div className="h-24 flex items-center justify-center group cursor-pointer">
                                                            <div className="relative w-full h-full max-w-[140px]">
                                                                  <Image
                                                                        src={partner?.image}
                                                                        alt={name}
                                                                        fill
                                                                        className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                                                  />
                                                            </div>
                                                      </div>
                                                </div>
                                          );
                                    })}
                              </Slider>
                        </div>

                  </div>
            </section>
      );
};

export default Partners;