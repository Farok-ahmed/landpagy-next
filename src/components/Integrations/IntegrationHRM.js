import Image from "next/image";
import testShape1 from "@/assets/images/home_4/test-shape1.svg";
import integrationShape from "@/assets/images/home_4/integration-shape.svg";
import slackApp from "@/assets/images/home_4/apps2/slack-app.svg";
import contactApp from "@/assets/images/home_4/apps2/contact-app.svg";
import msofficeApp from "@/assets/images/home_4/apps2/msoffice-app.svg";
import calenderApp from "@/assets/images/home_4/apps2/calender-app.svg";
import driveApp from "@/assets/images/home_4/apps2/drive-app.svg";
import shopifyApp from "@/assets/images/home_4/apps2/shopify-app.svg";
import excelApp from "@/assets/images/home_4/apps2/excel-app.svg";
import meetApp from "@/assets/images/home_4/apps2/meet-app.svg";
import gmailApp from "@/assets/images/home_4/apps2/gmail-app.svg";
import mainApp from "@/assets/images/home_4/apps2/main-app.svg";
import appBars from "@/assets/images/home_4/apps2/app-bars.svg";
;

export default function IntegrationHRM() {
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
                <Image src={slackApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={contactApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={msofficeApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={calenderApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={driveApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={shopifyApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.7s">
                <Image src={excelApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={meetApp} alt="app" />
              </div>
              <div className="app wow zoomIn" data-wow-delay="0.9s">
                <Image src={gmailApp} alt="app" />
              </div>
              <div className="app main wow zoomIn" data-wow-delay="0.2s">
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
