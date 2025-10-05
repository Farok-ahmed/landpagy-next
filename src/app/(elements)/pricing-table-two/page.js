import PricingTwoHero from "@/components/HeroBanner/PricingTwoHero";
import ServiceFooter from "@/components/Layout/Footer/ServiceFooter";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import ComparePriceTable from "@/components/PricePack/ComparePriceTable";
import PosPrice from "@/components/PricePack/PosPrice";
import PriceHRM from "@/components/PricePack/PriceHRM";
import PriceOne from "@/components/PricePack/PriceOne";
import PriceOneWithBg from "@/components/PricePack/PriceOneWithBg";
import PriceTwo from "@/components/PricePack/PriceTwo";
import FourColumnPriceTable from "@/components/TabSection/FourColumnPriceTable";

export default function PricingTableTwo() {
  return (
    <div>
      <HeaderOne pricingTwoMenu={true} />
      <PricingTwoHero />
      <ComparePriceTable />
      <FourColumnPriceTable pricePageTwo={true} />
      <PosPrice hasBG={true} />
      <PriceHRM />
      <PriceOne />
      <PriceOneWithBg />
      <PriceTwo />
      <ServiceFooter />
    </div>
  );
}
