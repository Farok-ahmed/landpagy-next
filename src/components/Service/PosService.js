import React from "react";
import Image from "next/image";
import easyStartIcon3Svg from "@/assets/images/home_5/icons/easy-start-icon3.svg";
import easyStartIcon1Svg from "@/assets/images/home_5/icons/easy-start-icon1.svg";
import easyStartIcon2Svg from "@/assets/images/home_5/icons/easy-start-icon2.svg";


export default function PosService() {
  return (
    <section className="easy-start-area pt-135 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">Getting Started Is Easy</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Start using Landpagy POS software with a 14-day free trial and
                get it ready for retail in 3 easy steps.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="easy-start-item text-center">
              <div className="item-icon-wrap">
                <Image src={easyStartIcon1Svg}
                  alt="Icon"
                  className="item-icon mx-auto my-auto"
                />
              </div>
              <h4 className="item-title">Upload</h4>
              <p className="item-content">
                Upload all existing products & customers data at once with our
                easy to use CSV import wizard.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="easy-start-item text-center">
              <div className="item-icon-wrap">
                <Image src={easyStartIcon2Svg}
                  alt="Icon"
                  className="item-icon mx-auto my-auto"
                />
              </div>
              <h4 className="item-title">Customize</h4>
              <p className="item-content">
                Hike lets you customize all that matters including currency,
                time-zone, tax rate settings and even language.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-sm-5 mx-auto">
            <div className="easy-start-item text-center">
              <div className="item-icon-wrap">
                <Image src={easyStartIcon3Svg}
                  alt="Icon"
                  className="item-icon mx-auto my-auto"
                />
              </div>
              <h4 className="item-title">Connect hardware</h4>
              <p className="item-content">
                Set up store counter using any PC, Mac or iPad. Hike offers
                plug-n-play compatibility with most retail hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
