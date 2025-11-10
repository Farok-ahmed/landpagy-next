"use client";
import appBars from "@/assets/images/home_4/apps2/app-bars.svg";
import calenderApp from "@/assets/images/home_4/apps2/calender-app.svg";
import contactApp from "@/assets/images/home_4/apps2/contact-app.svg";
import driveApp from "@/assets/images/home_4/apps2/drive-app.svg";
import excelApp from "@/assets/images/home_4/apps2/excel-app.svg";
import gmailApp from "@/assets/images/home_4/apps2/gmail-app.svg";
import mainApp from "@/assets/images/home_4/apps2/main-app.svg";
import meetApp from "@/assets/images/home_4/apps2/meet-app.svg";
import msofficeApp from "@/assets/images/home_4/apps2/msoffice-app.svg";
import shopifyApp from "@/assets/images/home_4/apps2/shopify-app.svg";
import slackApp from "@/assets/images/home_4/apps2/slack-app.svg";
import integrationShape from "@/assets/images/home_4/integration-shape.svg";
import testShape1 from "@/assets/images/home_4/test-shape1.svg";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";

export default function IntegrationHRM() {
  const refs = useGsapMultiple(12, [
    { animation: 'fadeInUp' },
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'zoomIn', delay: 0.9 },
    { animation: 'zoomIn', delay: 0.9 },
    { animation: 'zoomIn', delay: 0.7 },
    { animation: 'zoomIn', delay: 0.7 },
    { animation: 'zoomIn', delay: 0.7 },
    { animation: 'zoomIn', delay: 0.7 },
    { animation: 'zoomIn', delay: 0.7 },
    { animation: 'zoomIn', delay: 0.9 },
    { animation: 'zoomIn', delay: 0.9 },
    { animation: 'zoomIn', delay: 0.2 },
  ]);
  return (
    <section className="app-integration-area-two pt-125 pb-120">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={testShape1} alt="shape" />
        </div>
        <div className="shape">
          <Image src={integrationShape} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center pb-60">
              <h2 ref={refs[0]}>Integrations</h2>
              <p ref={refs[1]}>
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
              <div ref={refs[2]} className="app">
                <Image src={slackApp} alt="app" />
              </div>
              <div ref={refs[3]} className="app">
                <Image src={contactApp} alt="app" />
              </div>
              <div ref={refs[4]} className="app">
                <Image src={msofficeApp} alt="app" />
              </div>
              <div ref={refs[5]} className="app">
                <Image src={calenderApp} alt="app" />
              </div>
              <div ref={refs[6]} className="app">
                <Image src={driveApp} alt="app" />
              </div>
              <div ref={refs[7]} className="app">
                <Image src={shopifyApp} alt="app" />
              </div>
              <div ref={refs[8]} className="app">
                <Image src={excelApp} alt="app" />
              </div>
              <div ref={refs[9]} className="app">
                <Image src={meetApp} alt="app" />
              </div>
              <div ref={refs[10]} className="app">
                <Image src={gmailApp} alt="app" />
              </div>
              <div ref={refs[11]} className="app main">
                <Image src={mainApp} alt="app" />
              </div>
              <div className="bars">
                <Image src={appBars} alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
