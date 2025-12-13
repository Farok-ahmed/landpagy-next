import FaqHRM from "@/components/Faqs/FaqHRM";
import FaqOne from "@/components/Faqs/FaqOne";
import FaqPos from "@/components/Faqs/FaqPos";
import FaqTab from "@/components/Faqs/FaqTab";
import FaqTwo from "@/components/Faqs/FaqTwo";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function Accordions() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Accordions" />
      <FaqHRM />
      <FaqTwo />
      <FaqOne />
      <FaqTab />
      <FaqPos />
    </ElementsLayout>
  );
}
