;
import ServiceFooter from "./Footer/ServiceFooter";
import HeaderOne from "./Header/HeaderOne";

export default function ElementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderOne />
      {children}
      <ServiceFooter />
    </>
  );
}
