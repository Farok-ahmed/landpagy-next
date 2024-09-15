import CtaOne from "@/components/Cta/CtaOne";
import FaqTwo from "@/components/Faqs/FaqTwo";
import FeatureFour from "@/components/Features/FeatureFour";
import OutstandingFeatures from "@/components/Features/OutstandingFeatures";
import HeroBannerTwo from "@/components/HeroBanner/HeroBannerTwo";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import PriceOne from "@/components/PricePack/PriceOne";
import TestimonialsSlideTwo from "@/components/Testimonial/TestimonialsSlideTwo";
// import AboutVideo from "@/components/Videos/AboutVideo";
import React from "react";

export default function HomeSc() {
  return (
    <div>
      <HeaderOne />
      <HeroBannerTwo />
      {/* <AboutVideo /> */}
      <OutstandingFeatures />
      <FeatureFour />
      <PriceOne hasShapes={true} />
      <TestimonialsSlideTwo />
      <FaqTwo />
      <CtaOne />
      <FooterTwo />
    </div>
  );
}
