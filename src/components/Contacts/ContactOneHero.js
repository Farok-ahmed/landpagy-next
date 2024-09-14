import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function ContactOneHero() {
  const shape4Parallax = useParallax({
    translateX: [600, -300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="banner-area contact-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="font-bold mt-n3">
                Feel free to contact us or just say hi!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <img className="shape13" src="/images/shape/shape13.svg" alt="Shape" />
      <img className="shape14" src="/images/shape/shape14.svg" alt="Shape" />
      <img className="shape15" src="/images/shape/shape15.svg" alt="Shape" />
      <img
        className="shape16 object-element"
        ref={shape4Parallax.ref}
        src="/images/shape/pricing-shape7.svg"
        alt="Shape"
      />

      <img
        className="pricing-shape-11"
        src="/images/features/features-object-6.svg"
        alt="Pricing Banner Shape"
      />
    </section>
  );
}
