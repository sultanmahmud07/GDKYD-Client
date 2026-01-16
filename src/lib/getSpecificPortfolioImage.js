import { BASEURL } from "../../Constant";

export default async function getSpecificPortfolioImage(props) {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/portfolio/slug/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific Portfolio Image Data!")
    }
    return result.json();
}