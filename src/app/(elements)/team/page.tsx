import AboutTeam from "@/components/About/AboutTeam";
import IntuitLeaders from "@/components/About/IntuitLeaders";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function Team() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Team" />
      <IntuitLeaders />
      <AboutTeam />
    </ElementsLayout>
  );
}
