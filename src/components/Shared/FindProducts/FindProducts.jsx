import { useTranslations } from "next-intl";
import FindProductsContent from "./FindProductsContent";
// Import a background image (e.g., a photo of your factory or machine)
import ctaBg from "../../../../public/assets/home-img/factory-bg.jpg"; // Update this path

const FindProducts = () => {
  const t = useTranslations('HomePage');

  return (
    <FindProductsContent 
      title={t("FindProduct.title")}
      description={t("FindProduct.description")}
      buttonText={t("FindProduct.button")}
      bgImage={ctaBg} // Pass the image
    />
  );
};

export default FindProducts;