;
import ServiceFooter from "./Footer/ServiceFooter";
import HeaderOne from "./Header/HeaderOne";

export default function ElementsLayout({ children }) {
  return (
    <>
      <HeaderOne />
      {children}
      <ServiceFooter />
    </>
  );
}
