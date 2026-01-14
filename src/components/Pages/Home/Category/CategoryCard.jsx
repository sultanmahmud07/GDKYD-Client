"use client"; // Required for animation
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion"; // 1. Import Motion

const CategoryCard = ({ part, locale, index = 0 }) => {
  // Destructure with fallbacks
  const title = locale === "en" ? part?.title_en : part?.title_cn;
  const description = locale === "en" ? part?.description_en : part?.description_cn;
  const imageSrc = part?.image || "/assets/placeholder.jpg";
  const linkHref = part?._id ? `/product/${part._id}` : "/";

  return (
    <motion.div
      className="px-2 h-full md:pb-8 pt-2"
      // 2. Add Entrance Animation Props
      initial={{ opacity: 0, y: 50 }}         // Start: Invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }}      // End: Visible and original position
      viewport={{ once: true, margin: "-50px" }} // Trigger: When 50px of card is visible
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, // Optional: Staggers cards if you pass an 'index' prop
        ease: "easeOut" 
      }}
    >
      <Link href={`/category/${part?.slug || "slug-for-category"}`} className="block h-full">
        <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
            <Image
              width={500}
              height={400}
              src={imageSrc}
              alt={title || "Category Image"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-grow relative">
            
            {/* Category Title */}
            <h3 className="text-xl font-bold text-[#252B42] capitalize mb-2 group-hover:text-[#064a9b] transition-colors line-clamp-1">
              {title || "Unnamed Category"}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 line-clamp-2 mb-4 group-hover:text-gray-600 transition-colors">
              {description || "Discover high-performance machinery engineered for precision and durability."}
            </p>

            {/* Bottom Action Area */}
            <div className="mt-auto flex items-center text-[#064a9b] font-semibold text-sm">
              <span className="mr-2">Explore Products</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <MdArrowForward size={18} />
              </span>
            </div>
            
            {/* Decorative bottom bar - Expanding Effect */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#064a9b] transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;