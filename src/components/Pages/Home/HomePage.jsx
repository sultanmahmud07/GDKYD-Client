import Banner from "./Banner/Banner"
import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import CngMachines from "./CNGMachins/CngMachins"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
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

const HomePage = async () => {
  const homeBanner = await getHomeBannerData()
  const homePageData = await getHomePageData()
  const locale = await getLocale();
  // console.log("Home_Page_Data:",homeBanner?.data)
  return (
    <div>
      <Banner locale={locale} data={homeBanner?.data}></Banner>
      {/* <CngMachines locale={locale} machines={homePageData?.data?.cnc_machine_parts}></CngMachines> */}
      <ProductCategory locale={locale} categories={homePageData?.data?.cnc_machine_parts}></ProductCategory>
      <TopProducts locale={locale}></TopProducts>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <HowWorks></HowWorks>
      <FeaturedVideoShow locale={locale} videos={homePageData?.data?.featured_video}></FeaturedVideoShow>
      <ClientTestimonial></ClientTestimonial>
      <FAQ></FAQ>
      <GetInTouch locale={locale}></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  )
}

export default HomePage