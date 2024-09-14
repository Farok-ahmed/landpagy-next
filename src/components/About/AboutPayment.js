import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/testimonials">
                See all customer stories <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="mt-4 col-md-6 text-end mt-md-0">
            <div className="customer-img wow fadeInLeft">
              <img src="/images/home_3/user-slider-1.png" alt="customer-img" />
              <div className="shape">
                <Parallax
                  translateX={["0px", "0px"]}
                  translateY={["0px", "0px"]}
                  rotateZ={[0, 90]}
                  easing="easeInOutCubic"
                  speed={-10}
                >
                  <img
                    src="/images/home_3/user-shape-1.svg"
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
              <img src="/images/brand/brand-6.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <img src="/images/brand/brand-7.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <img src="/images/brand/brand-8.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <img src="/images/brand/brand-9.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <img src="/images/brand/brand-10.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <img src="/images/brand/brand-11.svg" alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
