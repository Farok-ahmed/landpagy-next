import React from "react";
import Image from "next/image";
import brand2Svg from "@/assets/images/brand/brand-2.svg";
import brand1Svg from "@/assets/images/brand/brand-1.svg";
import borderSvg from "@/assets/images/home_10/shapes/border.svg";
import brand5Svg from "@/assets/images/brand/brand-5.svg";
import brand4Svg from "@/assets/images/brand/brand-4.svg";
import brand3Svg from "@/assets/images/brand/brand-3.svg";


export default function AppClient() {
  return (
    <section className="app-clients-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="text-center app-clients-title cloud-heading-2 mb-35 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <span>
                Trusted
                <img
                  className="border-shape"
                  src="/images/home_10/shapes/border.svg"
                  alt="Border"
                />
              </span>
              {""} by Companies
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.1s">
              <Image src={brand1Svg} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.3s">
              <Image src={brand2Svg} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.5s">
              <Image src={brand3Svg} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.7s">
              <Image src={brand4Svg} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.9s">
              <Image src={brand5Svg} alt="Brand " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
