import ContactBox from "../../components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../../components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner";
import { BASEURL } from "../../../Constant";
import { getLocale } from "next-intl/server";
export const metadata = {
  title: "Contact GDKYD | Non-Woven Medical Equipment & Solutions",
  description: "Get in touch with GDKYD for expert advice on non-woven medical equipment, manufacturing solutions, and industry-leading products. Reach us today for inquiries, support, and business opportunities.",
};
export default async function Page() {
  const banner = await getBanners("contact_us")
  const locale = await getLocale();

  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        } link={"contact"}
      ></ShareBanner>
      <ContactBox locale={locale}></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
