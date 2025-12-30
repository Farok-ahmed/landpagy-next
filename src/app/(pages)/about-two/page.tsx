"use client";

import AboutCta from "@/components/About/AboutCta";
import AboutHistory from "@/components/About/AboutHistory";
import AwardArea from "@/components/About/AwardArea";
import IntuitLeaders from "@/components/About/IntuitLeaders";
import OurCulture from "@/components/About/OurCulture";
import StatisticsGrid from "@/components/About/StatisticsGrid";
import dynamic from "next/dynamic";
const AboutTwoHero = dynamic(() => import("@/components/About/AboutTwoHero"), {
  ssr: false,
});

export default function AboutTwo() {
  return (
    <>
      <AboutTwoHero />
      <AboutHistory />
      <AwardArea />
      <StatisticsGrid />
      <IntuitLeaders />
      <OurCulture />
      <AboutCta />
    </>
  );
}
