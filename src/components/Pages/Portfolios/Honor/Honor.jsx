import { useTranslations } from "next-intl";
import HonorContent from "./HonorContent";

const Honor = ({ honors, locale }) => {
  // Corrected the title key if needed (Honor vs Honer)
  // Assuming "Our Honors" is the intent
  const title = "Our Honors"; 
  
  return (
    <HonorContent 
      title={title}
      honors={honors}
      locale={locale}
    />
  );
};

export default Honor;