import BlogShow from "../../components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import BlogBanner from "../../components/Pages/Blog/BlogBanner/BlogBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllBlogs from "../../lib/getAllBlogs"
import { getLocale } from "next-intl/server";
import getBanners from "../../lib/getBanner"
export const metadata = {
  title: "Blog Hub | Mask Machines & Non-Woven Medical Equipment Manufacturing",
  description: "The latest insights on non-woven medical equipment manufacturing, industry trends, and innovations. Stay updated with news, tips, and advanced solutions from the global market leader.",
};
export default async function Page() {
  const blogsData = await getAllBlogs()
  const banner = await getBanners("blog")
  const locale = await getLocale();
  // console.log("blogsData:", blogsData.data)
  return (
    <div className="">
      <TopGap></TopGap>
     <BlogBanner locale={locale} banner={banner?.data}></BlogBanner>
      <BlogShow blogs={blogsData.data} locale={locale}></BlogShow>
      <GetInTouch locale={locale}></GetInTouch>
      <Subscribe></Subscribe>
    </div>
  );
}
