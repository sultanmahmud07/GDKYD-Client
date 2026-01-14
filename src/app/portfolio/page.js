import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import { getLocale } from "next-intl/server";
import getBanners from "../../lib/getBanner"
import VideoPortfolio from "../../components/Pages/Portfolios/VideoPortfolio/VideoPortfolio";
import getVideos from "../../lib/getVideos";
import getHonors from "../../lib/getHonors";
import ImagePortfolio from "../../components/Pages/Portfolios/ImagePortfolio/ImagePortfolio";
import Honor from "../../components/Pages/Portfolios/Honor/Honor";

export const metadata = {
  title: "Portfolio Precision Machinery & Medical Equipment Manufacturing",
  description: "Showcase your projects with Guangdong KYD’s professional portfolio. Explore innovative manufacturing solutions, product design, automation, and engineering excellence. Trusted by global clients in the UK, USA, Asia, and Africa.",
};
export default async function Page() {
  const banner = await getBanners("portfolio")
  const honorsData = await getHonors();
  const videos = await getVideos();
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
        }
        link={"portfolio"}
      ></ShareBanner>
      <ImagePortfolio></ImagePortfolio>
      <VideoPortfolio locale={locale} videos={videos?.data}></VideoPortfolio>
      <Honor honors={honorsData?.data} locale={locale}></Honor>
      <FindProducts></FindProducts>
    </div>
  );
}
