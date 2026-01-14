import { BASEURL } from "../../Constant";

export default async function getSpecificProduct(props) {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/product/slug/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific Product Data!")
    }
    return result.json();
}