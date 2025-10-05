import ContactMap from "@/components/Contacts/ContactMap";
import ContactOneHero from "@/components/Contacts/ContactOneHero";
import ContactWidgets from "@/components/Contacts/ContactWidgets";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import React from "react";

export default function ContactForms() {
  return (
    <div>
      <HeaderOne />
      <ContactOneHero />
      <ContactWidgets />
      <ContactMap />
      <FooterOne />
    </div>
  );
}
