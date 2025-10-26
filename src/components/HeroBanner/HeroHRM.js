"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import bannerShape3Svg from "@/assets/images/home_4/banner-shape-3.svg";
import brand6Svg from "@/assets/images/brand/brand-6.svg";
import bannerManPng from "@/assets/images/home_4/banner-man.png";
import brand11Svg from "@/assets/images/brand/brand-11.svg";
import bannerShape2Svg from "@/assets/images/home_4/banner-shape-2.svg";
import bannerBubbleIcon2Svg from "@/assets/images/home_4/banner-bubble-icon2.svg";
import bannerShape4Svg from "@/assets/images/home_4/banner-shape-4.svg";
import bannerWindow2Png from "@/assets/images/home_4/banner-window2.png";
import bannerBubbleIcon3Svg from "@/assets/images/home_4/banner-bubble-icon3.svg";
import bannerFloorBgPng from "@/assets/images/home_4/banner-floor-bg.png";
import bannerFrame3Png from "@/assets/images/home_4/banner-frame3.png";
import bannerShape1Svg from "@/assets/images/home_4/banner-shape-1.svg";
import bannerFrame2Png from "@/assets/images/home_4/banner-frame2.png";
import brand9Svg from "@/assets/images/brand/brand-9.svg";
import bannerPlantPng from "@/assets/images/home_4/banner-plant.png";
import bannerBubbleIcon1Svg from "@/assets/images/home_4/banner-bubble-icon1.svg";
import brand8Svg from "@/assets/images/brand/brand-8.svg";
import brand7Svg from "@/assets/images/brand/brand-7.svg";
import brand10Svg from "@/assets/images/brand/brand-10.svg";
import bannerWindowPng from "@/assets/images/home_4/banner-window.png";
import bannerFramePng from "@/assets/images/home_4/banner-frame.png";


import { useParallax } from "react-scroll-parallax";

export default function HeroHRM() {
  const shape1Parallax = useParallax({
    translateX: [25, -25, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape2Parallax = useParallax({
    translateX: [25, -25, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [-20, 20, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [20, -40, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape5Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [20, -40, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  return (
    <section className="banner-area-4 pb-140">
      <div className="banner-shapes">
        <div className="shape">
          <Image src={bannerShape1Svg} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape2Svg} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape3Svg} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape1Svg} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape4Svg} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-lg-7 col-md-6">
            <div className="banner-left">
              <h2 className="banner-title wow fadeInLeft" data-wow-delay="0.2s">
                Entire HRM From One Platfrom
              </h2>
              <p className="banner-para wow fadeInLeft" data-wow-delay="0.3s">
                Crush your 2021 goals and keep moving forward with Landpagy' s
                work management platform.
              </p>
              <form className="form-group wow fadeInLeft" data-wow-delay="0.4s">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  Book Now
                </button>
              </form>
              <span className="sub-content">
                Free 14 days trial. <strong>No credit</strong> card required
              </span>
            </div>
          </div>
          <div className="col-md-5 offset-md-1 offset-lg-0">
            <div className="banner-right">
              <img
                className="banner-img-1 wow zoomIn"
                data-wow-delay="0.1s"
                src="/images/home_4/banner-bubble-icon1.svg"
                alt="Icon "
              />
              <img
                className="banner-img-2 wow zoomIn"
                data-wow-delay="0.2s"
                src="/images/home_4/banner-bubble-icon2.svg"
                alt="Icon "
              />
              <img
                className="banner-img-3 wow zoomIn"
                data-wow-delay="0.3s"
                src="/images/home_4/banner-bubble-icon3.svg"
                alt="Icon "
              />

              <img
                className="banner-img-4 layer"
                src="/images/home_4/banner-frame.png"
                alt="Icon "
                ref={shape1Parallax.ref}
              />

              <img
                className="banner-img-5 layer"
                src="/images/home_4/banner-frame2.png"
                alt="Icon "
                ref={shape2Parallax.ref}
              />
              <img
                className="banner-img-6 layer"
                src="/images/home_4/banner-frame3.png"
                alt="Icon "
                ref={shape3Parallax.ref}
              />

              <img
                className="banner-img-7 layer"
                src="/images/home_4/banner-window.png"
                alt="Icon "
                ref={shape4Parallax.ref}
              />

              <img
                className="banner-img-8 layer"
                src="/images/home_4/banner-window2.png"
                alt="Icon "
                ref={shape5Parallax.ref}
              />

              <img
                className="banner-img-9 wow fadeInRight"
                data-wow-delay="0.3s"
                src="/images/home_4/banner-plant.png"
                alt="Icon "
              />
              <img
                className="banner-img-10 wow fadeInRight"
                data-wow-delay="0.4s"
                src="/images/home_4/banner-man.png"
                alt="Icon "
              />
              <img
                className="banner-img-11 wow fadeInDown"
                data-wow-delay="0.5s"
                src="/images/home_4/banner-floor-bg.png"
                alt="Icon "
              />
            </div>
          </div>
        </div>

        <div className="pt-0 row pt-lg-4">
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11Svg} alt="brand" />
            </div>
          </div>
        </div>

        <div className="client-meta">
          <ul className="client-review-icon">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
          </ul>
          <div className="client-review-number">
            <span>4.9</span> Stars
          </div>
          <div className="client-review">
            <span>5121+</span> Reviews
          </div>
        </div>

        <div className="text-center row">
          <Link className="customer-more" href="/testimonials">
            More customer stories <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
