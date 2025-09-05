import React from "react";
import Imgslide from "./homeContent/Imgslide";
import CategorySection from "./homeContent/catagorysection";
import TopDeals from "./homeContent/Topdeals";

import OverviewSection from "./homeContent/OverviewSection";
import WhyBuyOurProduct from "./homeContent/WhyBuyOurProduct";
import AboutSection from "./homeContent/AboutSection";
import Contact from "./homeContent/Contact";

import VendorSection from "./homeContent/BestVendors";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900">
        <Imgslide></Imgslide>
      </div>
      <div>
        <CategorySection></CategorySection>
      </div>
      <div>
        <TopDeals></TopDeals>
      </div>
      <div>
        <OverviewSection></OverviewSection>
      </div>
      <div>
        <WhyBuyOurProduct></WhyBuyOurProduct>
      </div>
      <div>
        <AboutSection></AboutSection>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <VendorSection></VendorSection>
      </div>
    </>
  );
}
