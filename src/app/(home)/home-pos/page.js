import PosBlog from "@/components/Blog/PosBlog";
import PosClient from "@/components/Clients/PosClient";
import PosCta from "@/components/Cta/PosCta";
import PosDownload from "@/components/Cta/PosDownload";
import FaqPos from "@/components/Faqs/FaqPos";
import PosFeatureGroup from "@/components/Features/PosFeatureGroup";
import FeaturePos from "@/components/FeatureWithImg/FeaturePos";
import HeroPos from "@/components/HeroBanner/HeroPos";
import FooterPos from "@/components/Layout/Footer/FooterPos";
import HeaderPos from "@/components/Layout/Header/HeaderPos";
import PosPrice from "@/components/PricePack/PosPrice";
import PosService from "@/components/Service/PosService";
import PosTestimonial from "@/components/Testimonial/PosTestimonial";
;

export default function HomePos() {
  return (
    <div>
      <HeaderPos />
      <HeroPos />
      <FeaturePos />
      <PosFeatureGroup />
      <PosService />
      <PosDownload />
      <PosPrice />
      <PosTestimonial />
      <PosBlog />
      <FaqPos />
      <PosClient />
      <PosCta />
      <FooterPos />
    </div>
  );
}
