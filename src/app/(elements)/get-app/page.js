import AppDownload from "@/components/Cta/AppDownload";
import AppDownloadTwo from "@/components/Cta/AppDownloadTwo";
import DownloadHRM from "@/components/Cta/DownloadHRM";
import PosDownload from "@/components/Cta/PosDownload";
import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function GetApp() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Get App" />
      <AppDownload />
      <DownloadHRM />
      <AppDownloadTwo hasSpace={true} />
      <PosDownload />
    </ElementsLayout>
  );
}
