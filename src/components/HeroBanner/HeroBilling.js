"use client";
import Link from "next/link";
;

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
          <img src="/images/home_8/icons/Poly1.svg" alt="" />
        </div>
        <div className="shape">
          <img src="/images/home_8/icons/Poly2.svg" alt="" />
        </div>
        <div className="shape wow fadeInLeft" data-wow-delay="0.2s">
          <img src="/images/home_8/icons/logo1.svg" alt="Logo 1" />
          <img
            src="/images/home_8/icons/shape1.svg"
            alt="Shape 1"
            ref={shape1Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInLeft" data-wow-delay="0.2s">
          <img src="/images/home_8/icons/logo2.svg" alt="Logo 2" />
          <img
            src="/images/home_8/icons/shape2.svg"
            alt="Shape 2"
            ref={shape2Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInRight" data-wow-delay="0.2s">
          <img src="/images/home_8/icons/logo3.svg" alt="Logo 3" />
          <img
            src="/images/home_8/icons/shape3.svg"
            alt="Shape 3"
            ref={shape3Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape wow fadeInRight" data-wow-delay="0.2s">
          <img src="/images/home_8/icons/logo4.svg" alt="Logo 4" />
          <img
            src="/images/home_8/icons/shape4.svg"
            alt="Shape 4"
            ref={shape4Parallax.ref}
            className="layer"
          />
        </div>
        <div className="shape">
          <img src="/images/home_8/shape/banner-shape.svg" alt="" />
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
                <img
                  src="/images/home_8/icons/add-user.svg"
                  alt="Icon"
                  className="icon"
                />
                Join Us
              </Link>
              <img
                src="/images/home_8/banner.png"
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
