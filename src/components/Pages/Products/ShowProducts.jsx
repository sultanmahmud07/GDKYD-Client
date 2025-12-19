"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import notFoundImg from "../../../../public/assets/services/product-not-found.png";
import ProductCard from "../Home/TopProducts/ProductCard";
import { MdGridView, MdFilterList } from "react-icons/md"; // Icons
import { motion, AnimatePresence } from "framer-motion";

const ShowProducts = ({ products, locale }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // 9 looks better in a 3-column grid

  // Reset page when products array changes (e.g. filter change)
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of product grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isEn = locale === 'en';

  return (
    <div className="flex flex-col gap-6">
        
        {/* 1. Results Header Bar */}
        {products?.length > 0 && (
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MdGridView className="text-[#064a9b] text-lg" />
                    <span>
                        {isEn ? "Showing" : "显示"} <span className="font-bold text-[#252B42]">{indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)}</span> {isEn ? "of" : "个，共"} <span className="font-bold text-[#252B42]">{products.length}</span> {isEn ? "results" : "个结果"}
                    </span>
                </div>
                {/* Optional: Add Sort Dropdown here later */}
                <div className="hidden sm:block text-xs text-gray-400">
                   {isEn ? "Default Sorting" : "默认排序"}
                </div>
            </div>
        )}

        {/* 2. Product Grid */}
        {products?.length > 0 ? (
          <>
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                  {currentProducts.map((product, i) => (
                    <ProductCard 
                        key={product._id || i} // Use ID if available
                        locale={locale} 
                        product={product} 
                        index={i} // Pass index for staggered animation
                    />
                  ))}
              </AnimatePresence>
            </motion.div>

            {/* 3. Modern Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-200">
                        {/* Prev Button */}
                        <button 
                             disabled={currentPage === 1}
                             onClick={() => handlePageChange(currentPage - 1)}
                             className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
                        >
                            &larr;
                        </button>

                        {/* Number Buttons */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    currentPage === i + 1 
                                    ? "bg-[#064a9b] text-white shadow-md scale-105" 
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button 
                             disabled={currentPage === totalPages}
                             onClick={() => handlePageChange(currentPage + 1)}
                             className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col gap-6 items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
            <Image
              src={notFoundImg}
              alt="not-found-image"
              width={200}
              className="w-24 md:w-32 opacity-80"
            />
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#252B42] mb-2">
                  {isEn ? "No Products Found" : "未找到产品"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {isEn ? "Try adjusting your category filter." : "请尝试调整分类筛选。"}
                </p>
            </div>
          </div>
        )}
      </div>
  );
};

export default ShowProducts;