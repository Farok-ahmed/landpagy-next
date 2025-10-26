"use client";
import Image from "next/image";
import shape1 from "@/assets/images/home_8/shape/shape1.svg";
import shape2 from "@/assets/images/home_8/shape/shape2.svg";
import featureImg1 from "@/assets/images/home_8/feature-img1.png";
;
import { Parallax } from "react-scroll-parallax";

export default function AutomateBilling() {
  return (
    <section className="billing-features-area bg-gray pt-120 pb-140">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="features-images wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="bg-shapes">
                <div className="shape">
                  <Parallax
                    translateX={["0px", "0px"]}
                    translateY={["30px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape1} alt="" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Image src={shape2} alt="" />
                </div>
              </div>
              <Image src={featureImg1} alt="Feature " />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="features-content wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <h2 className="mb-10 features-item-title">
                Automate Recurring Billing
              </h2>
              <p className="features-item-text mb-45">
                Scale your SaaS through 150+ recurring billing scenarios that
                automate who you bill, when, and how. No humans, no
                spreadsheets, no missed payments!
              </p>
              <ul className="features-item-list mb-30">
                <li>
                  <i className="icon_check"></i> Billing Schedules
                </li>
                <li>
                  <i className="icon_check"></i> Tax management
                </li>
                <li>
                  <i className="icon_check"></i> Payment Methods
                </li>
                <li>
                  <i className="icon_check"></i> Proration & Invoicing
                </li>
              </ul>
              <a href="/" className="btn-bordered">
                Learn more <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
