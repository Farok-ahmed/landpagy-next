import ProtoClient from "@/components/Clients/ProtoClient";
import ProtoCta from "@/components/Cta/ProtoCta";
import FaqProto from "@/components/Faqs/FaqProto";
import ProtoFeature from "@/components/Features/ProtoFeature";
import ProtoFeatureTwo from "@/components/Features/ProtoFeatureTwo";
import HeroPrototype from "@/components/HeroBanner/HeroPrototype";
import ProtoIntegration from "@/components/Integrations/ProtoIntegration";
import FooterPrototype from "@/components/Layout/Footer/FooterPrototype";
import HeaderPrototype from "@/components/Layout/Header/HeaderPrototype";
import ProtoFeatureTab from "@/components/TabSection/ProtoFeatureTab";
import PosTestimonial from "@/components/Testimonial/PosTestimonial";

export default function HomeProtoType() {
  return (
    <div>
      <HeaderPrototype />
      <HeroPrototype />
      <ProtoFeatureTab />
      <ProtoFeature />
      <ProtoFeatureTwo />
      <ProtoIntegration />
      <FaqProto />
      <PosTestimonial />
      <ProtoClient />
      <ProtoCta />
      <FooterPrototype />
    </div>
  );
}
