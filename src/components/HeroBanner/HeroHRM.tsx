"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerShape1 from "@/assets/images/home_4/banner-shape-1.svg";
import bannerShape2 from "@/assets/images/home_4/banner-shape-2.svg";
import bannerShape3 from "@/assets/images/home_4/banner-shape-3.svg";
import bannerShape4 from "@/assets/images/home_4/banner-shape-4.svg";
import bannerBubbleIcon1 from "@/assets/images/home_4/banner-bubble-icon1.svg";
import bannerBubbleIcon2 from "@/assets/images/home_4/banner-bubble-icon2.svg";
import bannerBubbleIcon3 from "@/assets/images/home_4/banner-bubble-icon3.svg";
import bannerFrame from "@/assets/images/home_4/banner-frame.png";
import bannerFrame2 from "@/assets/images/home_4/banner-frame2.png";
import bannerFrame3 from "@/assets/images/home_4/banner-frame3.png";
import bannerWindow from "@/assets/images/home_4/banner-window.png";
import bannerWindow2 from "@/assets/images/home_4/banner-window2.png";
import bannerPlant from "@/assets/images/home_4/banner-plant.png";
import bannerMan from "@/assets/images/home_4/banner-man.png";
import bannerFloorBg from "@/assets/images/home_4/banner-floor-bg.png";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

import { useParallax } from "react-scroll-parallax";

export default function HeroHRM() {
  const titleRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const paraRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.3 });
  const formRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.4 });
  const bubble1Ref = useGsapReveal({ animation: 'zoomIn', delay: 0.1 });
  const bubble2Ref = useGsapReveal({ animation: 'zoomIn', delay: 0.2 });
  const bubble3Ref = useGsapReveal({ animation: 'zoomIn', delay: 0.3 });
  const plantRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.3 });
  const manRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.4 });
  const floorRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.5 });
  const brand1Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0.1 });
  const brand2Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0.3 });
  const brand3Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0.5 });
  const brand4Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0.7 });
  const brand5Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0.9 });
  const brand6Ref = useGsapReveal({ animation: 'fadeInRight', delay: 1.1 });

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
          <Image src={bannerShape1} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape2} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape3} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape1} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape4} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-lg-7 col-md-6">
            <div className="banner-left">
              <h2 ref={titleRef} className="banner-title">
                Entire HRM From One Platfrom
              </h2>
              <p ref={paraRef} className="banner-para">
                Crush your 2021 goals and keep moving forward with Landpagy' s
                work management platform.
              </p>
              <form ref={formRef as unknown as React.RefObject<HTMLFormElement>} className="form-group">
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
              <Image src={bannerBubbleIcon1} ref={bubble1Ref as React.Ref<HTMLImageElement>} className="banner-img-1"
                
                alt="Icon " />
              <Image src={bannerBubbleIcon2} ref={bubble2Ref as React.Ref<HTMLImageElement>} className="banner-img-2"
                
                alt="Icon " />
              <Image src={bannerBubbleIcon3} ref={bubble3Ref as React.Ref<HTMLImageElement>} className="banner-img-3"
                
                alt="Icon " />

              <Image src={bannerFrame} className="banner-img-4 layer"
                
                alt="Icon "
                ref={shape1Parallax.ref as React.Ref<HTMLImageElement>} />

              <Image src={bannerFrame2} className="banner-img-5 layer"
                
                alt="Icon "
                ref={shape2Parallax.ref as React.Ref<HTMLImageElement>} />
              <Image src={bannerFrame3} className="banner-img-6 layer"
                
                alt="Icon "
                ref={shape3Parallax.ref as React.Ref<HTMLImageElement>} />

              <Image src={bannerWindow} className="banner-img-7 layer"
                
                alt="Icon "
                ref={shape4Parallax.ref as React.RefObject<HTMLImageElement>} />

              <Image src={bannerWindow2} className="banner-img-8 layer"
                
                alt="Icon "
                ref={shape5Parallax.ref as React.RefObject<HTMLImageElement>} />

              <Image src={bannerPlant} ref={plantRef as React.Ref<HTMLImageElement>} className="banner-img-9"
                
                alt="Icon " />
              <Image src={bannerMan} ref={manRef as React.Ref<HTMLImageElement>} className="banner-img-10"
                
                alt="Icon " />
              <Image src={bannerFloorBg} ref={floorRef as React.Ref<HTMLImageElement>} className="banner-img-11"
                
                alt="Icon " />
            </div>
          </div>
        </div>

        <div className="pt-0 row pt-lg-4">
          <div className="col-md-2 col-sm-4">
            <div ref={brand1Ref} className="client-image">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brand2Ref} className="client-image">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brand3Ref} className="client-image">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brand4Ref} className="client-image">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brand5Ref} className="client-image">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brand6Ref} className="client-image">
              <Image src={brand11} alt="brand" />
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
