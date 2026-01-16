import Banner from "./Banner/Banner"
import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import Partners from "./Partner/Partner"
import FAQ from "./FAQ/FAQ"
import ProductCategory from "./Category/ProductCategory"
import FeaturedVideoShow from "./FeaturedVideos/FeaturedVideoShow"
import HowWorks from "./HowWorks/HowWorks"
import ClientTestimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"
import getHomePageData from '../../../lib/getHomePageData';
import getHomeBannerData from '../../../lib/getHomeBannerData';
import { getLocale } from "next-intl/server"
import TopProducts from "./TopProducts/TopProducts"
import getPartners from "../../../lib/getPartners"

const HomePage = async () => {
  const homeBanner = await getHomeBannerData()
  const homePageData = await getHomePageData()
    const partnerData = await getPartners()
  const locale = await getLocale();
  // console.log("Home_Page_Data:",homeBanner?.data)
  return (
    <div>
      <Banner locale={locale} data={homeBanner?.data}></Banner>
      <ProductCategory locale={locale} categories={homePageData?.data?.cnc_machine_parts}></ProductCategory>
      <TopProducts locale={locale}></TopProducts>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <HowWorks></HowWorks>
      <FeaturedVideoShow locale={locale} videos={homePageData?.data?.featured_video}></FeaturedVideoShow>
      <ClientTestimonial></ClientTestimonial>
      <FindProducts></FindProducts>
      <FAQ></FAQ>
      <GetInTouch locale={locale}></GetInTouch>
      <Partners locale={locale} ourPartners={partnerData?.data}></Partners>
    </div>
  )
}

export default HomePage