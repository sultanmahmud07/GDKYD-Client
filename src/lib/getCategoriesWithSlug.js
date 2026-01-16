import { BASEURL } from "../../Constant";

export default async function getCategoriesWithSlug() {
    const result = await fetch(
        `${BASEURL}/category/retrieve/for-sitemap`,
        {
            next: {
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Categories data!")
    }
    return result.json();
}
