import { useTranslations } from "next-intl";
import CounterSectionContent from "./CounterSectionContent"; 
// Import your background image here
import bgImage from "../../../../../public/assets/home-img/factory-bg.jpg"; // Change path to your real image

const CounterSection = () => {
  const t = useTranslations('HomePage');
  const keys = ['counter1', 'counter2', 'counter3', 'counter4'];

  const countersData = keys.map((key) => ({
    name: t(`CounterSection.Counters.${key}.name`),
    countNumber: t(`CounterSection.Counters.${key}.countNumber`)
  }));

  return (
    <section id="CounterSection" className="relative w-full">
       <CounterSectionContent 
          title={t("CounterSection.title")}
          description={t("CounterSection.des")}
          counters={countersData}
          bgImage={bgImage} // Pass the image
       />
    </section>
  );
};

export default CounterSection;