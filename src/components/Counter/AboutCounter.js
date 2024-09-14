import React from "react";
import CountUp from "react-countup";

export default function AboutCounter() {
  return (
    <section className="counter-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="counter-item">
              <span className="text-red font-semi-bold">Launched in April</span>
              <div className="counter-number">
                <h2 className="counter">
                  <CountUp start={0} end={2009} delay={1} duration={2.5} />
                </h2>
              </div>

              <span className="text-black">remote from day one</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="counter-item">
              <span className="font-poppins font-semi-bold text-red">
                Our product powers
              </span>
              <div className="counter-number">
                <h2 className="counter">
                  <CountUp start={0} end={32005} delay={1} duration={2.5} />
                </h2>
                <span>+</span>
              </div>
              <span className="text-black">customer-facing teams</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="counter-item">
              <span className="font-poppins font-semi-bold text-red">
                We serve customers in
              </span>
              <div className="counter-number">
                <h2 className="counter">
                  <CountUp start={0} end={3000} delay={1} duration={2.5} />{" "}
                </h2>
                <span>+</span>
              </div>
              <span className="text-black">Company</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="counter-item">
              <span className="font-poppins font-semi-bold text-red">
                Trusted By
              </span>
              <div className="counter-number">
                <h2 className="counter">
                  <CountUp start={0} end={3000} delay={1} duration={2.5} />
                </h2>
                <span>+</span>
              </div>
              <span className="text-black">Company</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
