import HeaderOne from "@/components/Layout/Header/HeaderOne";
import ServiceFooter from "@/components/Layout/Footer/ServiceFooter";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <ServiceFooter />
    </>
  );
}
