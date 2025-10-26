import React from "react";
import Image from "next/image";
import blog_grid_post8Jpg from "@/assets/images/blog_grid/blog_grid_post8.jpg";
import author_2Jpg from "@/assets/images/blog_grid/author_2.jpg";
import author_3Jpg from "@/assets/images/blog_grid/author_3.jpg";
import author_1Jpg from "@/assets/images/blog_grid/author_1.jpg";
import blog_grid_post9Jpg from "@/assets/images/blog_grid/blog_grid_post9.jpg";
import blog_grid_post7Jpg from "@/assets/images/blog_grid/blog_grid_post7.jpg";


export default function ThreePostColumn() {
  return (
    <section className="doc_blog_grid_area_two">
      <div className="container blog-grid-container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="blog_grid_post shadow-sm wow fadeInUp">
              <Image src={blog_grid_post7Jpg} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <a href="/">18 Min Read</a>
                  <a className="c_blue" href="/">
                    WordPress
                  </a>
                </div>
                <a href="/">
                  <h4 className="b_title">
                    Create A WordPress Multi Step Form With weForms
                  </h4>
                </a>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author_1Jpg} alt="" />
                  </div>
                  <div className="media-body author_text">
                    <h4>Jason Response</h4>
                    <div className="date">Sep 14, 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="blog_grid_post shadow-sm wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <Image src={blog_grid_post8Jpg} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <a href="/">18 Min Read</a>
                  <a className="orange" href="/">
                    Docy
                  </a>
                </div>
                <a href="/">
                  <h4 className="b_title">
                    How to Create GDPR Consent Form In WordPress
                  </h4>
                </a>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author_2Jpg} alt="" />
                  </div>
                  <div className="media-body author_text">
                    <h4>Druid Wensleydale</h4>
                    <div className="date">Sep 14, 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="blog_grid_post shadow-sm wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <Image src={blog_grid_post9Jpg} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <a href="/">10 Min Read</a>
                  <a className="cat-laravel" href="/">
                    Laravel
                  </a>
                </div>
                <a href="/">
                  <h4 className="b_title">
                    Create Conditional Logic Forms & Publish
                  </h4>
                </a>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author_3Jpg} alt="" />
                  </div>
                  <div className="media-body author_text">
                    <h4>Douglas Lyphe</h4>
                    <div className="date">Nov 10, 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-12 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <a href="/" className="doc_border_btn all_doc_btn">
              Load More<i className="arrow_right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
