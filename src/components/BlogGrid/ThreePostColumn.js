import Image from "next/image";
import Link from "next/link";

import blogGridPost7 from "@/assets/images/blog_grid/blog_grid_post7.jpg";
import author1 from "@/assets/images/blog_grid/author_1.jpg";
import blogGridPost8 from "@/assets/images/blog_grid/blog_grid_post8.jpg";
import author2 from "@/assets/images/blog_grid/author_2.jpg";
import blogGridPost9 from "@/assets/images/blog_grid/blog_grid_post9.jpg";
import author3 from "@/assets/images/blog_grid/author_3.jpg";
;

export default function ThreePostColumn() {
  return (
    <section className="doc_blog_grid_area_two">
      <div className="container blog-grid-container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="blog_grid_post shadow-sm wow fadeInUp">
              <Image src={blogGridPost7} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <Link href="/">18 Min Read</Link>
                  <Link href="/" className="c_blue">
                    WordPress
                  </Link>
                </div>
                <Link href="/">
                  <h4 className="b_title">
                    Create A WordPress Multi Step Form With weForms
                  </h4>
                </Link>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author1} alt="" />
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
              <Image src={blogGridPost8} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <Link href="/">18 Min Read</Link>
                  <Link href="/" className="orange">
                    Docy
                  </Link>
                </div>
                <Link href="/">
                  <h4 className="b_title">
                    How to Create GDPR Consent Form In WordPress
                  </h4>
                </Link>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author2} alt="" />
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
              <Image src={blogGridPost9} alt="" />
              <div className="grid_post_content">
                <div className="post_tag">
                  <Link href="/">10 Min Read</Link>
                  <Link href="/" className="cat-laravel">
                    Laravel
                  </Link>
                </div>
                <Link href="/">
                  <h4 className="b_title">
                    Create Conditional Logic Forms & Publish
                  </h4>
                </Link>
                <p>
                  The pressure to keep our skills sharp is constant. Mastering
                  new skills may...
                </p>
                <div className="media post_author">
                  <div className="round_img">
                    <Image src={author3} alt="" />
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
            <Link href="/" className="doc_border_btn all_doc_btn">
              Load More<i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
