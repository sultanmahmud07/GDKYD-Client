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

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 md:right-10"
      onClick={onClick}
    >
      <MdArrowForwardIos size={24} />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer p-2 pl-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 md:left-10"
      onClick={onClick}
    >
      <MdArrowBackIos size={24} />
    </div>
  );
};

const Banner = ({ locale, data }) => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    
    // 1. Prevents the slider from pausing when you hover
    pauseOnHover: false, 
    
    // 2. Add custom navigation arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="banner" className="md:banner overflow-hidden relative group">
      {/* Added 'relative' and 'group' to main container to help with positioning if needed */}
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {data?.map((slider, i) => {
            return (
              <div
                id="banner_slider"
                key={i}
                className="relative w-full h-screen md:h-full" // Ensure height is defined
              >
                <div className="contain absolute top-0 left-0 w-full h-full z-10">
                  <div className="main_container pt-9 flex justify-center items-center flex-col gap-7 w-full h-full text-white bg-black/20"> 
                    {/* Added slight overlay bg-black/20 for text readability */}
                    
                    <h2 className="text-3xl md:text-center text-white font-bold md:text-4xl lg:text-5xl capitalize ">
                      {locale == "en" ? slider?.title_en : slider?.title_cn}
                    </h2>
                    <p className="text-white text-center md:w-2/3 text-sm md:text-xl px-4">
                      {locale == "en"
                        ? slider?.description_en
                        : slider?.description_cn}
                    </p>
                    <div className="w-full flex items-center justify-center pt-5 md:pt-2">
                      <Link href={"/product"}>
                        <button
                          type="button"
                          className="bg-primary uppercase rounded-none text-white p-4 px-8 hover:bg-primary/80 transition"
                        >
                          Explore Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Image Section */}
                <div className="w-full h-full relative">
                    <Image
                    width={1200}
                    height={800}
                    src={`${slider?.image}`}
                    alt="banner-image"
                    className="w-full h-full object-cover"
                    priority={i === 0} // Good practice: load first image immediately
                    />
                </div>

                <div className="absolute left-0 bottom-4 flex justify-end w-full z-20">
                  <div className="flex flex-col pr-5 md:pr-10 items-center text-[8px] gap-[2px] uppercase text-white animate-bounce">
                    <span id="icon" className="text-xl pb-1">
                      <MdOutlineKeyboardDoubleArrowDown />
                    </span>
                    <span>scroll down</span>
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