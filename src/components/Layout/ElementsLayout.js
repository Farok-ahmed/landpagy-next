import React from "react";
import HeaderOne from "./Header/HeaderOne";
import ServiceFooter from "./Footer/ServiceFooter";

export default function ElementsLayout({ children }) {
  return (
    <>
      <HeaderOne />
      {children}
      <ServiceFooter />
    </>
  );
}
