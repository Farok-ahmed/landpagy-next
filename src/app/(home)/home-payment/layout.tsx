import HeaderThree from "@/components/Layout/Header/HeaderThree";
import FooterPayment from "@/components/Layout/Footer/FooterPayment";

export default function HomePaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderThree />
      {children}
      <FooterPayment />
    </>
  );
}
