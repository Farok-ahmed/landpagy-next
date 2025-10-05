import AboutHistory from "@/components/About/AboutHistory";
import OurStory from "@/components/About/OurStory";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import React from "react";

export default function TimelineStories() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Stories" />
      <AboutHistory />
      <OurStory />
    </ElementsLayout>
  );
}
