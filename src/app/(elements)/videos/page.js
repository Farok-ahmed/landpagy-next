import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import dynamic from "next/dynamic";
const AboutVideo = dynamic(() => import("@/components/Videos/AboutVideo"), {
  ssr: false,
});
const AppVideo = dynamic(() => import("@/components/Videos/AppVideo"), {
  ssr: false,
});
const TestimonialHRM = dynamic(
  () => import("@/components/Testimonial/TestimonialHRM"),
  {
    ssr: false,
  }
);

export default function Videos() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Videos" />
      <AboutVideo />
      <AppVideo />
      <TestimonialHRM />
    </ElementsLayout>
  );
}
