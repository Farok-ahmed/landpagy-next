"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo4Svg from "@/assets/images/home_8/icons/logo4.svg";
import addUserSvg from "@/assets/images/home_8/icons/add-user.svg";
import shape4Svg from "@/assets/images/home_8/icons/shape4.svg";
import bannerPng from "@/assets/images/home_8/banner.png";
import poly1Svg from "@/assets/images/home_8/icons/Poly1.svg";
import shape3Svg from "@/assets/images/home_8/icons/shape3.svg";
import shape1Svg from "@/assets/images/home_8/icons/shape1.svg";
import logo1Svg from "@/assets/images/home_8/icons/logo1.svg";
import logo3Svg from "@/assets/images/home_8/icons/logo3.svg";
import logo2Svg from "@/assets/images/home_8/icons/logo2.svg";
import shape2Svg from "@/assets/images/home_8/icons/shape2.svg";
import bannerShapeSvg from "@/assets/images/home_8/shape/banner-shape.svg";
import poly2Svg from "@/assets/images/home_8/icons/Poly2.svg";


import { useParallax } from "react-scroll-parallax";

export default function HeroBilling() {
  const shape1Parallax = useParallax({
    translateX: [-20, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: 0,
    speed: -10,
  });

  const shape2Parallax = useParallax({
    translateX: [-30, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });

  const shape3Parallax = useParallax({
    translateX: [30, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });

  const shape4Parallax = useParallax({
    translateX: [20, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });
  return (
    <section className="billing-banner-area bg-feta pt-140 pb-140">
      <div className="bg-shapes">
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape">
          <Image src={poly1Svg} alt="" />
        </div>
        <div className="shape">
          <Image src={poly2Svg} alt="" />
        </div>
        <div className="shape wow fadeInLeft" data-wow-delay="0.2s">
          <Image src={logo1Svg} alt="Logo 1" />
          <Image src={shape1Svg}
            alt="Shape 1"
            ref={shape1Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInLeft" data-wow-delay="0.2s">
          <Image src={logo2Svg} alt="Logo 2" />
          <Image src={shape2Svg}
            alt="Shape 2"
            ref={shape2Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInRight" data-wow-delay="0.2s">
          <Image src={logo3Svg} alt="Logo 3" />
          <Image src={shape3Svg}
            alt="Shape 3"
            ref={shape3Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInRight" data-wow-delay="0.2s">
          <Image src={logo4Svg} alt="Logo 4" />
          <Image src={shape4Svg}
            alt="Shape 4"
            ref={shape4Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape">
          <Image src={bannerShapeSvg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center banner-content pt-80">
              <h1
                className="banner-title wow fadeInDown mb-35"
                data-wow-delay="0.3s"
              >
                Best Accounts Billing Software
              </h1>
              <Link
                href="/sign-up"
                className="btn btn-red wow fadeInDown"
                data-wow-delay="0.4s"
              >
                <Image src={addUserSvg}
                  alt="Icon"
                  className="icon"
                />
                Join Us
              </Link>
              <Image src={bannerPng}
                alt=""
                className="mx-auto banner-img wow fadeInDown"
                data-wow-delay="0.5s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
