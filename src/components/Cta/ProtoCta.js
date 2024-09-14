import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function ProtoCta() {
  // Parallax instances
  const shape1Parallax = useParallax({
    translateX: [-10, 0],
    translateY: [0, 0],
    rotateY: 0,
  });

  const shape2Parallax = useParallax({
    translateX: [10, 0],
    translateY: [0, 0],
    rotateY: 0,
  });
  return (
    <section className="cta-area-7 pt-80 pb-80 wow fadeInUp">
      <div className="bg-shapes">
        <div className="shape" ref={shape1Parallax.ref}>
          <img src="/images/home_6/cta-shape2.png" alt="Shape 1" />
        </div>
        <div className="shape" ref={shape2Parallax.ref}>
          <img src="/images/home_6/cta-shape3.png" alt="Shape 2" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2
              className="cta-title mb-15 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              Get started now. It’s free.
            </h2>
            <p
              className="title-text mb-40 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              Empower your entire team today
            </p>
            <a
              href="/"
              className="cta-btn btn-yellow wow fadeInRight"
              data-wow-delay="0.2s"
            >
              Try for free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
