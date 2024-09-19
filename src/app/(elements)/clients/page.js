import AboutPayment from "@/components/About/AboutPayment";
import ClientOne from "@/components/Clients/ClientOne";
import ClientThree from "@/components/Clients/ClientThree";
import ClientTwo from "@/components/Clients/ClientTwo";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import AboutVideo from "@/components/Videos/AboutVideo";

export default function Clients() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Clients" />
      <AboutPayment />
      <ClientOne />
      <AboutVideo />
      <ClientTwo />
      <ClientThree />
    </ElementsLayout>
  );
}
