import React from "react";
import CountUp from "react-countup";

export default function InnovateCounter() {
  return (
    <section className="soft-counter-area pt-135 pb-150">
      <div className="shapes">
        <div className="shape">
          <img src="/images/home_7/shapes/counter-shape1.svg" alt="" />
        </div>
        <div className="shape">
          <img src="/images/home_7/shapes/counter-shape2.svg" alt="" />
        </div>
      </div>
      <div className="container container-soft2">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="mt-5 section-title-left mt-lg-0">
              <h2>Improve and Innovate with the Tech Trends</h2>
              <p>
                We hire and build your own remote dedicated development teams
                tailored to your specific needs. Get professional fulltime
                developers who work exclusively for you as a part of your
                company.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="count-item">
                  <h3>
                    <span className="counter">
                      <CountUp start={0} end={80} delay={1} duration={2.5} />
                    </span>
                    +
                  </h3>
                  <p>
                    Team <br />
                    Members
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="count-item">
                  <h3>
                    <span className="counter">
                      {" "}
                      <CountUp start={0} end={17} delay={1} duration={2.5} />
                    </span>
                    +
                  </h3>
                  <p>
                    Amazing <br />
                    Products
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="count-item">
                  <h3>
                    <span className="counter">
                      <CountUp start={0} end={100} delay={1} duration={2.5} />
                    </span>
                    +
                  </h3>
                  <p>
                    Happy <br />
                    Customers
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="count-item">
                  <h3>
                    <span className="counter">
                      <CountUp start={0} end={160} delay={1} duration={2.5} />
                    </span>
                    +
                  </h3>
                  <p>
                    Countries <br />
                    Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="count-right">
              <div className="row">
                <div className="col-6">
                  <div className="image">
                    <h4>Our Mission</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="image">
                    <h4>Our Strategy</h4>
                  </div>
                </div>
                <div className="mx-auto col-6">
                  <div className="image">
                    <h4>Our Philosophy</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
