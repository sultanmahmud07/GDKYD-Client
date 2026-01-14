"use client";
import { useTranslations } from "next-intl";
import { 
  MdOutlineKeyboardDoubleArrowRight, 
  MdBusiness, 
  MdEngineering, 
  MdEco, 
  MdHandshake, 
  MdTrendingUp, 
  MdGavel, 
  MdDiamond 
} from "react-icons/md";

const WeDo = () => {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-10 md:py-20 bg-[#F9FAFB]">
      <div className="main_container">
        
        {/* --- ROW 1: Introduction (Company & What We Do) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Company */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-[#064a9b] rounded-lg">
                <MdBusiness size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#252B42]">
                {t(`Company.title`)}
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t(`Company.description`)}
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-primary/65 p-6 md:p-8 rounded-2xl shadow-sm text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <MdEngineering size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">
                {t(`WhatWeDo.title`)}
              </h4>
            </div>
            <p className="text-blue-50 leading-relaxed">
              {t(`WhatWeDo.description`)}
            </p>
          </div>
        </div>

        {/* --- ROW 2: Core Values (Split into 4 cards) --- */}
        <div className="mb-6">
           <h4 className="text-xl md:text-2xl font-bold text-[#252B42] mb-4 flex items-center gap-2">
              <MdDiamond className="text-[#064a9b]" />
              {t(`CoreValues.title`)}
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                   <div className="mb-2 text-secondary">
                      <MdOutlineKeyboardDoubleArrowRight size={20} />
                   </div>
                   <p className="font-semibold text-gray-700">
                      {t(`CoreValues.list.para${num}`)}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* --- ROW 3: Information Grid (Sustainability, Partners, Condition, Future) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Sustainability */}
          <InfoCard 
            icon={<MdEco />} 
            title={t(`Sustainability.title`)} 
            desc={t(`Sustainability.description`)} 
            color="text-green-600" 
            bgColor="bg-green-50"
          />

          {/* Our Partner */}
          <InfoCard 
            icon={<MdHandshake />} 
            title={t(`OurPartner.title`)} 
            desc={t(`OurPartner.description`)} 
            color="text-indigo-600" 
            bgColor="bg-indigo-50"
          />

          {/* Future */}
          <InfoCard 
            icon={<MdTrendingUp />} 
            title={t(`Future.title`)} 
            desc={t(`Future.description`)} 
            color="text-purple-600" 
            bgColor="bg-purple-50"
          />

           {/* Condition */}
           <InfoCard 
            icon={<MdGavel />} 
            title={t(`Condition.title`)} 
            desc={t(`Condition.description`)} 
            color="text-orange-600" 
            bgColor="bg-orange-50"
          />
        </div>

        {/* --- ROW 4: Services (Full Width Highlight) --- */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border-t-4 border-[#064a9b] shadow-sm">
          <h4 className="text-2xl font-bold text-[#252B42] mb-4">
            {t(`OurService.title`)}
          </h4>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`OurService.description1`)}
                </p>
                <p className="text-gray-600 leading-relaxed">
                    {t(`OurService.description2`)}
                </p>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
                <h5 className="font-bold text-gray-800 mb-3 uppercase text-sm tracking-wider">Key Services</h5>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{t(`OurService.list.para1`)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{t(`OurService.list.para2`)}</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Helper Component for the Info Grid ---
const InfoCard = ({ icon, title, desc, color, bgColor }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bgColor} ${color} text-xl`}>
                    {icon}
                </div>
                <h4 className="text-lg font-bold text-[#252B42]">{title}</h4>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

export default WeDo;