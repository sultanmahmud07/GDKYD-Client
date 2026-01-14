import { BASEURL } from "../../../Constant";


// Function to fetch products from your API
async function getProducts() {
  const result = await fetch(`${BASEURL}/product/retrieve/for-sitemap`);

  if (!result.ok) {
    throw new Error("There was an error fetching Product for the sitemap");
  }
  return result.json();
}


// Generate the sitemap
export default async function sitemap() {
  const products = await getProducts();

  return products?.data?.map((product) => ({
    url: `https://gdkyd.com/product/${product.slug}`,
    // lastModified: product?.createdAt,
  }));
}