"use client";
import Image from "next/image";
import bannerShape1 from "@/assets/images/home_6/banner-shape1.svg";
import bannerShape2 from "@/assets/images/home_6/banner-shape2.png";
import bannerShape3 from "@/assets/images/home_6/banner-shape3.svg";
import bannerShape4 from "@/assets/images/home_6/banner-shape4.svg";
import bannerShape5 from "@/assets/images/home_6/banner-shape5.svg";
import bannerShape6 from "@/assets/images/home_6/banner-shape6.png";
import bannerShape7 from "@/assets/images/home_6/banner-shape7.png";
import bannerShape8 from "@/assets/images/home_6/banner-shape8.png";
import bannerShape9 from "@/assets/images/home_6/banner-shape9.svg";
import bannerShape10 from "@/assets/images/home_6/banner-shape10.svg";
;
import { Parallax } from "react-scroll-parallax";

export default function HeroPrototype() {
  return (
    <section className="banner-area-6 bg-proto">
      <div className="banner-shapes">
        <div className="shape wow fadeIn" data-wow-delay="0.2s">
          <Image src={bannerShape1} alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[100, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape2} alt="" />
          </Parallax>
        </div>
        <div className="shape wow fadeInLeft">
          <Image src={bannerShape3} alt="shapes" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.4s">
          <Image src={bannerShape4} alt="" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.6s">
          <Image src={bannerShape5} alt="" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["30px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape6} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={bannerShape7} alt="" />
        </div>
        <div className="shape">
          <Image src={bannerShape8} alt="" />
        </div>
        <div className="shape wow fadeIn" data-wow-delay="0.2s">
          <Image src={bannerShape9} alt="shapes" />
        </div>
        <div className="shape wow fadeInRight">
          <Image src={bannerShape10} alt="shapes" />
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
