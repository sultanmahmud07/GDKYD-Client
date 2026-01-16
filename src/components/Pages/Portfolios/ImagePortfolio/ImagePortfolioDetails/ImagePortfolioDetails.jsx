import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoMdTime, IoMdFolderOpen } from "react-icons/io";
import FindProducts from "../../../../../components/Shared/FindProducts/FindProducts";
import RelatedImagePortfolio from "../RelatedPortfolioImage/RelataedPortfolioImage";

const ImagePortfolioDetails = ({ locale, data, slug }) => {
  const isEn = locale === "en";

  return (
    <div className="bg-white">
      {/* --- Breadcrumb Header --- */}
      <div className="bg-[#F8F9FA] border-b border-gray-100 py-4 md:py-6">
        <div className="main_container px-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium mb-2">
            <Link href="/" className="hover:text-[#064a9b] transition-colors">Home</Link>
            <IoIosArrowForward className="text-gray-400" />
            <Link href="/portfolio" className="hover:text-[#064a9b] transition-colors capitalize">
              Portfolio
            </Link>
            <IoIosArrowForward className="text-gray-400" />
            <span className="text-[#064a9b] line-clamp-1">{isEn ? data?.name_en : data?.name_cn}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#252B42] leading-tight mt-2">
            {isEn ? data?.name_en : data?.name_cn}
          </h1>
        </div>
      </div>

      {/* --- Main Content Layout --- */}
      <div className="main_container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 lg:gap-12">
          
          {/* Left Column (Content) - Takes 8/12 width */}
          <div className="lg:col-span-8">
            
            {/* Main Image */}
            <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
              <Image
                src={data?.image}
                alt={isEn ? data?.name_en : data?.name_cn}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info Bar (Optional metadata) */}
            <div className="flex items-center gap-6 border-b border-gray-100 pb-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <IoMdTime className="text-[#064a9b] text-lg" />
                    <span>{new Date(data?.createdAt || Date.now()).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <IoMdFolderOpen className="text-[#064a9b] text-lg" />
                    <span>Case Study</span>
                </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
               <h3 className="text-xl font-bold text-[#252B42] mb-3">Project Overview</h3>
               <p className="whitespace-pre-line">
                 {isEn ? data?.description_en : data?.description_cn}
               </p>
            </div>
          </div>

          {/* Right Column (Sidebar) - Takes 4/12 width */}
          <aside className="lg:col-span-4">
             {/* Sticky container so it follows scroll */}
            <div className="sticky top-24">
               <RelatedImagePortfolio slug={slug} />
            </div>
          </aside>

        </div>
      </div>

      {/* --- Bottom CTA --- */}
      <div className="border-t border-gray-100 mt-10">
         <FindProducts />
      </div>
    </div>
  );
};

export default ImagePortfolioDetails;