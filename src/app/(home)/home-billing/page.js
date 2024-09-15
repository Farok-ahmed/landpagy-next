import ClientBilling from "@/components/Clients/ClientBilling";
import BillingCta from "@/components/Cta/BillingCta";
import AutomateBilling from "@/components/Features/AutomateBilling";
import BillingModel from "@/components/Features/BillingModel";
import HeroBilling from "@/components/HeroBanner/HeroBilling";
import FooterBilling from "@/components/Layout/Footer/FooterBilling";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import PriceThree from "@/components/PricePack/PriceThree";
import TestimonialBilling from "@/components/Testimonial/TestimonialBilling";
import HowItWorks from "@/components/Workflow/HowItWorks";
import React from "react";

export default function HomeBilling() {
  return (
    <div>
      <HeaderOne />
      <HeroBilling />
      <ClientBilling />
      <HowItWorks />
      <AutomateBilling />
      <BillingModel />
      <TestimonialBilling />
      <PriceThree />
      <BillingCta />
      <FooterBilling />
    </div>
  );
}
