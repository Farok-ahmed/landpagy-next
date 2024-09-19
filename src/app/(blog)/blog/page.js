import BlogBreadcrumb from "@/components/Blog/BlogBreadcrumb";
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import Pagination from "@/components/Blog/Pagination";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import React from "react";

export default function Blog() {
  return (
    <div>
      <HeaderOne />
      <BlogBreadcrumb />
      <section className="blog-post-area pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogPosts />
              <Pagination />
            </div>
            <div className="col-lg-4 col-md-6">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
    </div>
  );
}
