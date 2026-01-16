import { getLocale } from "next-intl/server";
import getCategoriesWithSlug from "../../../lib/getCategoriesWithSlug";
import Link from "next/link";
import { MdSearch, MdKeyboardArrowRight, MdPhone, MdEmail, MdCategory } from "react-icons/md";

const CategorySidebar = async ({ slug }) => {
    const allCategories = await getCategoriesWithSlug();
    const locale = await getLocale();
    const isEn = locale === "en";
// console.log(allCategories)
    return (
        <div className="space-y-6">

            {/* 1. Category Menu */}
            <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">

                {/* Header */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-[#252B42] font-extrabold text-lg tracking-tight flex items-center gap-2">
                        <span className="text-[#064a9b] bg-blue-50 p-1.5 rounded-lg">
                            <MdCategory />
                        </span>
                        {isEn ? "Categories" : "产品分类"}
                    </h3>
                </div>

                {/* Search */}
                <div className="px-5 pt-4 pb-2">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder={isEn ? "Filter products..." : "筛选产品..."}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#064a9b]/20 focus:border-[#064a9b] transition-all"
                        />
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-[#064a9b] transition-colors" />
                    </div>
                </div>

                <ul className="flex flex-col py-2">
                    {allCategories?.data?.map((menu, i) => {
                        const name = isEn ? menu?.name_en : menu?.name_cn;
                        const isActive = slug === menu?.slug; // Check match

                        return (
                            <li key={i}>
                                <Link
                                    href={`/category/${menu?.slug || menu?._id}`}
                                    className={`group relative flex items-center justify-between px-5 py-3.5 transition-all duration-200 ${isActive
                                            ? "text-[#064a9b] bg-gray-50 font-semibold" // Active State
                                            : "text-gray-600 hover:text-[#064a9b] hover:bg-gray-50 font-medium" // Normal State
                                        }`}
                                >
                                    {/* Left active indicator line: Always show if active, otherwise show on hover */}
                                    <span className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#064a9b] transition-transform duration-300 rounded-r-full ${isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                                        }`}></span>

                                    {/* Text: Always shifted if active, otherwise shift on hover */}
                                    <span className={`text-[15px] transition-transform duration-200 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"
                                        }`}>
                                        {name}
                                    </span>

                                    <MdKeyboardArrowRight className={`text-lg transition-colors ${isActive ? "text-[#064a9b]" : "text-gray-300 group-hover:text-[#064a9b]"
                                        }`} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* 2. Contact Widget */}
            <div className="bg-gradient-to-b from-blue-50/50 to-white rounded-2xl p-6 border border-blue-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#064a9b]/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h4 className="text-[#252B42] font-bold text-base mb-2 relative z-10">
                    {isEn ? "Need Help?" : "需要帮助？"}
                </h4>
                <p className="text-gray-500 text-xs mb-5 leading-relaxed relative z-10 px-2">
                    {isEn ? "Contact our experts for a custom quote." : "联系我们的专家获取定制报价。"}
                </p>
                <div className="flex flex-col gap-3 relative z-10">
                    <a href="tel:+8613902617335" className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-gray-200 rounded-xl text-[#064a9b] font-bold text-sm hover:border-[#064a9b] hover:shadow-md transition-all group">
                        <MdPhone className="group-hover:scale-110 transition-transform" />
                        <span>Call Us</span>
                    </a>
                    <a href="mailto:kyd@kuaiyuda.com" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#064a9b] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#053a7a] hover:shadow-lg transition-all">
                        <MdEmail />
                        <span>Email Us</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default CategorySidebar;