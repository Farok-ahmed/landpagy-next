"use client";

import BlogSlider from "@/components/Blog/BlogSlider";
import AppClient from "@/components/Clients/AppClient";
import AppCounter from "@/components/Counter/AppCounter";
import AppDownloadTwo from "@/components/Cta/AppDownloadTwo";
import AppFeature from "@/components/Features/AppFeature";
import AppLandingHero from "@/components/HeroBanner/AppLandingHero";
import FooterApp from "@/components/Layout/Footer/FooterApp";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import AppPrice from "@/components/PricePack/AppPrice";
import AppTestimonial from "@/components/Testimonial/AppTestimonial";
import AppHowItWorks from "@/components/Workflow/AppHowItWorks";
import dynamic from "next/dynamic";
const AppVideo = dynamic(() => import("@/components/Videos/AppVideo"), {
  ssr: false,
});

export default function HomeApp() {
  return (
    <div>
      <HeaderOne />
      <AppLandingHero />
      <AppFeature />
      <AppVideo />
      <AppHowItWorks />
      <AppPrice />
      <AppTestimonial />
      <AppCounter />
      <BlogSlider />
      <AppDownloadTwo />
      <AppClient />
      <FooterApp />
    </div>
  );
}
