import ServiceClient from "@/components/Clients/ServiceClient";
import ServiceCta from "@/components/Cta/ServiceCta";
import ServiceFooter from "@/components/Layout/Footer/ServiceFooter";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceList from "@/components/Service/ServiceList";
import ServiceTestimonial from "@/components/Testimonial/ServiceTestimonial";
import React from "react";

export default function Service() {
  return (
    <div>
      <HeaderOne />
      <ServiceHero />
      <ServiceList />
      <ServiceClient />
      <ServiceTestimonial />
      <ServiceCta />
      <ServiceFooter />
    </div>
  );
}
