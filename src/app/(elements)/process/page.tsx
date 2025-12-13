import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import BusinessSteps from "@/components/ProcessComponents/BusinessSteps";
import DeveloperSteps from "@/components/ProcessComponents/DeveloperSteps";
import HiringProcess from "@/components/ProcessComponents/HiringProcess";
import ProcessSteps from "@/components/ProcessComponents/ProcessSteps";
import VerticalProcess from "@/components/ProcessComponents/VerticalProcess";

export default function Process() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Take Control Of Your Business Precess" />
      <ProcessSteps />
      <HiringProcess />
      <VerticalProcess />
      <BusinessSteps />
      <DeveloperSteps />
    </ElementsLayout>
  );
}
