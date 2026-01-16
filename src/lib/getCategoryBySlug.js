import { BASEURL } from "../../Constant";

export default async function getCategoryBySlug(props) {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/category/slug/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific Category Data!")
    }
    return result.json();
}