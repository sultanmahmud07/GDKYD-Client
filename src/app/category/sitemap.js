import { BASEURL } from "../../../Constant";

// Function to fetch categories from your API
async function getCategories() {
  const result = await fetch(`${BASEURL}/category/retrieve/for-sitemap`);

  if (!result.ok) {
    throw new Error("There was an error fetching Category for the sitemap");
  }
  return result.json();
}

// Generate the sitemap
export default async function sitemap() {
  const categories = await getCategories();

  return categories?.data?.map((category) => ({
    url: `https://gdkyd.com/category/${category?.slug}`,
    // lastModified: category?.createdAt,
  }));
}