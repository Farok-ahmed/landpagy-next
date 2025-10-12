"use client";
;
import CountUp from "react-countup";

export default function FeatureTwo() {
  return (
    <section className="features-area-two section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-5">
            <div className="features-content">
              <h2 className="mt-n4">Fast & powerful to get out of your way</h2>
              <p>Aenean amet netus aliquam elit eu, sagittis id natoque id.</p>
              <div className="features-counter">
                <span>Trusted By </span>
                <br />
                <strong>
                  <span className="counter">
                    <CountUp start={0} end={3000} delay={1} duration={2.5} />
                  </span>
                  +
                </strong>
                <br />
                <p>Company</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7">
            <div className="features-image">
              <img src="/images/features/features-2.png" alt="Features " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
