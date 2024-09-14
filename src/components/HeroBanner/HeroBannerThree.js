import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import GLightbox from "glightbox";

export default function HeroBannerThree() {
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="banner-area-7">
      <div className="banner-shapes">
        <div className="shape">
          <img src="/images/home_7/shapes/banner-shape2.png" alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["0px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/home_7/shapes/banner-shape3.png" alt="shapes" />
          </Parallax>
        </div>
        <div className="shape wow fadeInDown">
          <img src="/images/home_7/banner.png" alt="shapes" />
        </div>
      </div>
      <div className="container container-soft2">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="banner-left wow fadeInLeft">
              <h2 className="banner-title wow fadeInLeft" data-wow-delay="0.2s">
                Create Your Desire {""}
                <span>
                  Business.
                  <img src="./images/home_7/shapes/text-shape.svg" alt="" />
                </span>
              </h2>
              <p className="banner-para wow fadeInLeft" data-wow-delay="0.3s">
                100+ Home Pages With Eye Catching Inner Pages. Over 170+
                interface blocks.All-in-one WordPress theme that’s modern, super
                customizable, & blazing fast.
              </p>
              <Link to="/price-one" className="btn border-btn">
                Buy Now
              </Link>
              <Link to="/contact-one" className="btn white-btn">
                See Demo
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="banner-right wow fadeInRight" data-wow-delay="0.3s">
              <a
                className="play-btn"
                data-fancybox
                href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
