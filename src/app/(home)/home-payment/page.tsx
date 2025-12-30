import AboutPayment from "@/components/About/AboutPayment";
import AppDownload from "@/components/Cta/AppDownload";
import FaqTab from "@/components/Faqs/FaqTab";
import HeroBannerFour from "@/components/HeroBanner/HeroBannerFour";
import IntegrationTwo from "@/components/Integrations/IntegrationTwo";
import NewsLetterTwo from "@/components/NewsLetter/NewsLetterTwo";
import PriceTwo from "@/components/PricePack/PriceTwo";
import ServiceOne from "@/components/Service/ServiceOne";
import DealTab from "@/components/TabSection/DealTab";
import TestimonialSlideFour from "@/components/Testimonial/TestimonialSlideFour";

export default function HomePayment() {
  return (
    <>
      <HeroBannerFour />
      <AboutPayment />
      <ServiceOne />
      <DealTab />
      <AppDownload />
      <IntegrationTwo />
      <PriceTwo />
      <TestimonialSlideFour />
      <FaqTab />
      <NewsLetterTwo />
    </>
  );
}
