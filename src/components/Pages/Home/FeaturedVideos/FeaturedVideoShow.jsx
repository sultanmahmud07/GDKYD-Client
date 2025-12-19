"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion"; // Optional: For smooth entrance

const FeaturedVideoShow = ({ locale, videos }) => {
  const t = useTranslations("HomePage");

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="main_container">
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#252B42] mb-3">
            {t(`FeaturedVideo.title`)}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:max-w-6xl mx-auto">
          {/* Left Video */}
          <VideoCard 
            src={videos?.left_side_video} 
            label="Machine Operation" 
            delay={0}
          />

          {/* Right Video */}
          <VideoCard 
            src={videos?.right_side_video} 
            label="Factory Tour" 
            delay={0.2}
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturedVideoShow;

// --- Sub-Component: Reusable Video Card ---
const VideoCard = ({ src, delay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source is provided, render nothing or a placeholder
  if (!src) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="w-full"
    >
      <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
        
        {/* 1. Loading Skeleton (Visible until iframe loads) */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-0">
             <svg className="w-12 h-12 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M14 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6Zm-2 2v12H4V8h8Zm2 3.842L21.35 6.7a1 1 0 0 1 1.65.758v9.084a1 1 0 0 1-1.65.758L14 12.158V11.842Z" clipRule="evenodd"/>
             </svg>
          </div>
        )}

        {/* 2. The Iframe */}
        <iframe
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={src}
          title="Featured Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)} // Triggers fade-in when ready
        ></iframe>

        {/* 3. Decorative Hover Border (Optional) */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#064a9b]/30 rounded-2xl pointer-events-none transition-colors duration-300"></div>
      </div>
    </motion.div>
  );
};