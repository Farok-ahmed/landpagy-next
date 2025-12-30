import HeaderOne from "@/components/Layout/Header/HeaderOne";
import FooterOne from "@/components/Layout/Footer/FooterOne";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterOne />
    </>
  );
}
