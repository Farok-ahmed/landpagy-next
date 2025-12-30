import BlogBreadcrumb from "@/components/Blog/BlogBreadcrumb";
import CategoryGrid from "@/components/BlogGrid/CategoryGrid";
import FullWidthPost from "@/components/BlogGrid/FullWidthPost";
import ThreePostColumn from "@/components/BlogGrid/ThreePostColumn";

export default function BlogGrid() {
  return (
    <>
      <BlogBreadcrumb />
      <FullWidthPost />
      <CategoryGrid />
      <ThreePostColumn />
    </>
  );
}
