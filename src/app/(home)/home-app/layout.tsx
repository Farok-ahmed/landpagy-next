import HeaderOne from "@/components/Layout/Header/HeaderOne";
import FooterApp from "@/components/Layout/Footer/FooterApp";

export default function HomeAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterApp />
    </>
  );
}
