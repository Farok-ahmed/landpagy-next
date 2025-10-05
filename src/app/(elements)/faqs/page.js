import FaqsMain from "@/components/Faqs/FaqsMain";
import FaqsSecondary from "@/components/Faqs/FaqsSecondary";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

import React from "react";

export default function Faqs() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb
        wider={true}
        title="Frequently Asked Question"
        description="You can also browse the topics below to find what you are looking for"
      />
      <FaqsMain />
      <FaqsSecondary />
    </ElementsLayout>
  );
}
