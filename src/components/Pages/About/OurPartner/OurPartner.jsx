"use client";
import PartnerCard from "./PartnerCard";

const OurPartner = ({ ourPartners, locale }) => {
  // 1. Split data into two rows
  const half = Math.ceil(ourPartners?.length / 2);
  const firstRow = ourPartners?.slice(0, half) || [];
  const secondRow = ourPartners?.slice(half) || [];

  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      {/* <div className="main_container mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#070F11]">
          Our Partners
        </h2>
        <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
      </div> */}

      <div className="flex flex-col gap-6 md:gap-10 relative">
        
        {/* --- ROW 1: Slides Left --- */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks (Optional: Fades the edges) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* Render items twice to create seamless loop */}
            {[...firstRow, ...firstRow].map((part, i) => (
              <PartnerCard key={`row1-${i}`} part={part} locale={locale} />
            ))}
          </div>
        </div>

        {/* --- ROW 2: Slides Right --- */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {/* Render items twice to create seamless loop */}
            {[...secondRow, ...secondRow].map((part, i) => (
              <PartnerCard key={`row2-${i}`} part={part} locale={locale} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPartner;