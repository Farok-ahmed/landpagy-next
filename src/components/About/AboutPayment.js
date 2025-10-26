"use client";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import userSlider1 from "@/assets/images/home_3/user-slider-1.png";
import userShape1 from "@/assets/images/home_3/user-shape-1.svg";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
;

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
              <Image src={userSlider1} alt="customer-img" />
              <div className="shape">
                <Parallax
                  translateX={["0px", "0px"]}
                  translateY={["0px", "0px"]}
                  rotateZ={[0, 90]}
                  easing="easeInOutCubic"
                  speed={-10}
                >
                  <Image src={userShape1} className="layer"
                    alt="shape" />
                </Parallax>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
