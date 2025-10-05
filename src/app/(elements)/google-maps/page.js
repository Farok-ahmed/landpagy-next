import ContactMap from "@/components/Contacts/ContactMap";
import OfficeAddress from "@/components/Contacts/OfficeAddress";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function GoogleMaps() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Google Maps" />
      <ContactMap />
      <OfficeAddress />
    </ElementsLayout>
  );
}
