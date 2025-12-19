import getPortfolioImage from "../../../../../lib/getPortfolioImage";
import { getLocale } from "next-intl/server";
import PortfolioGrid from "../PortfolioCard";

const RelatedImagePortfolio = async ({ slag }) => {
  const relatedPortfolioImages = await getPortfolioImage();
  const locale = await getLocale();
  const isImage = slag;

  const filteredPortfolios = relatedPortfolioImages?.data?.filter(
    (relatedImage) => relatedImage?._id !== isImage
  );
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <h2 className="text-center text-xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          Other Portfolio
        </h2>
        <div className="md:pb-10 ">
          <PortfolioGrid items={filteredPortfolios} locale={locale}></PortfolioGrid>
        </div>
      </div>
    </div>
  );
};

export default RelatedImagePortfolio;
