"use client";
import brand10Svg from "@/assets/images/brand/brand-10.svg";
import brand11Svg from "@/assets/images/brand/brand-11.svg";
import brand6Svg from "@/assets/images/brand/brand-6.svg";
import brand7Svg from "@/assets/images/brand/brand-7.svg";
import brand8Svg from "@/assets/images/brand/brand-8.svg";
import brand9Svg from "@/assets/images/brand/brand-9.svg";
import userShape1Svg from "@/assets/images/home_3/user-shape-1.svg";
import userSlider1Png from "@/assets/images/home_3/user-slider-1.png";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

export default function AboutPayment() {
  return (
    <section className="user-area-two pt-150">
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">
            Over 15,000+ companies across 89 countries use landpagy
          </h2>
        </div>
        <div className="pt-20 pb-40 row pb-lg-70">
          <div className="col-md-6">
            <div className="customer-feed wow fadeInRight">
              <p>
                “After a comprehensive vetting process with a number of globally
                recognized vendors, Exponea stood out as the clear best choice
                for optimizing our team’s performance.’’
              </p>
              <div className="customer-info">
                <span className="name">Ariful Haque</span>
                <span className="pos">UI Designer, Spider Themes</span>
              </div>
              <Link href="/testimonials">
                See all customer stories <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="mt-4 col-md-6 text-end mt-md-0">
            <div className="customer-img wow fadeInLeft">
              <Image src={userSlider1Png} alt="customer-img" />
              <div className="shape">
                <Parallax
                  translateX={["0px", "0px"]}
                  translateY={["0px", "0px"]}
                  rotateZ={[0, 90]}
                  easing="easeInOutCubic"
                  speed={-10}
                >
                  <Image
                    src={userShape1Svg}
                    className="layer"
                    alt="shape"
                  />
                </Parallax>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11Svg} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
