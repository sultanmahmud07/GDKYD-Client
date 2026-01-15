import { BASEURL } from "../../../Constant";

// Function to fetch products from your API
async function getCategories() {
  const result = await fetch(`${BASEURL}/category/retrieve/for-sitemap`);

  if (!result.ok) {
    throw new Error("There was an error fetching Product for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const products = await getCategories();

  return products?.data?.map((product) => ({
    url: `https://gdkyd.com/category/${product?.slug || product?.category_id}`,
    // lastModified: product?.createdAt,
  }));
}