import { useTranslations } from "next-intl";
import CertificatesContent from "./CertificatesContent";

const Certificates = ({ certificatesData, locale }) => {
  const t = useTranslations('AboutPage');

  return (
    <CertificatesContent 
      title={t(`Certification.title`)}
      items={certificatesData}
      locale={locale}
    />
  );
};

export default Certificates;