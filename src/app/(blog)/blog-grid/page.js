import BlogBreadcrumb from "@/components/Blog/BlogBreadcrumb";
import CategoryGrid from "@/components/BlogGrid/CategoryGrid";
import FullWidthPost from "@/components/BlogGrid/FullWidthPost";
import ThreePostColumn from "@/components/BlogGrid/ThreePostColumn";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
;

export default function BlogGrid() {
  return (
    <div>
      <HeaderOne />
      <BlogBreadcrumb />
      <FullWidthPost />
      <CategoryGrid />
      <ThreePostColumn />
      <FooterOne />
    </div>
  );
}
