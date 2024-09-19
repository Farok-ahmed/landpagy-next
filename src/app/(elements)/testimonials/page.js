import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import AppTestimonial from "@/components/Testimonial/AppTestimonial";
import CloudTestimonial from "@/components/Testimonial/CloudTestimonial";
import HelpTestimonial from "@/components/Testimonial/HelpTestimonial";
import PosTestimonial from "@/components/Testimonial/PosTestimonial";
import ServiceTestimonial from "@/components/Testimonial/ServiceTestimonial";
import TestimonialBilling from "@/components/Testimonial/TestimonialBilling";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import TestimonialSlideFour from "@/components/Testimonial/TestimonialSlideFour";
import TestimonialSlideOne from "@/components/Testimonial/TestimonialSlideOne";
import TestimonialSlideThree from "@/components/Testimonial/TestimonialSlideThree";
import TestimonialsSlideTwo from "@/components/Testimonial/TestimonialsSlideTwo";
import WhyChooseHRM from "@/components/WhyChoose/WhyChooseHRM";
import React from "react";

export default function Testimonials() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Testimonials" />
      <TestimonialOne />
      <TestimonialSlideOne />
      <TestimonialSlideThree />
      <TestimonialBilling />
      <CloudTestimonial />
      <TestimonialSlideFour />
      <TestimonialsSlideTwo />
      <AppTestimonial />
      <PosTestimonial />
      <WhyChooseHRM />
      <HelpTestimonial />
      <ServiceTestimonial />
    </ElementsLayout>
  );
}
