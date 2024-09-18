import AboutCta from "@/components/About/AboutCta";
import AboutHistory from "@/components/About/AboutHistory";
import AboutTwoHero from "@/components/About/AboutTwoHero";
import AwardArea from "@/components/About/AwardArea";
import IntuitLeaders from "@/components/About/IntuitLeaders";
import OurCulture from "@/components/About/OurCulture";
import StatisticsGrid from "@/components/About/StatisticsGrid";
import ServiceFooter from "@/components/Layout/Footer/ServiceFooter";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import React from "react";

export default function AboutTwo() {
  return (
    <div>
      <HeaderOne />
      <AboutTwoHero />
      <AboutHistory />
      <AwardArea />
      <StatisticsGrid />
      <IntuitLeaders />
      <OurCulture />
      <AboutCta />
      <ServiceFooter />
    </div>
  );
}
