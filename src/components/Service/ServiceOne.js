import Image from "next/image";
import component1 from "@/assets/images/home_3/component-1.svg";
import component2 from "@/assets/images/home_3/component-2.svg";
import component3 from "@/assets/images/home_3/component-3.svg";
import component4 from "@/assets/images/home_3/component-4.svg";
import component5 from "@/assets/images/home_3/component-5.svg";
import component6 from "@/assets/images/home_3/component-6.svg";


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
                <Image src={component1} alt="component" />
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
                <Image src={component2} alt="component" />
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
                <Image src={component3} alt="component" />
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
                <Image src={component4} alt="component" />
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
                <Image src={component5} alt="component" />
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
                <Image src={component6} alt="component" />
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
