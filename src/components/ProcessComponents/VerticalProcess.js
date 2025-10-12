"use client";
;
import { useParallax } from "react-scroll-parallax";

export default function VerticalProcess() {
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
    <section className="overflow-hidden process-area-3 pt-140 pb-140">
      <div className="container">
        <div className="process-item-3 pb-105">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                className="process-content-3 pt-30 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <span className="item-number">01</span>
                <h3 className="item-title">Define your goals</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className="process-images-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/process/shape1.svg"
                  alt="Shape"
                  className="shape"
                />
                <img
                  src="/images/process/shape2.svg"
                  alt="Shape"
                  className="shape"
                />
                <img
                  src="/images/process/shape3.svg"
                  alt="Shape"
                  className="shape"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-140">
          <div className="flex-row-reverse row">
            <div className="col-lg-6 col-md-7">
              <div
                className="process-content-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <span className="item-number">02</span>
                <h3 className="item-title">
                  Set actions and assign stakeholders
                </h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                  Restructuring functional units alone won’t do it.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className="process-images-3 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/process/shape4.svg"
                  alt="Shape"
                  className="shape"
                />
                <img
                  src="/images/process/shape5.svg"
                  alt="Shape"
                  className="shape"
                />
                <img
                  src="/images/process/shape6.svg"
                  alt="Shape"
                  className="shape"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-135">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                className="process-content-3 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <span className="item-number">03</span>
                <h3 className="item-title">Plan and map your process</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className="process-images-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/features/features-4.png"
                  alt="Features "
                  className="shape"
                />
                <img
                  src="/images/features/features-object-6.svg"
                  alt="Features Object"
                  className="shape"
                />
                <img
                  src="/images/features/features-object-7.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape2Parallax.ref}
                />
                <img
                  src="/images/features/features-object-8.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape3Parallax.ref}
                />
                <img
                  src="/images/features/features-object-9.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape4Parallax.ref}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-180">
          <div className="flex-row-reverse row">
            <div className="col-lg-6 col-md-7">
              <div
                className="process-content-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <span className="item-number">04</span>
                <h3 className="item-title">Implement the process</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                  Restructuring functional units alone won’t do it.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className="process-images-3 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/features/feature-7.png"
                  alt="Features "
                  className="shape"
                />
                <img
                  className="shape object-element layer"
                  src="/images/features/features-object-10.svg "
                  alt="Features "
                  ref={shape1Parallax.ref}
                />
                <img
                  className="shape"
                  src="/images/features/features-object-2.svg"
                  alt="Features "
                />
                <img
                  className="shape object-element layer"
                  ref={shape2Parallax.ref}
                  src="/images/features/features-object-3.svg"
                  alt="Features "
                />
                <img
                  className="shape object-element layer"
                  ref={shape3Parallax.ref}
                  src="/images/features/features-object-11.svg"
                  alt="Features "
                />
                <img
                  className="shape object-element layer"
                  ref={shape4Parallax.ref}
                  src="/images/features/features-object-12.svg"
                  alt="Features "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-140">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                className="process-content-3 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <span className="item-number">05</span>
                <h3 className="item-title">Monitor the results</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className="process-images-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img
                  src="/images/features/feature.png"
                  alt="Features "
                  className="shape"
                />
                <img
                  src="/images/features/features-object-1.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape1Parallax.ref}
                />
                <img
                  src="/images/features/features-object-2.svg"
                  alt="Features Object"
                  className="shape"
                />
                <img
                  className="shape object-element layer"
                  ref={shape2Parallax.ref}
                  src="/images/features/features-object-3.svg"
                  alt="Features Object"
                />
                <img
                  src="/images/features/features-object-4.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape3Parallax.ref}
                />
                <img
                  src="/images/features/features-object-5.svg"
                  alt="Features Object"
                  className="shape object-element layer"
                  ref={shape4Parallax.ref}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/images/process/shape7.svg"
            alt="Border Shape"
            className="shape-border"
          />
          <span className="point"></span>
        </div>
      </div>
    </section>
  );
}
