import AboutPayment from "@/components/About/AboutPayment";
import AppDownload from "@/components/Cta/AppDownload";
import FaqTab from "@/components/Faqs/FaqTab";
import HeroBannerFour from "@/components/HeroBanner/HeroBannerFour";
import IntegrationTwo from "@/components/Integrations/IntegrationTwo";
import FooterPayment from "@/components/Layout/Footer/FooterPayment";
import HeaderThree from "@/components/Layout/Header/HeaderThree";
import NewsLetterTwo from "@/components/NewsLetter/NewsLetterTwo";
import PriceTwo from "@/components/PricePack/PriceTwo";
import ServiceOne from "@/components/Service/ServiceOne";
import DealTab from "@/components/TabSection/DealTab";
import TestimonialSlideFour from "@/components/Testimonial/TestimonialSlideFour";

export default function HomePayment() {
  return (
    <div>
      <HeaderThree />
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
      <FooterPayment />
    </div>
  );
}
