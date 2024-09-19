import AwardArea from "@/components/About/AwardArea";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function FunFacts() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Fun Facts" />
      <AwardArea />
    </ElementsLayout>
  );
}
