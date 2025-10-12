"use client";
;
import { useParallax } from "react-scroll-parallax";

export default function FeatureOne() {
  const shape1Parallax = useParallax({
    translateX: [100, -100, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape2Parallax = useParallax({
    translateX: [50, -150, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [150, -30, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [100, -20, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  return (
    <section className="features section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="features-image">
              <img src="/images/features/feature.png" alt="Features " />
              <img
                src="/images/features/features-object-1.svg"
                alt="Features Object"
                className="features-object1 object-element layer"
                ref={shape1Parallax.ref}
              />
              <img
                src="/images/features/features-object-2.svg"
                alt="Features Object"
                className="features-object2"
              />
              <img
                className="features-object3 object-element layer"
                src="/images/features/features-object-3.svg"
                alt="Features Object"
                ref={shape2Parallax.ref}
              />
              <img
                src="/images/features/features-object-4.svg"
                alt="Features Object"
                className="features-object4 object-element layer"
                ref={shape3Parallax.ref}
              />
              <img
                src="/images/features/features-object-5.svg"
                alt="Features Object"
                className="features-object5 object-element layer"
                ref={shape4Parallax.ref}
              />
              <div className="round-object"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-content">
              <h2>Outstanding Features & Automations</h2>
              <h3>
                We created world's first project visualisation software for {""}
                <span>remote teams.</span>
              </h3>
              <p>
                We're here every step of the way making sure you and your team
                deliver. We're here every step of the way making sure you and
                your team deliver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
