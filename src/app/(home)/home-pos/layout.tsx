import HeaderPos from "@/components/Layout/Header/HeaderPos";
import FooterPos from "@/components/Layout/Footer/FooterPos";

export default function HomePosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPos />
      {children}
      <FooterPos />
    </>
  );
}
