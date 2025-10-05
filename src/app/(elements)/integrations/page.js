import CloudIntegration from "@/components/Integrations/CloudIntegration";
import IntegrationHRM from "@/components/Integrations/IntegrationHRM";
import IntegrationOne from "@/components/Integrations/IntegrationOne";
import IntegrationTwo from "@/components/Integrations/IntegrationTwo";
import ProtoIntegration from "@/components/Integrations/ProtoIntegration";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function Integrations() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Integrations" />
      <CloudIntegration />
      <IntegrationOne />
      <IntegrationTwo />
      <IntegrationHRM />
      <ProtoIntegration />
    </ElementsLayout>
  );
}
