"use client";

import ClientThree from "@/components/Clients/ClientThree";
import ClientTwo from "@/components/Clients/ClientTwo";
import InnovateCounter from "@/components/Counter/InnovateCounter";
import CtaTwo from "@/components/Cta/CtaTwo";
import FeatureWithImgOne from "@/components/FeatureWithImg/FeatureWithImgOne";
import TestimonialSlideThree from "@/components/Testimonial/TestimonialSlideThree";
import WorkFlowThree from "@/components/Workflow/WorkFlowThree";
import dynamic from "next/dynamic";
const PortFolioWithFilter = dynamic(
  () => import("@/components/Portfolios/PortFolioWithFilter"),
  {
    ssr: false,
  }
);
const HeroBannerThree = dynamic(
  () => import("@/components/HeroBanner/HeroBannerThree"),
  {
    ssr: false,
  }
);

export default function HomeScTwo() {
  return (
    <>
      <HeroBannerThree />
      <ClientTwo />
      <PortFolioWithFilter />
      <ClientThree />
      <WorkFlowThree />
      <InnovateCounter />
      <FeatureWithImgOne />
      <TestimonialSlideThree />
      <CtaTwo />
    </>
  );
}
