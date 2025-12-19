"use client"
import { useState } from "react";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import OurPartner from "./OurPartner/OurPartner";
import Honor from "../Portfolios/Honor/Honor";

const AboutMenuTab = ({ locale, ourPartners, ourHonors }) => {
  const menus = [
    {
      id: 1,
      name: "Company profile",
      link: "/about",
    },
    {
      id: 1,
      name: "Partner",
      link: "/about/partner",
    }
  ];
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(menus[0]?.name);

  return (
    <div>
      {/* Tab Menu */}
      <div id="page_menu" className="main_container bg-white p-1 shadow-lg flex">
        {menus?.map((menu, i) => (
          <p
            key={i}
            onClick={() => setActiveTab(menu?.name)}
            className={`py-3 px-6 md:py-5 md:px-10 inline-block cursor-pointer border-l-2 transition-colors font-semibold ${activeTab === menu.name
              ? "text-primary border-primary"
              : "text-secondary  hover:text-primary"
              }`}
          >
            {menu.name}
          </p>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === menus[0].name &&
          <WhoWeAre></WhoWeAre>}
        {activeTab === menus[1].name && <OurPartner locale={locale} ourPartners={ourPartners}></OurPartner>}
      </div>
    </div>
  );
};

export default AboutMenuTab;
