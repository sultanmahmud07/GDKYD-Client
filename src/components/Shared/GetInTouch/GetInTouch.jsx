import { useTranslations } from "next-intl";
import GetInTouchContent from "./GetInTouchContent";

const GetInTouch = ({ locale }) => {
  const t = useTranslations('HomePage');

  // Prepare simple object to pass to client
  const translations = {
    title: t(`ContactForm.title`),
    description: t(`ContactForm.description`),
    office: t(`ContactForm.office`),
    callLabel: t(`ContactForm.ContactInfo.call`),
    wpLabel: t(`ContactForm.ContactInfo.wp`),
    mailLabel: t(`ContactForm.ContactInfo.mail`),
    address: t(`ContactForm.ContactInfo.address`),
    socialText: t(`ContactForm.social`),
  };

  const formLabels = {
    name: t(`ContactForm.FormData.name`),
    phone: t(`ContactForm.FormData.phone`),
    email: t(`ContactForm.FormData.email`),
    product: t(`ContactForm.FormData.product`),
    note: t(`ContactForm.FormData.note`),
  };

  return (
    <GetInTouchContent 
      translations={translations} 
      formLabels={formLabels}
      locale={locale}
    />
  );
};

export default GetInTouch;