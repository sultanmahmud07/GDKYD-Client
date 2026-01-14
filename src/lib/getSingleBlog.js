import { BASEURL } from "../../Constant";

export default async function getSingleBlog(props) {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/blog/slug/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific blog!")
    }
    return result.json();
}