"use client";

import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import DealTab from "@/components/TabSection/DealTab";
import ProtoFeatureTab from "@/components/TabSection/ProtoFeatureTab";
import CloudTestimonial from "@/components/Testimonial/CloudTestimonial";
import WorkFlow from "@/components/Workflow/WorkFlow";
import dynamic from "next/dynamic";
const PortFolioWithFilter = dynamic(
  () => import("@/components/Portfolios/PortFolioWithFilter"),
  {
    ssr: false,
  }
);

export default function Tabs() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Tabs" />
      <WorkFlow />
      <PortFolioWithFilter />
      <DealTab />
      <CloudTestimonial />
      <ProtoFeatureTab />
    </ElementsLayout>
  );
}
