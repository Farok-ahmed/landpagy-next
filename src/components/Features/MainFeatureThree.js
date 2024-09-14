import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function MainFeatureThree() {
  const shape1Parallax = useParallax({
    translateX: [-50, 50, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape2Parallax = useParallax({
    translateX: [-80, 100, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [-50, 100, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [-180, 100, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="features-area-eight section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-image">
              <img src="/images/features/feature-7.png" alt="Features " />
              <img
                className="features-object10 object-element"
                ref={shape1Parallax.ref}
                src="/images/features/features-object-10.svg"
                alt="Features "
              />
              <img
                className="features-object11"
                src="/images/features/features-object-2.svg"
                alt="Features "
              />
              <img
                className="features-object12 object-element"
                ref={shape2Parallax.ref}
                src="/images/features/features-object-3.svg"
                alt="Features "
              />
              <img
                className="features-object13 object-element"
                ref={shape3Parallax.ref}
                src="/images/features/features-object-11.svg"
                alt="Features "
              />
              <img
                className="features-object14 object-element"
                ref={shape4Parallax.ref}
                src="/images/features/features-object-12.svg"
                alt="Features "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-left">
              <h2 className="mt-n3">PM Tools for Every Team</h2>
              <p>
                A at enim quam a etiam. Lacus elementum platea nunc urna nulla
                molestie rhoncus. Euismod in risus elit lacus, laoreet volutpat
                neque. Lacus feugiat iaculis sit adipiscing tellus. Dis quam
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="features-service">
                  <div className="features-icon">
                    <img src="/images/icon/icon-4.svg" alt="Icon" />
                    <span>Design</span>
                  </div>
                  <p>
                    We're here every step of the way making sure you and your
                    team deliver
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="features-service">
                  <div className="features-icon">
                    <img src="/images/icon/icon-5.svg" alt="Icon" />
                    <span>Development</span>
                  </div>
                  <p>
                    We're here every step of the way making sure you and your
                    team deliver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
