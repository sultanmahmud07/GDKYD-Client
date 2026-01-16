import Link from "next/link";
import Image from "next/image";
import getPortfolioImage from "../../../../../lib/getPortfolioImage";
import { getLocale } from "next-intl/server";
import { MdArrowForward } from "react-icons/md";

const RelatedImagePortfolio = async ({ slag }) => {
  const relatedPortfolioImages = await getPortfolioImage();
  const locale = await getLocale();
  const isEn = locale === "en";

  // 1. Filter out current item
  // 2. Limit to ~4 items so sidebar isn't too long
  const filteredPortfolios = relatedPortfolioImages?.data
    ?.filter((item) => item?._id !== slag)
    .slice(0, 5); 

  if (!filteredPortfolios || filteredPortfolios.length === 0) {
    return null; // Hide section if no related items
  }

  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6">
         <h3 className="text-lg font-bold text-[#252B42]">
           {isEn ? "Related Projects" : "相关案例"}
         </h3>
         <div className="h-1 w-8 bg-[#064a9b] rounded-full"></div>
      </div>

      {/* Vertical List */}
      <div className="flex flex-col gap-5">
        {filteredPortfolios.map((item) => (
          <Link 
            key={item._id} 
            href={`/portfolio/${item.slug}`}
            className="group flex gap-4 items-start"
          >
            {/* Thumbnail */}
            <div className="relative w-24 h-20 shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200">
               <Image
                 src={item?.image}
                 alt={isEn ? item?.name_en : item?.name_cn}
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-110"
               />
            </div>

            {/* Text Info */}
            <div className="flex flex-col">
               <h4 className="text-sm font-bold text-[#252B42] line-clamp-2 leading-tight group-hover:text-[#064a9b] transition-colors mb-1">
                 {isEn ? item?.name_en : item?.name_cn}
               </h4>
               <span className="text-xs text-gray-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case <MdArrowForward />
               </span>
            </div>
          </Link>
        ))}
      </div>

        {/* View All Button */}
        <div className="mt-8 pt-4 border-t border-gray-200">
            <Link 
                href="/portfolio" 
                className="block w-full text-center py-2.5 rounded-lg border border-gray-300 text-sm font-bold text-gray-600 hover:border-[#064a9b] hover:text-[#064a9b] hover:bg-white transition-all"
            >
                {isEn ? "View All Portfolios" : "查看所有案例"}
            </Link>
        </div>
    </div>
  );
};

export default RelatedImagePortfolio;