import Link from "next/link";
import React from "react";
import PageMenu from "./PageMenu/PageMenu";
import ImagePortfolio from "./ImagePortfolio/ImagePortfolio";
import Honor from "../About/Honor/Honor";
import { getLocale } from "next-intl/server";
import getHonors from "../../../lib/getHonors";

const Portfolio = async () => {
  const honorsData = await getHonors();
  const locale = await getLocale();
  const menus = [
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 1,
      name: "Video",
      link: "/portfolio/video",
    }
  ];
  return (
    <div className="portfolio_section">
      <PageMenu menus={menus}></PageMenu>
      <ImagePortfolio></ImagePortfolio>
      <Honor honors={honorsData?.data} locale={locale}></Honor>
    </div>
  );
};

export default Portfolio;
