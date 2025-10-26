import React from "react";
import Image from "next/image";
import outFeature1Svg from "@/assets/images/home_2/out-feature-1.svg";
import outFeature2Svg from "@/assets/images/home_2/out-feature-2.svg";
import outFeature4Svg from "@/assets/images/home_2/out-feature-4.svg";
import outFeature3Svg from "@/assets/images/home_2/out-feature-3.svg";


export default function OutstandingFeatures() {
  return (
    <section className="outstanding-feature-area pt-80 pb-130">
      <div className="section-title-center wow fadeInUp">
        <h2>Outstanding Features</h2>
      </div>
      <div className="container pt-30">
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <Image src={outFeature1Svg} alt="img" />
            <h5>24/7 Support</h5>
            <p>
              We'll treat your customers like they're ours · We have an
              excellent team.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <Image src={outFeature2Svg} alt="img" />
            <h5>Tested Security</h5>
            <p>
              The tested Security here. To review and adjust your security
              settings.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <Image src={outFeature3Svg} alt="img" />
            <h5>Smart Dashboard</h5>
            <p>
              The Best Mobile App Awards honors the best mobile apps on iPhone,
            </p>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <Image src={outFeature4Svg} alt="img" />
            <h5>XO Award 2021</h5>
            <p>
              The Best Mobile App Awards honors the best mobile apps on iPhone,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
