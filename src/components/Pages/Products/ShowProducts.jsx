"use client";
import Image from "next/image";
import notFoundImg from "../../../../public/assets/services/product-not-found.png";
import ProductCard from "../Home/TopProducts/ProductCard";
import Pagination from "./Pagination"; // Import the new component
import { MdGridView } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ShowProducts = ({ metaData, products, locale }) => {
  const isEn = locale === "en";

  // Calculate indices for "Showing X-Y of Z" based on MetaData
  // currentPage is 1-based index
  const page = Number(metaData?.currentPage) || 1;
  const limit = Number(metaData?.limit) || 10;
  const total = Number(metaData?.totalData) || 0;

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Results Header Bar */}
      {products?.length > 0 && (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MdGridView className="text-[#064a9b] text-lg" />
            <span>
              {isEn ? "Showing" : "显示"}{" "}
              <span className="font-bold text-[#252B42]">
                {startItem}-{endItem}
              </span>{" "}
              {isEn ? "of" : "个，共"}{" "}
              <span className="font-bold text-[#252B42]">{total}</span>{" "}
              {isEn ? "results" : "个结果"}
            </span>
          </div>
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
            <AnimatePresence mode="wait">
              {products.map((product, i) => (
                <ProductCard
                  key={product._id || i}
                  locale={locale}
                  product={product}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* 3. New Pagination Component */}
          {/* We pass the metaData object directly */}
          <Pagination metaData={metaData} />
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
              {isEn
                ? "Try adjusting your category filter."
                : "请尝试调整分类筛选。"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProducts;