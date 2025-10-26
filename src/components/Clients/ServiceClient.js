"use client";
import React from "react";
import Image from "next/image";
import logo3Svg from "@/assets/images/services/logo3.svg";
import logo8Svg from "@/assets/images/services/logo8.svg";
import logo4Svg from "@/assets/images/services/logo4.svg";
import logo2Svg from "@/assets/images/services/logo2.svg";
import logo1Svg from "@/assets/images/services/logo1.svg";
import logo6Svg from "@/assets/images/services/logo6.svg";
import logo5Svg from "@/assets/images/services/logo5.svg";
import logo7Svg from "@/assets/images/services/logo7.svg";

import CountUp from "react-countup";

export default function ServiceClient() {
  return (
    <section className="our-clients-area pt-140 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title">
              <span className="red">Our Clients</span>
              <h2>
                <span className="counter">
                  <CountUp start={0} end={150000} delay={1} duration={2.5} />
                </span>
                +
              </h2>
              <p>
                Customers who depend on Lanpagy to build their business and
                startup.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo1Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo2Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo3Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo4Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo5Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo6Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo7Svg} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo8Svg} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
