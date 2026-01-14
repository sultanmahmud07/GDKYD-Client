"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdZoomIn, MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const HonorContent = ({ title, honors, locale }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); // For Modal
  
  const itemsPerPage = 8; // 8 items looks balanced (2 rows of 4)

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = honors?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((honors?.length || 0) / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of grid slightly
    const element = document.getElementById('honor-grid');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-8  md:py-14 bg-white">
      <div className="main_container">
        
        {/* Title */}
        <div className=" mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#252B42]">
            {title || "Our Honors"}
          </h2>
          <div className="h-1 w-20 bg-[#064a9b] rounded-full"></div>
        </div>

        {/* Grid (Key changes on page change to re-trigger animation) */}
        <div id="honor-grid" className="min-h-[400px]">
            <motion.div
            key={currentPage} 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {currentItems?.map((item, i) => (
                <motion.div
                layoutId={`honor-${indexOfFirstItem + i}`}
                key={i}
                variants={cardVariants}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden border-b border-gray-100">
                    <Image
                    src={item.image}
                    alt={locale === "en" ? item.name_en : item.name_cn}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#064a9b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#064a9b]">
                        <MdZoomIn size={24} />
                    </div>
                    </div>
                </div>

                {/* Text Area */}
                <div className="p-4 text-center relative">
                    {/* Decorative Award Icon */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#E7AA3D] border border-gray-100">
                        <FaAward />
                    </div>
                    
                    <h4 className="mt-2 text-[#252B42] font-semibold text-sm md:text-base capitalize leading-tight line-clamp-2">
                    {locale === "en" ? item.name_en : item.name_cn}
                    </h4>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
                <MdArrowBack />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === i + 1
                    ? "bg-[#064a9b] text-white shadow-lg scale-110"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
                <MdArrowForward />
            </button>
          </div>
        )}

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedItem(null)}
            >
              <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50">
                <MdClose size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-lg overflow-hidden max-w-4xl max-h-[90vh] w-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex-grow h-[70vh] md:h-[80vh] bg-gray-50">
                    <Image
                        src={selectedItem.image}
                        alt="Honor Full View"
                        fill
                        className="object-contain p-4"
                    />
                </div>
                <div className="bg-white p-4 text-center border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-[#E7AA3D] mb-1">
                        <FaAward />
                        <span className="text-xs font-bold uppercase tracking-widest">Honor & Award</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#252B42]">
                        {locale === "en" ? selectedItem.name_en : selectedItem.name_cn}
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

export default HonorContent;