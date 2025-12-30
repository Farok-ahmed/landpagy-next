import HeaderTwo from "@/components/Layout/Header/HeaderTwo";
import FooterThree from "@/components/Layout/Footer/FooterThree";

export default function HomeScTwoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderTwo />
      {children}
      <FooterThree />
    </>
  );
}
