import ClientOne from "@/components/Clients/ClientOne";
import FaqOne from "@/components/Faqs/FaqOne";
import FeatureOne from "@/components/Features/FeatureOne";
import FeatureThree from "@/components/Features/FeatureThree";
// import FeatureTwo from "@/components/Features/FeatureTwo";
import HeroBannerOne from "@/components/HeroBanner/HeroBannerOne";
import IntegrationOne from "@/components/Integrations/IntegrationOne";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import TestimonialSlideOne from "@/components/Testimonial/TestimonialSlideOne";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import WorkFlow from "@/components/Workflow/WorkFlow";
import WorkFlowTwo from "@/components/Workflow/WorkFlowTwo";

export default function Home() {
  return (
    <div>
      <HeaderOne />
      <HeroBannerOne />
      <ClientOne />
      <FeatureOne />
      <WhyChooseOne />
      {/* <FeatureTwo /> */}
      <TestimonialOne />
      <WorkFlow />
      <FeatureThree />
      <WorkFlowTwo />
      <IntegrationOne />
      <TestimonialSlideOne />
      <FaqOne />
      <NewsLetter />
      <FooterOne />
    </div>
  );
}
