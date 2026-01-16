import { BASEURL } from "../../Constant";

export default async function getAllCategories() {
    const result = await fetch(
        `${BASEURL}/category/all`,
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
// /category/retrieve/for-sitemap