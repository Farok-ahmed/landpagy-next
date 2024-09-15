import ClientThree from "@/components/Clients/ClientThree";
import ClientTwo from "@/components/Clients/ClientTwo";
import CtaTwo from "@/components/Cta/CtaTwo";
import FeatureWithImgOne from "@/components/FeatureWithImg/FeatureWithImgOne";
// import InnovateCounter from "@/components/Counter/InnovateCounter";
import HeroBannerThree from "@/components/HeroBanner/HeroBannerThree";
import FooterThree from "@/components/Layout/Footer/FooterThree";
import HeaderTwo from "@/components/Layout/Header/HeaderTwo";
import PortFolioWithFilter from "@/components/Portfolios/PortFolioWithFilter";
import TestimonialSlideThree from "@/components/Testimonial/TestimonialSlideThree";
import WorkFlowThree from "@/components/Workflow/WorkFlowThree";

export default function HomeScTwo() {
  return (
    <div>
      <HeaderTwo />
      <HeroBannerThree />
      <ClientTwo />
      <PortFolioWithFilter />
      <ClientThree />
      <WorkFlowThree />
      {/* <InnovateCounter /> */}
      <FeatureWithImgOne />
      <TestimonialSlideThree />
      <CtaTwo />
      <FooterThree />
    </div>
  );
}
