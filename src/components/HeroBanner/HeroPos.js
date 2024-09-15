"use client";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function HeroPos() {
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [15, -15, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape5Parallax = useParallax({
    translateX: [0, 5, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape6Parallax = useParallax({
    translateX: [5, -5, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });

  return (
    <section className="banner-area-5">
      <div className="banner-shapes">
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <img
              src="/images/home_5/shapes/banner-shape1.png"
              className="layer"
              alt="shapes"
            />
          </Parallax>
        </div>
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <img src="/images/home_5/shapes/banner-shape1.png" alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["50px", "0px"]}
            rotateY={[70, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <img src="/images/home_5/shapes/banner-shape2.png" alt="shapes" />
        </div>
        <div className="shape">
          <img src="/images/home_5/shapes/banner-shape3.png" alt="shapes" />
        </div>
        <div className="shape">
          <img src="/images/home_5/shapes/banner-shape4.png" alt="shapes" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div className="banner-left wow fadeInLeft">
              <h1 className="banner-title wow fadeInLeft" data-wow-delay="0.2s">
                Most Powerful & Advanced POS
              </h1>
              <p className="banner-para wow fadeInLeft" data-wow-delay="0.3s">
                Landpagy is a leading retail POS software in the cloud with
                everything you need to run & grow.
              </p>
              <form className="form-group wow fadeInLeft" data-wow-delay="0.4s">
                <input type="email" placeholder="Your Email" />
                <button type="submit" className="btn btn-indigo">
                  Get Started
                </button>
              </form>
              <ul className="sub-content wow fadeInLeft">
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> 14-day trial
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> No card required
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> Unlimited goals
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="banner-right wow fadeInRight" data-wow-delay="0.3s">
              <img
                ref={shape4Parallax.ref}
                className="banner-img-1 layer"
                src="/images/home_5/banner1.png"
                alt="Banner "
              />
              <img
                ref={shape5Parallax.ref}
                className="banner-img-2 layer"
                src="/images/home_5/banner2.png"
                alt="Banner "
              />
              <img
                ref={shape6Parallax.ref}
                className="banner-img-3 layer"
                src="/images/home_5/banner3.png"
                alt="Banner "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
