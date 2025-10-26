﻿import Image from "next/image";
import component1Svg from "@/assets/images/home_3/component-1.svg";
import component2Svg from "@/assets/images/home_3/component-2.svg";
import component3Svg from "@/assets/images/home_3/component-3.svg";
import component4Svg from "@/assets/images/home_3/component-4.svg";
import component5Svg from "@/assets/images/home_3/component-5.svg";
import component6Svg from "@/assets/images/home_3/component-6.svg";



export default function ServiceOne() {
  return (
    <section className="components-area pt-105 pb-150">
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Endless components</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Over a dozen reusable components built to provide iconography,
            dropdowns, input groups, navigation, alerts, and much more.
          </p>
        </div>
        <div className="row gy-4 pt-20">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon">
                {/* Converted from <Image src={component1Svg}> */}
                <Image src={component1Svg} alt="component" />
              </div>
              <h4>Manage leads</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                {/* Converted from <Image src={component2Svg}> */}
                <Image src={component2Svg} alt="component" />
              </div>
              <h4>Daily Reports</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon">
                {/* Converted from <Image src={component3Svg}> */}
                <Image src={component3Svg} alt="component" />
              </div>
              <h4>Track chat</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="icon">
                {/* Converted from <Image src={component4Svg}> */}
                <Image src={component4Svg} alt="component" />
              </div>
              <h4>Optimized platforms</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="icon">
                {/* Converted from <Image src={component5Svg}> */}
                <Image src={component5Svg} alt="component" />
              </div>
              <h4>Data analysis</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-component-widget wow fadeInUp"
              data-wow-delay="1.1s"
            >
              <div className="icon">
                {/* Converted from <Image src={component6Svg}> */}
                <Image src={component6Svg} alt="component" />
              </div>
              <h4>Mobile apps</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
