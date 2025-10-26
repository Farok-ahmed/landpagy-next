import React from "react";
import Image from "next/image";
import meetAppSvg from "@/assets/images/home_4/apps2/meet-app.svg";
import slackAppSvg from "@/assets/images/home_4/apps2/slack-app.svg";
import testShape1Svg from "@/assets/images/home_4/test-shape1.svg";
import integrationShapeSvg from "@/assets/images/home_4/integration-shape.svg";
import excelAppSvg from "@/assets/images/home_4/apps2/excel-app.svg";
import appBarsSvg from "@/assets/images/home_4/apps2/app-bars.svg";
import msofficeAppSvg from "@/assets/images/home_4/apps2/msoffice-app.svg";
import gmailAppSvg from "@/assets/images/home_4/apps2/gmail-app.svg";
import shopifyAppSvg from "@/assets/images/home_4/apps2/shopify-app.svg";
import contactAppSvg from "@/assets/images/home_4/apps2/contact-app.svg";
import calenderAppSvg from "@/assets/images/home_4/apps2/calender-app.svg";
import mainAppSvg from "@/assets/images/home_4/apps2/main-app.svg";
import driveAppSvg from "@/assets/images/home_4/apps2/drive-app.svg";


export default function IntegrationHRM() {
  return (
    <section className="app-integration-area-two pt-125 pb-120">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={testShape1Svg} alt="shape" />
        </div>
        <div className="shape">
          <Image src={integrationShapeSvg} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center pb-60">
              <h2 className="wow fadeInUp">Integrations</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Try out our seamless integrations with tools that are commonly
                used by growing businesses. Don't waste your time on creating
                time-off calendars.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="apps-area">
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={slackAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={contactAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={msofficeAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={calenderAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={driveAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={shopifyAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={excelAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={meetAppSvg} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={gmailAppSvg} alt="app" />
              </div>
              <div className="app main wow zoomIn" data-wow-delay="0.2s">
                <Image src={mainAppSvg} alt="app" />
              </div>
              <div className="bars">
                <Image src={appBarsSvg} alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
