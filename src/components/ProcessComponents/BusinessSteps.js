import React from "react";

export default function BusinessSteps() {
  return (
    <section className="process-area-4 overflow-hidden pt-110 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2
              className="heading-3 text-center mb-90 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Our approach to reach your business goals
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <img
                src="/images/process/shape8.svg"
                alt="Border"
                className="line-1"
              />
              <img
                src="/images/process/icon6.svg"
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Ideate</h3>
              <p className="item-text">
                Turn your idea from concept to most valuable player.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <img
                src="/images/process/shape9.svg"
                alt="Border"
                className="line-2"
              />
              <img
                src="/images/process/icon7.svg"
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Design</h3>
              <p className="item-text">
                Sketch out the product to align the user needs
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              <img
                src="/images/process/shape10.svg"
                alt="Border"
                className="line-3"
              />
              <img
                src="/images/process/icon8.svg"
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Develop</h3>
              <p className="item-text">
                Convert the designs into a live application
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              <img
                src="/images/process/icon9.svg"
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Deploy</h3>
              <p className="item-text">
                Launching the application to the market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
