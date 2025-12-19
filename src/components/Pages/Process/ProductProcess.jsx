"use client";
import { useTranslations } from "next-intl";
import img1 from "../../../../public/assets/services/processed/1.jpg";
import img2 from "../../../../public/assets/services/processed/2.jpg";
import img3 from "../../../../public/assets/services/processed/3.jpg";
import img4 from "../../../../public/assets/services/processed/4.jpg";
import Image from "next/image";

const ProductProcesses = () => {
  const t = useTranslations('ServicePage');
  const keys = ['section1', 'section2', 'section3', 'section4'];
  const images = [img1, img2, img3, img4];
  return (
    <div className="main_container py-5 md:py-16">
      <div className="flex flex-col gap-3 md:gap-5">
        {keys?.map((section, index) => {
          // const menuList = t(`Process.${section}.list`);
          const list = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

          return (
            <div
              key={index}
              className={`flex flex-col gap-3 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  width={600}
                  src={images[index]}
                  alt={"Process images"}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full text-[#000000] p-0 md:px-7 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-3 text-secondary">
                {t(`Process.${section}.title`)}
                </h2>
                {/* <ul className="flex flex-col gap-1 md:gap-2 ml-2 md:ml-4">
                  {list.map((item, idx) => (
                    <li className="text-sm md:text-base" key={idx}>
                      {t(`Process.${section}.list.${item}`)}
                    </li>
                  ))}
                </ul> */}
                <p className="my-2 md:my-4 md:text-xl"> {t(`Process.${section}.description`)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductProcesses;
