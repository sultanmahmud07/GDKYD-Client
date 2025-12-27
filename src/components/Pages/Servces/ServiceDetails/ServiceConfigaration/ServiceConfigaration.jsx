import Image from "next/image";
import DetailImages from "./DetailImages";
import ProductDetails from "./ProdutcDetails";
import { BASEURL } from "../../../../../../Constant";
import { useTranslations } from "next-intl";

const ServiceConfigaration = ({product, locale}) => {
  const t = useTranslations('ServicePage');
  const isEn = locale === "en";
  return (
    <div className="my-5 md:my-14">
     <div className="main_container">
      <div className="top_section">
       <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <div className="detail_img w-full md:w-2/5">
        <Image
          width={600}
          height={400}
          src={`${product?.images[0]}`}
          alt={locale == "en" ? product?.title_en : product?.title_en}
          className="w-full"
        />
        </div>
        <div className="details_con flex flex-col md:justify-between gap-2 md:gap-3 w-full md:w-3/5">
          {/* Category Label (Optional visual) */}
              <div className="inline-block px-3 py-1 bg-blue-50 text-[#064a9b] text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                {t('ServiceDetail.productInfo') || "Service Overview"}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#252B42] leading-tight">
                {isEn ? product?.title_en : product?.title_cn}
              </h1>

              {/* Description Divider */}
              <div className="w-20 h-1 bg-gray-200 rounded-full mb-6"></div>

              {/* Description Text */}
              <div className="text-gray-600 text-base md:text-lg leading-relaxed ">
                 {isEn ? product?.description_en : product?.description_cn}
              </div>
        <DetailImages productImage={product?.images}></DetailImages>
        </div>
       </div>
      </div>
      <ProductDetails  productInfo={t(`ServiceDetail.productInfo`)} aboutProduct={t(`ServiceDetail.aboutProduct`)} locale={locale} product={product} configurations={product?.configurations}></ProductDetails>
     </div>
    </div>
  )
}

export default ServiceConfigaration