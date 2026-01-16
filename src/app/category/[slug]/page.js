import FAQ from "../../../components/Pages/Home/FAQ/FAQ";
import MachinesCenter from "../../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBanner from "../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import WintechStandard from "../../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getCategoryBySlug from "../../../lib/getCategoryBySlug"
import getBanners from "../../../lib/getBanner"
import { getLocale } from "next-intl/server";
import ProductsPageLayout from "../../../components/Pages/Products/ProductsPageLayout";

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const category = await getCategoryBySlug(slug)

  return {
    title: category?.data?.metaTitle || category?.data?.name_en,
    description: category?.data?.metaDescription || category?.data?.description_en,
  }
}

export default async function Page({ params, searchParams }) {
  const slug = (await params).slug
  const banner = await getBanners("services")
  const locale = await getLocale();
  const filters = (await searchParams) || {};
  //  console.log("Filter: ", filters)
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        }
        link={"/product"}
      ></ServiceBanner>
      <ProductsPageLayout slug={slug} locale={locale} searchParams={filters}></ProductsPageLayout>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <FAQ></FAQ>
      <GetInTouch locale={locale}></GetInTouch>
    </div>
  );
}
