"use client"; // Required for animation
import Image from "next/image";
import { BsBagCheck } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion"; // Import Animation Library

const OurTeam = ({ ourTeamMembers, locale }) => {
  const t = useTranslations('AboutPage');

  // 1. Define Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each card appears 0.2s after the previous
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly lower and invisible
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="py-4 md:py-10">
      <div className="main_container">
        {/* Animate Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7"
        >
          {t(`OurTeam.title`)}
        </motion.h2>

        {/* Animate Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Triggers when 50px of the section is visible
        >
          {ourTeamMembers?.map((item, i) => {
            return (
              <motion.div
                key={i}
                variants={cardVariants} // Apply card animation
                className="shadow md:shadow-lg p-3 md:p-5 rounded md:rounded-md bg-white hover:-translate-y-1 transition-transform duration-300" // Added hover lift and bg-white
              >
                <div className="top flex gap-2 border-b-2 pb-2">
                  <div className="img w-1/3 pr-2">
                    <Image
                      width={100}
                      height={100}
                      src={`${item?.image}`}
                      alt={locale == "en" ? item?.name_en : item?.name_cn}
                      className="w-full aspect-square rounded-full h-full object-cover"
                    />
                  </div>
                  <div className="rr">
                    <h6 className="capitalize font-semibold text-md text-[#29367D]">
                      {locale == "en" ? item?.name_en : item?.name_cn}
                    </h6>
                    <span className="text-[#606060] text-sm ">
                      {locale == "en" ? item?.role : item?.role}
                    </span>
                    <p className="flex items-center gap-1 text-[#60606082] text-sm my-1">
                      <span className="text-[#AEAEAE] font-semibold">
                        <BsBagCheck />
                      </span>
                      <span>
                        {locale == "en" ? item?.experience_en : item?.experience_cn}
                      </span>
                    </p>
                    <p className="flex items-center gap-1 text-[#60606082] text-sm my-1">
                      <span className="text-[#AEAEAE] font-semibold">
                        <IoLanguageOutline />
                      </span>
                      <span>
                        {item?.language?.map((lng, i) => {
                          return <span key={i}>{lng}{i < item.language.length - 1 ? ", " : ""}</span>;
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="flex items-center gap-2 text-[#AEAEAE] text-sm my-1 font-semibold">
                    <span className="text-[#676767] font-semibold">
                      <CiLocationOn />
                    </span>
                    <span>
                      {locale == "en" ? item?.address_en : item?.address_cn}
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-[#AEAEAE] text-sm my-1 font-semibold">
                    <span className="text-[#AEAEAE] font-semibold">
                      <FaGraduationCap />
                    </span>
                    <span>
                      {locale == "en" ? item?.university_en : item?.university_cn}
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;