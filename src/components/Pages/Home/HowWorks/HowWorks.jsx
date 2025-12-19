import { useTranslations } from "next-intl";
import HowWorksContent from "./HowWorksContent"; // Import Client Component
import worksImg from "../../../../../public/assets/home-img/work-img/location.webp";

const HowWorks = () => {
  const t = useTranslations('HomePage');
  const keys = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6'];

  // Map translations to data array
  const stepsData = keys.map((key) => ({
    title: t(`HowWork.WorksList.${key}.title`),
    description: t(`HowWork.WorksList.${key}.description`)
  }));

  return (
    <div className="py-8 md:py-16 bg-[#F8F9FA]"> {/* Updated background to a cleaner light gray */}
      <HowWorksContent 
        title={t(`HowWork.title`)}
        steps={stepsData}
        imageSrc={worksImg}
      />
    </div>
  );
};

export default HowWorks;