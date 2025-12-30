import CareerHeader from "@/components/Layout/Header/CareerHeader";
import FooterOne from "@/components/Layout/Footer/FooterOne";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CareerHeader />
      {children}
      <FooterOne />
    </>
  );
}
