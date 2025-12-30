import ProtoClient from "@/components/Clients/ProtoClient";
import ProtoCta from "@/components/Cta/ProtoCta";
import FaqProto from "@/components/Faqs/FaqProto";
import ProtoFeature from "@/components/Features/ProtoFeature";
import ProtoFeatureTwo from "@/components/Features/ProtoFeatureTwo";
import HeroPrototype from "@/components/HeroBanner/HeroPrototype";
import ProtoIntegration from "@/components/Integrations/ProtoIntegration";
import ProtoFeatureTab from "@/components/TabSection/ProtoFeatureTab";
import PosTestimonial from "@/components/Testimonial/PosTestimonial";

export default function HomeProtoType() {
  return (
    <>
      <HeroPrototype />
      <ProtoFeatureTab />
      <ProtoFeature />
      <ProtoFeatureTwo />
      <ProtoIntegration />
      <FaqProto />
      <PosTestimonial />
      <ProtoClient />
      <ProtoCta />
    </>
  );
}
