import Image from "next/image";
import right from "@/assets/images/home_9/shapes/right.svg";
import logo1 from "@/assets/images/home_9/apps/logo1.png";
import logo7 from "@/assets/images/home_9/apps/logo7.png";
import logo9 from "@/assets/images/home_9/apps/logo9.png";
import logo2 from "@/assets/images/home_9/apps/logo2.png";
import logo4 from "@/assets/images/home_9/apps/logo4.png";
import logo8 from "@/assets/images/home_9/apps/logo8.png";
import logo3 from "@/assets/images/home_9/apps/logo3.png";
import logo5 from "@/assets/images/home_9/apps/logo5.png";
import logo6 from "@/assets/images/home_9/apps/logo6.png";
import mainApp from "@/assets/images/home_9/apps/main-app.svg";
;

export default function CloudIntegration() {
  return (
    <section className="cloud-apps-area pt-130 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="apps-title cloud-heading-2 mb-30 mx-auto">
              Landpagy {""}
              <span>
                Integrated
                <svg
                  width="287"
                  height="89"
                  viewBox="0 0 287 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M15.1813 18.929C119.226 -20.9336 332.756 11.627 276.862 60.7958C232.086 100.185 -9.7646 99.5033 1.39234 40.2395C8.16679 4.25482 202.461 -0.375429 266.643 34.2224"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>{" "}
              with These Softwares
            </h2>
            <a href="/" className="apps-btn mb-100">
              Learn more about Integration{" "}
              <Image src={right} className="icon"
                
                alt="Icon" />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="cloud-integrated-apps mx-auto">
              <div className="apps-wrapp">
                <div className="app">
                  <Image src={logo1} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo7} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo9} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo2} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo4} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo8} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo3} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo5} alt="app" />
                </div>
                <div className="app">
                  <Image src={logo6} alt="app" />
                </div>
                <div className="main app">
                  <Image src={mainApp} alt="app" />
                </div>
              </div>

              <div className="bubbles-wrapp">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
              </div>

              <div className="apps-circle-mid"></div>
              <div className="apps-circle-small"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
