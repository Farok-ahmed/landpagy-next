"use client";
import React from "react";
import Image from "next/image";
import bannerShape9Svg from "@/assets/images/home_6/banner-shape9.svg";
import bannerShape1Svg from "@/assets/images/home_6/banner-shape1.svg";
import bannerShape7Png from "@/assets/images/home_6/banner-shape7.png";
import bannerShape4Svg from "@/assets/images/home_6/banner-shape4.svg";
import bannerShape10Svg from "@/assets/images/home_6/banner-shape10.svg";
import bannerShape5Svg from "@/assets/images/home_6/banner-shape5.svg";
import bannerShape2Png from "@/assets/images/home_6/banner-shape2.png";
import bannerShape6Png from "@/assets/images/home_6/banner-shape6.png";
import bannerShape3Svg from "@/assets/images/home_6/banner-shape3.svg";
import bannerShape8Png from "@/assets/images/home_6/banner-shape8.png";

import { Parallax } from "react-scroll-parallax";

export default function HeroPrototype() {
  return (
    <section className="banner-area-6 bg-proto">
      <div className="banner-shapes">
        <div className="shape wow fadeIn" data-wow-delay="0.2s">
          <Image src={bannerShape1Svg} alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[100, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape2Png} alt="" />
          </Parallax>
        </div>
        <div className="shape wow fadeInLeft">
          <Image src={bannerShape3Svg} alt="shapes" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.4s">
          <Image src={bannerShape4Svg} alt="" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.6s">
          <Image src={bannerShape5Svg} alt="" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["30px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape6Png} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={bannerShape7Png} alt="" />
        </div>
        <div className="shape">
          <Image src={bannerShape8Png} alt="" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.2s">
          <Image src={bannerShape9Svg} alt="shapes" />
        </div>
        <div className="shape wow fadeInRight">
          <Image src={bannerShape10Svg} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-lg-10 offset-lg-1">
            <div className="text-center banner-center">
              <h1 className="banner-title wow fadeInDown" data-wow-delay="0.2s">
                Prototype, wireframe & collaboration. All-in-one.
              </h1>
              <p className="banner-para wow fadeInDown" data-wow-delay="0.3s">
                Creating wireframes/interactive prototypes with built-in widgets
                and templates, by simply drag-and-drop.
              </p>
              <form className="form-group fadeInUp" data-wow-delay="0.4s">
                <input type="email" placeholder="Enter your email address " />
                <button type="submit" className="btn btn-yellow">
                  Try Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
