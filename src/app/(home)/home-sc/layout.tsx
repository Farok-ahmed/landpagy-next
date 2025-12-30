import HeaderOne from "@/components/Layout/Header/HeaderOne";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";

export default function HomeScLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterTwo />
    </>
  );
}
