import BlogDetails from "../../../components/Pages/Blog/BlogDetails/BlogDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSingleBlog from "../../../lib/getSingleBlog";

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const blog = await getSingleBlog(slug);
 
  return {
    title: blog?.data?.metaTitle || blog?.data?.name_en,
    description: blog?.data?.metaDescription,
  }
}
 

export default function Page({params}) {
  return (
    <div className="">
      <TopGap></TopGap>
      <BlogDetails slug={params?.slug}></BlogDetails>
    </div>
  );
}
