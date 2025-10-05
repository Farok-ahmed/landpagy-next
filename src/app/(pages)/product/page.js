import FooterOne from "@/components/Layout/Footer/FooterOne";
import CareerHeader from "@/components/Layout/Header/CareerHeader";
import ProductFeature from "@/components/Product/ProductFeature";
import ProductHero from "@/components/Product/ProductHero";
import ProductIntegration from "@/components/Product/ProductIntegration";
import React from "react";

export default function Product() {
  return (
    <div>
      <CareerHeader />
      <ProductHero />
      <ProductFeature />
      <ProductIntegration />
      <FooterOne />
    </div>
  );
}
