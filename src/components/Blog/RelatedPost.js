import Link from "next/link";
import React from "react";

export default function RelatedPost() {
  return (
    <div className="row mb-20">
      <h4 className="widget-title">Related Post</h4>

      <div className="col-md-6">
        <div className="post-item">
          <img src="/images/blog/post2.jpg" alt="Blog Post" />
          <div className="post-content">
            <Link href="/" className="cate-btn">
              Product Update
            </Link>
            <h4 className="post-title">
              <Link href="/blog-details">
                How Landpagy elevated the design.
              </Link>
            </h4>
            <p className="post-para">
              Cup of char brilliant horse play bro bread sloshed lavatory
              only...
            </p>
            <div className="d-flex justify-content-between">
              <div className="post-author">
                <a href="/" className="auth-name">
                  <i className="far fa-user-circle"></i> Zain Siphron
                </a>
              </div>
              <div className="post-date">
                <p>
                  <i className="far fa-calendar-alt"></i> March 18, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="post-item">
          <img src="/images/blog/post3.jpg" alt="Blog Post" />
          <div className="post-content">
            <a href="/" className="cate-btn">
              Case Study
            </a>
            <h4 className="post-title">
              <Link href="/blog-details">
                How Ceros launched Sketch, Photoshop.
              </Link>
            </h4>
            <p className="post-para">
              Cup of char brilliant horse play bro bread sloshed lavatory
              only...
            </p>
            <div className="d-flex justify-content-between">
              <div className="post-author">
                <a href="/" className="auth-name">
                  <i className="far fa-user-circle"></i> Zain Siphron
                </a>
              </div>
              <div className="post-date">
                <p>
                  <i className="far fa-calendar-alt"></i> March 18, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
