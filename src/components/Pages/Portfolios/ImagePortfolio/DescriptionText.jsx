import { useTranslations } from "next-intl";

const DescriptionText = () => {
        const t = useTranslations('Portfolio');
  return (
    <p className='my-5 md:my-12'> {t(`Photos.description`)}</p>
  )
}

export default DescriptionText;