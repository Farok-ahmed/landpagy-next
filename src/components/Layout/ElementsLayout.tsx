;
import ServiceFooter from "./Footer/ServiceFooter";
import HeaderOne from "./Header/HeaderOne";

interface ElementsLayoutProps {
  children: React.ReactNode;
}

export default function ElementsLayout({ children }: ElementsLayoutProps) {
  return (
    <>
      <HeaderOne />
      {children}
      <ServiceFooter />
    </>
  );
}
