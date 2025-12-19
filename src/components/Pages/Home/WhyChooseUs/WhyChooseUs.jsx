import React from 'react';
import { useTranslations } from "next-intl";
import WhyChooseUsContent from "./WhyChooseUsContent"; 
// Images
import img1 from "../../../../../public/assets/home-img/why-chose-us/Commitment.svg";
import img2 from "../../../../../public/assets/home-img/why-chose-us/Advanced-Technology.svg";
import img3 from "../../../../../public/assets/home-img/why-chose-us/Expertise.svg";
import img4 from "../../../../../public/assets/home-img/why-chose-us/Tailored-Solutions.svg";
import img5 from "../../../../../public/assets/home-img/why-chose-us/Responsive-Transparent.svg";
import img6 from "../../../../../public/assets/home-img/why-chose-us/Cost-Effective.svg";

const WhyChooseUs = () => {
  const t = useTranslations('HomePage');
  
  // Prepare the data array on the server
  const keys = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'];
  const imageList = [img1, img2, img3, img4, img5, img6];

  // Map keys to an object array to keep the Client Component clean
  const featuresData = keys.map((key, i) => ({
    id: i,
    image: imageList[i],
    title: t(`WhyChoose.Features.${key}.title`),
    description: t(`WhyChoose.Features.${key}.description`)
  }));

  return (
    <div className="py-5 md:py-8 bg-[#E4E5DF]">
      {/* Pass pure data to the client component */}
      <WhyChooseUsContent 
        title={t("WhyChoose.title")}
        buttonText={t("WhyChoose.button")}
        features={featuresData}
      />
    </div>
  );
};

export default WhyChooseUs;