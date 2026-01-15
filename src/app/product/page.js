import ServiceFAQ from "../../components/Pages/Servces/ServiceFAQ/ServiceFAQ";
import MachinesCenter from "../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBannerWrapper from "../../components/Pages/Servces/ServiceBanner/ServiceBannerWraper";
import ProductsPageLayout from "../../components/Pages/Products/ProductsPageLayout";
import WintechStandard from "../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner"
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Medical & Face Mask Machinery Manufacturer | KYD",
  description: "KYD supplies medical machinery, face mask, non-woven, packaging, cosmetic care & safety equipment. ISO 13485 certified. Contact us for quotes.",
};
export default async function Page({searchParams}) {
  const banner = await getBanners("services")
  const locale = await getLocale();
 const filters = (await searchParams) || {};
//  console.log("Filter: ", filters)
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBannerWrapper locale={locale} banner={banner?.data}></ServiceBannerWrapper>
      <ProductsPageLayout locale={locale} searchParams={filters}></ProductsPageLayout>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <ServiceFAQ></ServiceFAQ>
      <GetInTouch locale={locale}></GetInTouch>
    </div>
  );
}
