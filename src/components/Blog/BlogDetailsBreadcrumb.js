"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function BlogDetailsBreadcrumb() {
  return (
    <section className="blog-banner-area blog-single-banner">
      <div className="banner-shapes">
        <div className="shape">
          <Parallax
            translateX={["-500px", "0px"]}
            translateY={["500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape1.svg" alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["500px", "0px"]}
            translateY={["-500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape2.svg" alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-500px", "0px"]}
            translateY={["500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape3.svg" alt="" />
          </Parallax>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="post-content">
              <a href="/" className="cate-btn">
                Development Tips
              </a>

              <h1 className="banner-title">
                How Landpagy Improved Development Process 10x with Shape Up
              </h1>

              <div className="d-flex">
                <div className="pr-20 post-author">
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
    </section>
  );
}
