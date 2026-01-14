import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdCalendarToday } from "react-icons/md";

const BlogCard = ({ blog, locale }) => {
  const isEn = locale === "en";

  // 1. Text Helpers
  const title = isEn ? blog?.name_en : blog?.name_cn;
  
  // Safe extraction of description
  const descriptionRaw = isEn
    ? blog?.description_en
    : blog?.description_cn;
  
  const description = Array.isArray(descriptionRaw) 
    ? descriptionRaw[0] 
    : (typeof descriptionRaw === 'string' ? descriptionRaw : "");

  // 2. Date Formatting (Assumes blog has createdAt, otherwise uses current date)
  const dateObj = new Date(blog?.createdAt || Date.now());
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString(isEn ? 'en-US' : 'zh-CN', { month: 'short' });
  const year = dateObj.getFullYear();

  return (
    <Link 
        href={`/news/${blog?.slug || blog?._id}`}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
    >
      
      {/* --- Image Section --- */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          width={600}
          height={400}
          src={blog?.heading_image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Modern Date Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow-sm rounded-xl px-3 py-2 text-center min-w-[60px]">
             <span className="block text-xl font-bold text-[#064a9b] leading-none">{day}</span>
             <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">{month}</span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col flex-grow p-6">
        
        {/* Meta Line */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-3">
             <MdCalendarToday />
             <span>{year}</span>
             <span className="w-1 h-1 rounded-full bg-gray-300"></span>
             <span>{isEn ? "Company News" : "公司新闻"}</span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-[#252B42] group-hover:text-[#064a9b] transition-colors line-clamp-2 leading-tight mb-3">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {description || (isEn ? "Click to read the full article..." : "点击阅读全文...")}
        </p>

        {/* Footer Link */}
        <div className="flex items-center text-sm font-bold text-[#064a9b] uppercase tracking-wider group/link">
            {isEn ? "Read Article" : "阅读文章"}
            <MdArrowForward className="ml-2 text-lg transform group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>

    </Link>
  );
};

export default BlogCard;