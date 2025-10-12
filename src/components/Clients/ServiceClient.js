"use client";
;
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
                <img src="/images/services/logo1.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo2.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo3.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo4.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo5.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo6.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo7.svg" alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <img src="/images/services/logo8.svg" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
