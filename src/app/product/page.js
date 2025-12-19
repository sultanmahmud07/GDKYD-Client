import ServiceFAQ from "../../components/Pages/Servces/ServiceFAQ/ServiceFAQ";
import ServiceMenu from "../../components/Pages/Servces/ServiceMenu";
import AllServices from "../../components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBannerWrapper from "../../components/Pages/Servces/ServiceBanner/ServiceBannerWraper";
import ProductsPageLayout from "../../components/Pages/Products/ProductsPageLayout";
import WintechStandard from "../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getProducts from "../../lib/getProducts"
import getBanners from "../../lib/getBanner"
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Get in Touch with Guangdong KYD - Precision Machinery Leaders",
  description: "Guangdong KYD Company specializes in precision machinery for non-woven products. Browse our range of automatic mask machines, medical gown machines, and more to optimize your manufacturing process.",
};
export default async function Page() {
  const banner = await getBanners("services")
  const locale = await getLocale();

  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBannerWrapper locale={locale} banner={banner?.data}></ServiceBannerWrapper>
      <ProductsPageLayout locale={locale}></ProductsPageLayout>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <ServiceFAQ></ServiceFAQ>
      <GetInTouch locale={locale}></GetInTouch>
    </div>
  );
}
