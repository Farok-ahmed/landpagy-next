"use client";

import ClientThree from "@/components/Clients/ClientThree";
import ClientTwo from "@/components/Clients/ClientTwo";
import InnovateCounter from "@/components/Counter/InnovateCounter";
import CtaTwo from "@/components/Cta/CtaTwo";
import FeatureWithImgOne from "@/components/FeatureWithImg/FeatureWithImgOne";
import FooterThree from "@/components/Layout/Footer/FooterThree";
import HeaderTwo from "@/components/Layout/Header/HeaderTwo";
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
    <div>
      <HeaderTwo />
      <HeroBannerThree />
      <ClientTwo />
      <PortFolioWithFilter />
      <ClientThree />
      <WorkFlowThree />
      <InnovateCounter />
      <FeatureWithImgOne />
      <TestimonialSlideThree />
      <CtaTwo />
      <FooterThree />
    </div>
  );
}
