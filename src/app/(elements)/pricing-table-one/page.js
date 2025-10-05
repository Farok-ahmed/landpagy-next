import FaqOne from "@/components/Faqs/FaqOne";
import PricingOneHero from "@/components/HeroBanner/PricingOneHero";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FourColumnPriceTable from "@/components/TabSection/FourColumnPriceTable";
import React from "react";

export default function PricingTableOne() {
  return (
    <div>
      <HeaderOne />
      <PricingOneHero />
      <FourColumnPriceTable />
      <FaqOne />
      <NewsLetter />
      <FooterOne />
    </div>
  );
}
