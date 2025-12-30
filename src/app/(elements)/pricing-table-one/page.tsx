import FaqOne from "@/components/Faqs/FaqOne";
import PricingOneHero from "@/components/HeroBanner/PricingOneHero";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FourColumnPriceTable from "@/components/TabSection/FourColumnPriceTable";

export default function PricingTableOne() {
  return (
    <>
      <PricingOneHero />
      <FourColumnPriceTable />
      <FaqOne />
      <NewsLetter />
    </>
  );
}
