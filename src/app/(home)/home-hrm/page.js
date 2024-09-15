import DownloadHRM from "@/components/Cta/DownloadHRM";
import FaqHRM from "@/components/Faqs/FaqHRM";
import FeatureHRM from "@/components/Features/FeatureHRM";
import HeroHRM from "@/components/HeroBanner/HeroHRM";
import IntegrationHRM from "@/components/Integrations/IntegrationHRM";
import FooterHRM from "@/components/Layout/Footer/FooterHRM";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import NewsLetterHRM from "@/components/NewsLetter/NewsLetterHRM";
import PriceHRM from "@/components/PricePack/PriceHRM";
import WorkFlowHRM from "@/components/TabSection/WorkFlowHRM";
import TestimonialHRM from "@/components/Testimonial/TestimonialHRM";
import WhyChooseHRM from "@/components/WhyChoose/WhyChooseHRM";
import React from "react";

export default function HomeHrm() {
  return (
    <div>
      <HeaderOne />
      <HeroHRM />
      <TestimonialHRM />
      <FeatureHRM />
      <IntegrationHRM />
      <WorkFlowHRM />
      <DownloadHRM />
      <WhyChooseHRM />
      <PriceHRM />
      <FaqHRM />
      <NewsLetterHRM />
      <FooterHRM />
    </div>
  );
}
