import SocialLinks from "@/components/Blog/SocialLinks";
import ContactTwoFormTab from "@/components/Contacts/ContactTwoFormTab";
import ContactTwoHero from "@/components/Contacts/ContactTwoHero";
import OfficeAddress from "@/components/Contacts/OfficeAddress";

export default function ContactTwo() {
  return (
    <>
      <ContactTwoHero />
      <ContactTwoFormTab />
      <OfficeAddress />
      <SocialLinks />
    </>
  );
}
