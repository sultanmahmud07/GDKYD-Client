import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ServiceBanner = ({ bannerBg, title, link, des }) => {
  const t = useTranslations("ServicePage");

  // Safely handle bannerBg and replace spaces with %20 for URL encoding
  const processedBannerBg = bannerBg ? bannerBg.replace(/ /g, "%20") : null;

  return (
    <section>
      <div
        id="service_banner_section"
        className="h-[50vh] md:h-[50vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, #252B42, #00000026), url(${processedBannerBg || "https://via.placeholder.com/150"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="main_container h-full">
          <div className="flex flex-col justify-center h-full w-full md:w-1/2 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-sm md:text-base text-white">
              {des}
            </p>
            <div className="div">
              <Link href={"/contact"} className="inline-block">
                <button href={"/contact"} className="shadow md:shadow-md font-semibold bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF] transition">
                  Get an instant quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_bottom bg-[#064a9b1A] py-3 md:py-5">
        <div className="main_container">
          <p className="flex items-center gap-2 md:font-semibold text-sm">
            <span>Home</span>
            <span>
              <IoIosArrowForward />
            </span>
            <Link className="capitalize" href={link}>
              {link}
            </Link>
          </p>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#064a9b]">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
