import React from "react";
import Image from "next/image";
import feaIcon5Svg from "@/assets/images/home_5/icons/fea-icon5.svg";
import feaIcon8Svg from "@/assets/images/home_5/icons/fea-icon8.svg";
import feaIcon2Svg from "@/assets/images/home_5/icons/fea-icon2.svg";
import feaIcon1Svg from "@/assets/images/home_5/icons/fea-icon1.svg";
import feaIcon4Svg from "@/assets/images/home_5/icons/fea-icon4.svg";
import feaIcon3Svg from "@/assets/images/home_5/icons/fea-icon3.svg";
import feaIcon6Svg from "@/assets/images/home_5/icons/fea-icon6.svg";
import feaIcon7Svg from "@/assets/images/home_5/icons/fea-icon7.svg";


export default function PosFeatureGroup() {
  return (
    <section className="features-area-twelve pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="section-title-center mb-35">
              <h2 className="wow fadeInUp">Perfect POS Software</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Start, run & grow your retail business with Landpagy POS
                software for most retail stores
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon1Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Clothing store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon2Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Coffee shop
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon3Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Furniture store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon4Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Jewelry store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon5Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Food truck
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon6Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Gift store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon7Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Pet store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon8Svg}
                alt=""
                className="features-icon mx-auto mb-10"
              />
              <a href="/" className="features-name">
                Retail examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
