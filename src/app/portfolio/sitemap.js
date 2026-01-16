import { BASEURL } from "../../../Constant";

// Function to fetch portfolio items from your API
async function getPortfolio() {
  const result = await fetch(`${BASEURL}/portfolio/all`);

  if (!result.ok) {
    throw new Error("There was an error fetching portfolio items for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const portfolioData = await getPortfolio();

  return portfolioData?.data?.map((portfolio) => ({
    url: `https://gdkyd.com/portfolio/${portfolio?.slug}`,
    // lastModified: product?.createdAt,
  }));
}