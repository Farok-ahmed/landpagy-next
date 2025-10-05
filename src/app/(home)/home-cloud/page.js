"use client";
import React, { useEffect } from "react";
import CloudCounter from "@/components/Counter/CloudCounter";
import CloudCtaTwo from "@/components/Cta/CloudCtaTwo";
import CloudFeature from "@/components/Features/CloudFeature";
import HeroCloud from "@/components/HeroBanner/HeroCloud";
import CloudIntegration from "@/components/Integrations/CloudIntegration";
import CloudFooter from "@/components/Layout/Footer/CloudFooter";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import CloudPrice from "@/components/PricePack/CloudPrice";
import CloudService from "@/components/Service/CloudService";
import CloudTestimonial from "@/components/Testimonial/CloudTestimonial";

export default function HomeCloud() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight;
      const animatables = document.querySelectorAll(".animatable");

      if (animatables.length === 0) {
        window.removeEventListener("scroll", handleScroll);
      }

      animatables.forEach((animatable) => {
        if (
          animatable.getBoundingClientRect().top +
            animatable.clientHeight -
            20 <
          offset
        ) {
          animatable.classList.remove("animatable");
          animatable.classList.add("animatedes");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the animation check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <HeaderOne />
      <HeroCloud />
      <CloudService />
      <CloudFeature />
      <CloudPrice />
      <CloudTestimonial />
      <CloudIntegration />
      <CloudCtaTwo />
      <CloudCounter />
      <CloudFooter />
    </div>
  );
}
