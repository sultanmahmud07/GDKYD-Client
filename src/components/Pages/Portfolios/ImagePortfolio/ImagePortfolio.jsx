import getPortfolioImage from "../../../../lib/getPortfolioImage";
import DescriptionText from "./DescriptionText";
import PortfolioGrid from "./PortfolioCard"; 
import { getLocale } from "next-intl/server";

const ImagePortfolio = async () => {
  const portfolioImages = await getPortfolioImage();
  const locale = await getLocale();

  return (
    <div className="py-5 md:py-8 bg-white">
      <div className="main_container">
        <DescriptionText />
        
        {/* The Grid */}
        <PortfolioGrid 
            items={portfolioImages?.data} 
            locale={locale} 
        />
      </div>
    </div>
  );
};

export default ImagePortfolio;