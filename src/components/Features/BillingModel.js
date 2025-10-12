"use client";
;
import { Parallax } from "react-scroll-parallax";

export default function BillingModel() {
  return (
    <section className="billing-features-2 pt-120 pb-170">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="features-item-title mb-60">
              Power any Billing Model
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="mb-40 feature-item wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="feature-item-icon">
                <img src="/images/home_8/icons/fea-icon1.svg" alt="" />
              </div>
              <div className="feature-item-content">
                <h3 className="feature-item-subtitle">
                  Start accepting payments in minutes
                </h3>
                <p className="feature-item-text">
                  Collect and store payment details including cards, ACH, and
                  other popular payment methods. Easily send invoices to
                  recurring customers, and offer discounts and
                  <span> free trials</span> to drive adoption.
                </p>
              </div>
            </div>
            <div
              className="mb-40 feature-item wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="feature-item-icon">
                <img src="/images/home_8/icons/fea-icon2.svg" alt="" />
              </div>
              <div className="feature-item-content">
                <h3 className="feature-item-subtitle">
                  Support any pricing model
                </h3>
                <p className="feature-item-text">
                  Billing logic for everything from per-seat pricing to metered
                  billing is available out of the box. Support for
                  <span> backdating, quotes,</span> and <span>tax rates</span>{" "}
                  are built right in.
                </p>
              </div>
            </div>
            <div
              className="mb-40 feature-item wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="feature-item-icon">
                <img src="/images/home_8/icons/fea-icon3.svg" alt="" />
              </div>
              <div className="feature-item-content">
                <h3 className="feature-item-subtitle">
                  Support custom pricing for complex
                </h3>
                <p className="feature-item-text">
                  Give sales teams the ability to negotiate rates and automate
                  the collection process. Sync billing and payments data with
                  your
                  <span> ERP and accounting systems.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-images" data-wow-delay="0.2s">
              <div className="bg-shapes">
                <div className="shape">
                  <img src="/images/home_8/shape/shape2.svg" alt="Shape" />
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["0px", "0px"]}
                    translateY={["30px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <img src="/images/home_8/shape/shape1.svg" alt="Shape" />
                  </Parallax>
                </div>
              </div>
              <img
                className="img-1 wow fadeInRight"
                data-wow-delay="0.3s"
                src="/images/home_8/feature-img2.png"
                alt="Feature "
              />
              <img
                className="img-2 wow fadeInRight"
                data-wow-delay="0.5s"
                src="/images/home_8/feature-img3.png"
                alt="Feature "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
