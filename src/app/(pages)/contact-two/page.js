import SocialLinks from "@/components/Blog/SocialLinks";
import ContactTwoFormTab from "@/components/Contacts/ContactTwoFormTab";
import ContactTwoHero from "@/components/Contacts/ContactTwoHero";
import OfficeAddress from "@/components/Contacts/OfficeAddress";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import React from "react";

export default function ContactTwo() {
  return (
    <ElementsLayout>
      <ContactTwoHero />
      <ContactTwoFormTab />
      <OfficeAddress />
      <SocialLinks />
    </ElementsLayout>
  );
}
