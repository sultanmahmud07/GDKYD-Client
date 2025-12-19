import { useTranslations } from "next-intl";
import FacilitiesContent from "./FacilitiesContent";

// Import your images
import img1 from "../../../../../public/assets/about-img/facilities/1.png";
import img2 from "../../../../../public/assets/about-img/facilities/2.png";
import img3 from "../../../../../public/assets/about-img/facilities/3.png";
import img4 from "../../../../../public/assets/about-img/facilities/4.png";

const Facilities = () => {
  const t = useTranslations('AboutPage');
  const keys = ['item1', 'item2', 'item3', 'item4'];
  const images = [img1, img2, img3, img4];

  // Map Data
  const itemsData = keys.map((key, i) => ({
    image: images[i],
    title: t(`Facilities.Data.${key}.title`)
  }));

  return (
    <FacilitiesContent 
      title={t(`Facilities.title`)}
      items={itemsData}
    />
  );
};

export default Facilities;