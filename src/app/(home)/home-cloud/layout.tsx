import HeaderOne from "@/components/Layout/Header/HeaderOne";
import CloudFooter from "@/components/Layout/Footer/CloudFooter";

export default function HomeCloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderOne />
      {children}
      <CloudFooter />
    </>
  );
}
