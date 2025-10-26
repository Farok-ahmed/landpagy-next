"use client";
import Link from "next/link";
import Image from "next/image";
import bannerShape4 from "@/assets/images/home_2/banner-shape-4.svg";
import bannerShape1 from "@/assets/images/home_2/banner-shape-1.svg";
import bannerShape2 from "@/assets/images/home_2/banner-shape-2.svg";
import bannerShape3 from "@/assets/images/home_2/banner-shape-3.svg";
import bannerShape5 from "@/assets/images/home_2/banner-shape-5.svg";
import heroImg from "@/assets/images/home_2/hero-img.svg";
;

import { Parallax } from "react-scroll-parallax";

export default function HeroBannerTwo() {
  return (
    <section
      className="banner-area-2"
      style={{ backgroundImage: "url('/images/banner/banner-shape-4.svg')" }}
    >
      <div className="banner-shapes">
        <div className="shape">
          <Image src={bannerShape4} alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[360, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape1} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["20px", "0px"]}
            rotateZ={[500, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape2} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-20px", "20px"]}
            translateY={["70px", "0px"]}
            rotateZ={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape3} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={bannerShape5} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center gy-lg-0 gy-4">
          <div className="col-xxl-8 col-md-7">
            <div className="banner-left pr-60 wow fadeInLeft">
              <h1>All you need for your business</h1>
              <p className="banner-para">
                We provide all the best features so you can stop focusing on
                your project management and get back to your life’s work.
              </p>
              <Link href="/contact-one" className="btn btn-red">
                Request A Demo
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-md-5">
            <div className="banner-right wow fadeInRight">
              <Image src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
