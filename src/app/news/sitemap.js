import { BASEURL } from "../../../Constant";

// Function to fetch products from your API
async function getNews() {
  const result = await fetch(`${BASEURL}/blog/all`);

  if (!result.ok) {
    throw new Error("There was an error fetching news for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const newsData = await getNews();

  return newsData?.data?.map((news) => ({
    url: `https://gdkyd.com/news/${news?.slug || news?.id}`,
    // lastModified: product?.createdAt,
  }));
}