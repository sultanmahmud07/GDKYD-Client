"use client"
import Link from "next/link";
import { useState } from "react";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import SendQuoteModal from "../../../Products/SendQuoteModal";

import { FaCloudUploadAlt } from "react-icons/fa";
import { MdSecurity, MdArrowForward } from "react-icons/md";
import { BsFileEarmarkCode } from "react-icons/bs";
const ProductDetails = ({ configurations, product, locale, productInfo, aboutProduct }) => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [showModal, setShowModal] = useState(false)
  // Check if configurations exist
  const configurationsArray = configurations
    ? Object.entries(configurations).map(([key, value]) => ({
      [key]: value,
    }))
    : null;
  // console.log("RRRRRRRRRRRRRRRRRRr", product);
  return (
    <div className="py-3 md:py-5">
      {/* Tabs */}
      <div className="flex gap-2 border-b mb-2 md:mb-6">
        <button
          onClick={() => setActiveTab("introduction")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${activeTab === "introduction"
            ? "bg-[#064a9b] text-white"
            : "bg-[#E4E5DF] text-[#333333]"
            }`}
        >
          Product Introduction
        </button>
        <button
          onClick={() => setActiveTab("related")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${activeTab === "related"
            ? "bg-[#064a9b] text-white"
            : "bg-[#E4E5DF] text-[#333333]"
            }`}
        >
          Related Products
        </button>
      </div>

      {activeTab === "introduction" && (
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          {/* Left Section - Product Details */}
          <div className="w-full md:w-3/5">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 md:mb-4">{productInfo}: <span className="font-bold text-gray-900"> {locale == "en" ? product?.title_en : product?.title_cn}</span></h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600">
              {configurationsArray ? (
                <ul className="space-y-1 md:space-y-2 text-gray-600">
                  {configurationsArray.map((config, index) => (
                    <li key={index} className="capitalize">
                      {Object.keys(config)[0]}:{" "}
                      <span className="text-gray-800">
                        {Object.values(config)[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-red-600">Configurations not found.</p>
              )}
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700">{aboutProduct}:</h4>
              <p className="text-gray-600 mt-2">
                {locale == "en" ? product?.subTitle_en : product?.subTitle_cn}
              </p>
            </div>
          </div>


          {/* Right Section - Smart Quote Widget */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-2 relative overflow-hidden group">

              {/* 1. The "Active" Border Gradient (Hidden by default, shows on hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#064a9b] via-[#4177B7] to-[#064a9b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white rounded-[22px] -z-10"></div>

              {/* 2. Main Content Area */}
              <div className="bg-[#F8FAFC] rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-[#064a9b]/30 group-hover:bg-[#064a9b]/5 transition-all duration-300 p-8 text-center h-full flex flex-col justify-between">

                {/* Top: Icon & Header */}
                <div>
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-[#064a9b] text-4xl shadow-sm border border-blue-50">
                      <FaCloudUploadAlt className="drop-shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    {/* Floating "File" Icon decoration */}
                    <div className="absolute -right-2 -bottom-2 bg-[#252B42] text-white p-1.5 rounded-lg text-xs shadow-md transform rotate-12 group-hover:rotate-0 transition-transform">
                      <BsFileEarmarkCode />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#252B42] mb-1">
                    Instant Quotation
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Upload CAD files for AI-driven pricing
                  </p>

                  {/* File Format Tags (Monospace Tech Look) */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['STEP', 'STP', 'SLDPRT', 'PDF'].map((ext) => (
                      <span key={ext} className="text-[10px] font-mono font-semibold text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-md uppercase tracking-wide">
                        {ext}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Action */}
                <div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full flex items-center justify-center gap-3 bg-[#252B42] hover:bg-[#064a9b] text-white py-4 px-6 rounded-xl font-bold text-base shadow-lg shadow-gray-200 hover:shadow-blue-200 transition-all duration-300 group/btn"
                  >
                    <span>Start Upload</span>
                    <MdArrowForward className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Security Badge (Glassmorphism) */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200/50 backdrop-blur-md rounded-full border border-gray-200/50">
                    <MdSecurity className="text-green-600 text-sm" />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Encrypted & Confidential
                    </span>
                  </div>
                </div>

              </div>

              {/* Modal Render */}
              {showModal && (
                <SendQuoteModal
                  locale={locale}
                  product={product}
                  onClose={() => setShowModal(false)}
                />
              )}

            </div>
          </div>
        </div>
      )}

      {activeTab === "related" && (
        <div className="">
          <h5 className="capitalize font-semibold text-xl md:text-2xl text-black ">here is some Related products:</h5>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
