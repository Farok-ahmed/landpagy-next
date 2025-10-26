"use client";
import React from "react";
import Image from "next/image";
import bannerShape1Svg from "@/assets/images/blog/banner-shape1.svg";
import bannerShape2Svg from "@/assets/images/blog/banner-shape2.svg";
import bannerShape3Svg from "@/assets/images/blog/banner-shape3.svg";

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
            <Image src={bannerShape1Svg} alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["500px", "0px"]}
            translateY={["-500px", "0px"]}
            rotateY={[0, 0]}
          >
            <Image src={bannerShape2Svg} alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-500px", "0px"]}
            translateY={["500px", "0px"]}
            rotateY={[0, 0]}
          >
            <Image src={bannerShape3Svg} alt="" />
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
