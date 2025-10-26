import React from "react";
import Image from "next/image";
import ctaImg3Svg from "@/assets/images/home_10/cta-img3.svg";
import ctaImg4Svg from "@/assets/images/home_10/cta-img4.svg";
import ctaImg1Svg from "@/assets/images/home_10/cta-img1.svg";
import ctaImg2Svg from "@/assets/images/home_10/cta-img2.svg";
import ctaImg5Svg from "@/assets/images/home_10/cta-img5.svg";


export default function AppDownloadTwo({ hasSpace }) {
  return (
    <section className="app-cta-area">
      <div className="container">
        <div
          className={`app-cta-bg ${
            hasSpace ? "mt-80 mb-80 mt-lg-150 mb-lg-150" : ""
          }`}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 wow fadeInDown" data-wow-delay="0.2s">
              <div className="app-cta-content">
                <h2 className="cta-title cloud-heading-2 mb-60">
                  Join the revolution. Download the app today!
                </h2>
                <a
                  href="/"
                  className="app-store-link wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <i className="fab fa-google-play"></i>
                  <p>
                    <span>GET IT ON</span>Google Play
                  </p>
                </a>
                <a
                  href="/"
                  className="app-store-link ml-25 wow fadeInRight"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInRight",
                  }}
                >
                  <i className="fab fa-apple"></i>
                  <p>
                    <span>Available on the</span>Apple Store
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="app-cta-images">
                <Image src={ctaImg1Svg}
                  alt=""
                  className="img wow fadeInRight"
                  data-wow-delay="0.1s"
                />
                <Image src={ctaImg2Svg}
                  alt=""
                  className="img wow fadeInRight"
                  data-wow-delay="0.5s"
                />
                <Image src={ctaImg3Svg}
                  alt=""
                  className="img wow fadeInLeft"
                  data-wow-delay="0.7s"
                />
                <Image src={ctaImg4Svg}
                  alt=""
                  className="img wow fadeInDown"
                  data-wow-delay="0.9s"
                />
                <Image src={ctaImg5Svg}
                  alt=""
                  className="img wow fadeInDown"
                  data-wow-delay="0.3s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
