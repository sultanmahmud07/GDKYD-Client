import { useTranslations } from "next-intl";
import Image from "next/image";
import notFoundImg from "../../../../../public/assets/services/product-not-found.png";
import BlogCard from "../BlogShow/BlogCard"; 

const RelatedBlogs = ({ blogs, locale }) => {
  const t = useTranslations("Blog");
  const isEn = locale === "en";

  return (
    <div className="py-10 md:py-16">
      <div className="main_container ">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#252B42]">
             {isEn ? "More Industry Insights" : "更多行业见解"}
          </h2>
          <div className="h-1 w-12 bg-[#064a9b] rounded-full mx-auto mt-3"></div>
        </div>

        {blogs?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => {
              return <BlogCard key={i} locale={locale} blog={blog}></BlogCard>;
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center py-10 opacity-60">
            <Image
              src={notFoundImg}
              alt="not-found"
              width={150}
              className="w-20 md:w-32 grayscale"
            />
            <h3 className="text-lg font-medium text-gray-400">
               No more related news found.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedBlogs;