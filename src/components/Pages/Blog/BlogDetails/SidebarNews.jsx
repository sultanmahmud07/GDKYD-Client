import Link from "next/link";
import Image from "next/image";
import { MdTrendingUp, MdCalendarToday } from "react-icons/md";

const SidebarNews = ({ blogs, locale }) => {
  const isEn = locale === "en";

  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-lg text-[#252B42] flex items-center gap-2">
          <MdTrendingUp className="text-[#064a9b]" />
          {isEn ? "Latest News" : "最新消息"}
        </h3>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {blogs.map((item, index) => {
          const title = isEn ? item.name_en : item.name_cn;
          
          // Format the date (e.g., "Oct 24, 2024")
          const dateObj = new Date(item.createdAt || Date.now());
          const dateStr = dateObj.toLocaleDateString(isEn ? 'en-US' : 'zh-CN', {
             year: 'numeric',
             month: 'short',
             day: 'numeric'
          });

          return (
            <Link
              key={index}
              href={`/news/${item?.slug || ""}`}
              className="group flex gap-4 p-4 border-b border-gray-50 last:border-0 hover:bg-blue-50/30 transition-colors items-start"
            >
              {/* 1. Image Thumbnail */}
              <div className="relative shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                 <Image
                    src={item.heading_image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              </div>

              {/* 2. Content (Title + Date) */}
              <div className="flex flex-col justify-between h-full gap-1">
                <h4 className="text-sm font-bold text-[#252B42] group-hover:text-[#064a9b] line-clamp-2 leading-tight transition-colors">
                  {title}
                </h4>
                
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                   <MdCalendarToday className="text-[#064a9b] opacity-70" />
                   <span>{dateStr}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
         <Link href="/news" className="text-xs font-bold text-[#064a9b] uppercase tracking-widest hover:underline">
            {isEn ? "View All News" : "查看所有新闻"}
         </Link>
      </div>
    </div>
  );
};

export default SidebarNews;