import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward, IoMdTime, IoMdCalendar } from "react-icons/io";
import Subscribe from "../../Contact/Subscribe/Subscribe";
import RelatedBlogs from "../RelatadeBlog/RelatedBlogs";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";
import getSingleBlog from "../../../../lib/getSingleBlog";
import getAllBlogs from "../../../../lib/getAllBlogs";
import { getLocale } from "next-intl/server";
import SidebarNews from "./SidebarNews"; // New Component below

const BlogDetails = async ({ slug }) => {
  const blog = await getSingleBlog(slug);
  const allBlogs = await getAllBlogs();
  const locale = await getLocale();
  const isEn = locale === "en";

  // 1. Filter out the current blog
  const currentId = blog?.data?._id;
  const otherBlogs = allBlogs?.data?.filter(
    (item) => item?._id !== currentId
  );

  // 2. Logic: Top 5 for Sidebar, Rest for Bottom
  const sidebarBlogs = otherBlogs?.slice(0, 5) || [];
  const remainingBlogs = otherBlogs?.slice(5) || [];

  // Helper for content rendering
  const content = isEn 
    ? blog?.data?.description_en 
    : blog?.data?.description_cn;
  
  const title = isEn 
    ? blog?.data?.name_en 
    : blog?.data?.name_cn;

  return (
    <div className="bg-white">
      
      {/* --- Header / Breadcrumb --- */}
      <div className="bg-[#F8F9FA] border-b border-gray-100 py-4 md:py-6">
        <div className="main_container">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium mb-3">
            <Link href="/" className="hover:text-[#064a9b]">Home</Link>
            <IoIosArrowForward className="text-gray-400" />
            <Link href="/news" className="hover:text-[#064a9b]">News</Link>
            <IoIosArrowForward className="text-gray-400" />
            <span className="text-[#064a9b] line-clamp-1 max-w-[200px]">{title}</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#252B42] leading-tight">
            {title}
          </h1>
          
          {/* Date / Meta */}
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
             <div className="flex items-center gap-1.5">
                <IoMdCalendar className="text-[#064a9b] text-lg" />
                <span>{new Date(blog?.data?.createdAt || Date.now()).toLocaleDateString()}</span>
             </div>
             <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
             <span>{isEn ? "Industry News" : "行业新闻"}</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="main_container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* LEFT: Article Content (8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* Featured Image */}
            <div className="relative w-full bg-gray-100 rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-sm">
              <Image
                width={1000}
                height={600}
                src={blog?.data?.heading_image}
                alt={title}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Article Text */}
            <div className="blog_content">
              {content?.map((des, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 last:mb-0 font-light"
                >
                  {des}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
             <div className="sticky top-24">
                <SidebarNews blogs={sidebarBlogs} locale={locale} />
             </div>
          </div>

        </div>
      </div>

      {/* --- Bottom: Remaining Blogs --- */}
      {remainingBlogs.length > 0 && (
         <div className="border-t border-gray-100 bg-[#F8FAFB]">
            <RelatedBlogs locale={locale} blogs={remainingBlogs} />
         </div>
      )}

      <GetInTouch locale={locale} />
      <Subscribe />
    </div>
  );
};

export default BlogDetails;