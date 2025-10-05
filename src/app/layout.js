// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

// All CSS
import "../assets/css/scale.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/elegant-icons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "../assets/css/animate.min.css";
import "../assets/scss/style.scss";
import "../assets/css/responsive.css";
import BootstrapClient from "@/utils/BootstrapClient";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title: "Landpagy - Saas & Software Landing Page",
  description: "Bootstrap 5 HTML Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.ico"
        type="image/x-icon"
      />
      <body suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
        <BootstrapClient />
      </body>
    </html>
  );
}
