import BlogCard from "./BlogCard";
import Link from "next/link";
import {
  MdPhone,
  MdEmail,
  MdArrowRightAlt,
  MdCategory,
  MdKeyboardArrowRight,
  MdCloudDownload
} from "react-icons/md";
import getCategoriesWithSlug from "../../../../lib/getCategoriesWithSlug";
import DescriptionText from "../../Portfolios/ImagePortfolio/DescriptionText";

const BlogShow = async ({ blogs, locale }) => {
  const allCategories = await getCategoriesWithSlug();
  const isEn = locale === "en";

  return (
    <section className="py-12  bg-[#F8F9FA]">
      <div className="main_container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12">

          {/* --- LEFT SIDE: BLOG GRID (8 cols) --- */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs?.map((blog, i) => (
                <BlogCard key={i} blog={blog} locale={locale} />
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: SIDEBAR (4 cols) --- */}
          <aside className="lg:col-span-4 space-y-8 h-fit sticky top-28">

            {/* Widget 1: Explore Categories */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#252B42]">
                  {isEn ? "Explore Solutions" : "探索解决方案"}
                </h3>
                <MdCategory className="text-gray-300 text-xl" />
              </div>

              <div className="p-3">
                <ul className="flex flex-col">
                  {allCategories?.data?.map((cat, idx) => (
                    <li key={idx}>
                      <Link
                        href={cat?.slug ? `/category/${cat?.slug}` : "#"}
                        className="group flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50/50 transition-colors"
                      >
                        <span className="text-gray-600 font-medium text-sm group-hover:text-[#064a9b] transition-colors">
                          {isEn ? cat.name_en : cat.name_cn}
                        </span>
                        <MdKeyboardArrowRight className="text-gray-300 group-hover:text-[#064a9b] transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Widget 2: Downloads / Brochure */}
            {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/20 transition-all duration-500"></div>

               <MdCloudDownload className="text-4xl text-blue-400 mb-4" />
               
               <h3 className="text-lg font-bold mb-2">
                 {isEn ? "Download Catalog" : "下载产品目录"}
               </h3>
               <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                 {isEn 
                   ? "Get detailed specifications and full product lists in our latest PDF catalog." 
                   : "在我们的最新 PDF 目录中获取详细规格和完整产品列表。"}
               </p>

               <button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors">
                  {isEn ? "Download PDF" : "下载 PDF"}
               </button>
            </div> */}

            {/* Widget 3: Inquiry Box (The Blue Card) */}
            <div className="bg-secondary rounded-2xl shadow-xl shadow-blue-900/10 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-3xl pointer-events-none"></div>

              <h3 className="text-xl text-white font-bold mb-2 relative z-10">
                {isEn ? "Need a Quote?" : "需要报价？"}
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                {isEn
                  ? "Contact our experts for a custom quote on our machinery."
                  : "联系我们的专家获取机械的定制报价。"}
              </p>

              <div
                className="space-y-4 mb-8 relative z-10"
                itemScope
                itemType="https://schema.org/Organization"
              >
                {/* Phone Number */}
                <a
                  href="tel:+8613902617335"
                  className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/5 hover:bg-white/20 transition-colors cursor-pointer"
                  itemProp="telephone"
                >
                  <MdPhone className="text-blue-200" />
                  <span className="text-sm font-medium">+86-13902617335</span>
                </a>

                {/* Email Address */}
                <a
                  href="mailto:kyd@kuaiyuda.com"
                  className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/5 hover:bg-white/20 transition-colors cursor-pointer"
                  itemProp="email"
                >
                  <MdEmail className="text-blue-200" />
                  <span className="text-sm font-medium">kyd@kuaiyuda.com</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center bg-white text-[#064a9b] font-bold py-3 rounded-xl shadow hover:bg-gray-50 hover:scale-[1.02] transition-all"
              >
                {isEn ? "Contact Us" : "联系我们"}
              </Link>
            </div>

          </aside>

        </div>
        <DescriptionText />
      </div>
    </section>
  );
};

export default BlogShow;