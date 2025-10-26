import React from "react";
import Image from "next/image";
import brand6Svg from "@/assets/images/brand/brand-6.svg";
import brand10Svg from "@/assets/images/brand/brand-10.svg";
import brand8Svg from "@/assets/images/brand/brand-8.svg";
import brand7Svg from "@/assets/images/brand/brand-7.svg";
import brand11Svg from "@/assets/images/brand/brand-11.svg";
import brand9Svg from "@/assets/images/brand/brand-9.svg";


export default function PosClient() {
  return (
    <section className="clients-area pt-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">You are in good company</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Over 15,000+ companies across 89 countries use landpagy POS
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6Svg} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7Svg} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8Svg} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9Svg} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10Svg} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11Svg} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
