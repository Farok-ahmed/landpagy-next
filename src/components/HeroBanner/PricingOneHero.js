"use client";
;
import { useParallax } from "react-scroll-parallax";

export default function PricingOneHero() {
  const shape2Parallax = useParallax({
    translateX: [300, -150, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: [-10],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [150, -30, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [100, -20, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="banner-area pricing-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h1>
                <span>Mega</span> Sale
              </h1>
              <h2>
                Up to <span>50%</span> Off
              </h2>
            </div>
          </div>
        </div>
      </div>
      <span className="banner-shapes wow fadeInDown"></span>
      <img
        className="pricing-shape-4 wow fadeInRight"
        src="/images/shape/banner-shape6.svg"
        alt="Shape "
      />
      <img
        className="pricing-shape-3"
        src="/images/shape/shape-3.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-5 object-element layer"
        src="/images/features/features-object-8.svg"
        alt="Pricing Banner Shape"
        ref={shape3Parallax.ref}
      />
      <img
        className="pricing-shape-12 object-element layer"
        src="/images/features/features-object-9.svg"
        alt="Pricing Banner Shape"
        ref={shape4Parallax.ref}
      />
      <img
        className="pricing-shape-6"
        src="/images/shape/pricing-shape2.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-7"
        src="/images/features/features-object-6.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-8"
        src="/images/shape/pricing-shape4.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-9 animate__animated wow animate__fadeInTopRight animate__slow"
        src="/images/shape/pricing-shape5.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-10"
        src="/images/shape/pricing-shape6.svg"
        alt="Pricing Banner Shape"
      />
      <img
        className="pricing-shape-11 object-element"
        ref={shape2Parallax.ref}
        src="/images/shape/pricing-shape7.svg"
        alt="Pricing Banner Shape"
      />
    </section>
  );
}
