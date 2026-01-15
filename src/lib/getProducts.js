import { BASEURL } from "../../Constant";

export default async function getProducts(searchParams, slug) {
    const params = new URLSearchParams();

    // ✅ Required: Always include page and limit (with default values if not set)
    params.set("page", searchParams?.page || "1");
    params.set("limit", searchParams?.limit || "9");

    // ✅ Optional query filters
    if (slug) params.set("category", slug);

    // ✅ Optional query filters
    if (searchParams?.category) params.set("category", searchParams.category);
    const result = await fetch(
        `${BASEURL}/product/all?${params.toString()}`,
        {
            cache: "no-store"
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching all Product Data!")
    }
    return result.json();
}