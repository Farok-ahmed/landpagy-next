import AboutCta from "@/components/About/AboutCta";
import AboutOneHero from "@/components/About/AboutOneHero";
import AboutTeam from "@/components/About/AboutTeam";
import AboutTestimonial from "@/components/About/AboutTestimonial";
import OurStory from "@/components/About/OurStory";
import OurValue from "@/components/About/OurValue";
import AboutOneClient from "@/components/Clients/AboutOneClient";
import AboutCounter from "@/components/Counter/AboutCounter";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
;

export default function AboutOne() {
  return (
    <div>
      <HeaderOne />
      <AboutOneHero />
      <AboutCounter />
      <OurStory />
      <AboutTestimonial />
      <OurValue />
      <AboutTeam />
      <AboutOneClient />
      <AboutCta />
      <FooterOne />
    </div>
  );
}
