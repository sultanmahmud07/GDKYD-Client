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


export default async function Page({ params }) {
  const slug = (await params).slug
  return (
    <div className="">
      <TopGap></TopGap>
      <BlogDetails slug={slug}></BlogDetails>
    </div>
  );
}
