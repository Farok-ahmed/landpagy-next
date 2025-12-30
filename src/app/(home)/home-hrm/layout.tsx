import HeaderThree from "@/components/Layout/Header/HeaderThree";
import FooterHRM from "@/components/Layout/Footer/FooterHRM";

export default function HomeHrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderThree />
      {children}
      <FooterHRM />
    </>
  );
}
