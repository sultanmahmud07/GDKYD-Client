import { useTranslations } from "next-intl";
import Link from "next/link";

const CustomPartsBanner = () => {
  const t = useTranslations("HomePage");
  return (
   <div id="custom_part" className="relative">
     {/* Video background */}
     <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Ensures video plays inline on mobile devices
        preload="auto" // Preloads video for smoother experience
        aria-label="Background video"
      >
        <source src="/assets/home-img/gdkyd_video.mp4" type="video/mp4" />

        <p>Your browser does not support the video tag.</p>
      </video>
     <div className="bg-[#00000054] relative z-10 py-20 md:py-32 lg:py-40">
     <div className="main_container">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white my-4 md:my-7">
            {t("CustomPart.title")}
          </h2>
          <Link href="/product" passHref>
            <button
              className="font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC] hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF] transition"
              aria-label={t("CustomPart.button")}
            >
              {t("CustomPart.button")}
            </button>
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CustomPartsBanner;
