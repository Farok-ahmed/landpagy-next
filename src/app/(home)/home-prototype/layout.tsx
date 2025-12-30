import HeaderPrototype from "@/components/Layout/Header/HeaderPrototype";
import FooterPrototype from "@/components/Layout/Footer/FooterPrototype";

export default function HomePrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPrototype />
      {children}
      <FooterPrototype />
    </>
  );
}
