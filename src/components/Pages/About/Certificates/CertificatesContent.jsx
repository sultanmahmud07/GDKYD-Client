"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdZoomIn, MdClose, MdVerified } from "react-icons/md";

const CertificatesContent = ({ title, items, locale }) => {
  const [selectedId, setSelectedId] = useState(null);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="main_container">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-3">
            {title}
          </h2>
          <div className="h-1 w-20 bg-[#064a9b] mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items?.map((item, i) => (
            <motion.div
              layoutId={`card-${i}`} // For smooth layout animation
              key={i}
              variants={cardVariants}
              onClick={() => setSelectedId(i)}
              className="group cursor-pointer bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                <Image
                  src={item.image}
                  alt={locale === "en" ? item.name_en : item.name_cn}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#064a9b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center text-white gap-2">
                    <MdZoomIn className="text-4xl" />
                    <span className="text-sm font-medium uppercase tracking-wider">View Full</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 text-center">
                 <div className="flex items-center justify-center gap-1 text-[#064a9b] mb-1">
                    <MdVerified size={14} />
                    <span className="text-xs font-bold uppercase tracking-wide">Certified</span>
                 </div>
                <h4 className="text-[#252B42] font-semibold text-sm md:text-base line-clamp-2">
                  {locale === "en" ? item.name_en : item.name_cn}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedId(null)} // Close on backdrop click
            >
              
              {/* Close Button */}
              <button className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <MdClose size={32} />
              </button>

              {/* Modal Content */}
              <motion.div
                layoutId={`card-${selectedId}`}
                className="relative bg-white p-2 md:p-4 rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
              >
                <div className="relative w-full h-[80vh]">
                    <Image
                    src={items[selectedId].image}
                    alt="Certificate Full View"
                    fill
                    className="object-contain"
                    />
                </div>
                <div className="bg-white pt-3 text-center">
                    <h3 className="text-lg md:text-xl font-bold text-[#252B42]">
                        {locale === "en" ? items[selectedId].name_en : items[selectedId].name_cn}
                    </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CertificatesContent;