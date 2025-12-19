"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  MdOutlineKeyboardDoubleArrowDown, 
  MdArrowBackIos, 
  MdArrowForwardIos 
} from "react-icons/md";
import Link from "next/link";

// 1. Next Arrow (Stays on the far right)
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-10 left-16 md:left-28 z-20 -translate-y-1/2 cursor-pointer p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full text-white transition-all duration-300 shadow-lg"
      onClick={onClick}
    >
      <MdArrowForwardIos size={20} />
    </div>
  );
};

// 2. Prev Arrow (Moved to the left side, sitting next to the Next arrow)
const PrevArrow = ({ onClick }) => {
  return (
    <div
      // Changed 'left-4' to 'left-16' (mobile) and 'left-24' (desktop) to group them
      className="absolute bottom-10 left-2 md:left-10 z-20 -translate-y-1/2 cursor-pointer p-3 pl-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full text-white transition-all duration-300 shadow-lg"
      onClick={onClick}
    >
      <MdArrowBackIos size={20} />
    </div>
  );
};

const Banner = ({ locale, data }) => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 1000,           // Slower speed for smoother transition
    autoplaySpeed: 5000,   // Delay between slides (5 seconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false,   // Keeps sliding on hover
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   // Custom container for the dots (positions them at the bottom)
    appendDots: dots => (
      <div
        style={{
          bottom: "30px", // Adjusts vertical position
        }}
      >
        <ul className="m-0 flex justify-center"> {dots} </ul>
      </div>
    ),

    // Custom actual dot element
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 custom-dot">
        {/* The slider adds a "slick-active" class to the parent <li>, 
            so we use CSS to target the active state below */}
      </div>
    )
  };

  return (
    <div id="banner" className="md:banner overflow-hidden relative group h-screen md:h-[800px]">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {data?.map((slider, i) => {
            return (
              <div
                id="banner_slider"
                key={i}
                className="relative w-full h-screen md:h-[800px] outline-none" // outline-none removes blue click border
              >
                {/* Text Content Overlay */}
                <div className="contain bg-black/50 absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                  {/* pointer-events-none allows clicking through the text layer to the image if needed */}
                  <div className="main_container pt-9 flex justify-center items-center flex-col gap-7 w-full h-full text-white pointer-events-auto">
                    
                    <h2 className="text-3xl md:text-center text-white font-bold md:text-5xl lg:text-6xl capitalize tracking-wide drop-shadow-md">
                      {locale == "en" ? slider?.title_en : slider?.title_cn}
                    </h2>
                    
                    <p className="text-white text-center md:w-2/3 text-sm md:text-xl px-4 drop-shadow-sm font-light">
                      {locale == "en"
                        ? slider?.description_en
                        : slider?.description_cn}
                    </p>
                    
                    <div className="w-full flex items-center justify-center pt-8">
                      <Link href={"/product"}>
                        <button
                          type="button"
                          className="bg-primary hover:bg-blue-700 uppercase font-semibold text-white py-4 px-10 transition-colors duration-300 shadow-lg"
                        >
                          Explore Now
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>

                {/* Background Image */}
                <Image
                  width={1600}
                  height={900}
                  src={`${slider?.image}`}
                  alt="banner-image"
                  className="w-full h-full object-cover"
                  priority={i === 0}
                />

                {/* Scroll Down Indicator */}
                <div className="absolute left-0 bottom-8 flex justify-end w-full z-20">
                  <div className="flex flex-col items-center text-[10px] gap-1 uppercase text-white/80 animate-bounce pr-10">
                    <span className="text-2xl">
                      <MdOutlineKeyboardDoubleArrowDown />
                    </span>
                    <span className="tracking-widest">scroll down</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;