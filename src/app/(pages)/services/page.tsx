import ServiceClient from "@/components/Clients/ServiceClient";
import ServiceCta from "@/components/Cta/ServiceCta";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceList from "@/components/Service/ServiceList";
import ServiceTestimonial from "@/components/Testimonial/ServiceTestimonial";

export default function Service() {
  return (
    <>
      <ServiceHero />
      <ServiceList />
      <ServiceClient />
      <ServiceTestimonial />
      <ServiceCta />
    </>
  );
}
