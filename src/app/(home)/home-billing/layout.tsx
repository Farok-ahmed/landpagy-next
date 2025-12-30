import HeaderOne from "@/components/Layout/Header/HeaderOne";
import FooterBilling from "@/components/Layout/Footer/FooterBilling";

export default function HomeBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterBilling />
    </>
  );
}
