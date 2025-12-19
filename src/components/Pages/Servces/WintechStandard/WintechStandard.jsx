import { useTranslations } from "next-intl";
import WintechStandardContent from "./WintechStandardContent";

// Import your images
import img1 from "../../../../../public/assets/services/standard/1.png";
import img2 from "../../../../../public/assets/services/standard/2.png";
import img3 from "../../../../../public/assets/services/standard/3.png";

const WintechStandard = () => {
  const t = useTranslations('ServicePage');
  const keys = ['item1', 'item2', 'item3'];
  const images = [img1, img2, img3];

  // Map Data Logic
  const itemsData = keys.map((key, i) => ({
    image: images[i],
    title: t(`Wintech.DataList.${key}.title`),
    description: t(`Wintech.DataList.${key}.description`)
  }));

  return (
    <WintechStandardContent 
      title={t(`Wintech.title`)}
      items={itemsData}
    />
  );
};

export default WintechStandard;