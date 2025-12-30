"use client";

import CtaOne from "@/components/Cta/CtaOne";
import FaqTwo from "@/components/Faqs/FaqTwo";
import FeatureFour from "@/components/Features/FeatureFour";
import OutstandingFeatures from "@/components/Features/OutstandingFeatures";
import HeroBannerTwo from "@/components/HeroBanner/HeroBannerTwo";
import PriceOne from "@/components/PricePack/PriceOne";
import TestimonialsSlideTwo from "@/components/Testimonial/TestimonialsSlideTwo";
import dynamic from "next/dynamic";
const AboutVideo = dynamic(() => import("@/components/Videos/AboutVideo"), {
  ssr: false,
});

export default function HomeSc() {
  return (
    <>
      <HeroBannerTwo />
      <AboutVideo />
      <OutstandingFeatures />
      <FeatureFour />
      <PriceOne hasShapes={true} />
      <TestimonialsSlideTwo />
      <FaqTwo />
      <CtaOne />
    </>
  );
}
