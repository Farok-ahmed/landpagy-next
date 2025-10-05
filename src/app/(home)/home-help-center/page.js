import HelpCenterCta from "@/components/Cta/HelpCenterCta";
import FaqHelp from "@/components/Faqs/FaqHelp";
import CommunityLinks from "@/components/HelpCenter/CommunityLinks";
import HelpCenterMenu from "@/components/HelpCenter/HelpCenterMenu";
import HelpFeature from "@/components/HelpCenter/HelpFeature";
import HelpCenterHero from "@/components/HeroBanner/HelpCenterHero";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import HelpTestimonial from "@/components/Testimonial/HelpTestimonial";
import dynamic from "next/dynamic";
import React from "react";
const HelpDoc = dynamic(() => import("@/components/HelpCenter/HelpDoc"), {
  ssr: false,
});

export default function HomeHelpCenter() {
  return (
    <div>
      <HeaderOne />
      <HelpCenterHero />
      <HelpCenterMenu />
      <HelpDoc />
      <HelpFeature />
      <CommunityLinks />
      <FaqHelp />
      <HelpTestimonial />
      <HelpCenterCta />
      <FooterOne />
    </div>
  );
}
