// components/PartnerCard.jsx
import Image from "next/image";

const PartnerCard = ({ part, locale }) => {
  return (
    // Added w-[250px] (fixed width) and flex-shrink-0
    <div className="w-[200px] md:w-[280px] flex-shrink-0 bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 mx-3">
      <div className="h-[120px] md:h-[160px] relative bg-white flex items-center justify-center p-4">
        <Image
          width={200}
          height={200}
          src={part?.image}
          alt={locale === "en" ? part?.name_en : part?.name_cn}
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-3 bg-[#F9FAFB] border-t border-gray-100 text-center">
        <h3 className="text-xs md:text-base capitalize font-semibold text-[#1A1A1A] truncate">
          {locale === "en" ? part?.name_en : part?.name_cn}
        </h3>
      </div>
    </div>
  );
};

export default PartnerCard;