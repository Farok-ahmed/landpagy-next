"use client";
import React from "react";
import CountUp from "react-countup";

export default function DeveloperSteps() {
  return (
    <section className="overflow-hidden process-area-5 pb-175">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2
              className="text-center heading-3 mb-130 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Landpagy Developer Process
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="process-item-5">
          <div className="row flex-md-row flex-column-reverse">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <div
                className="process-rate-5 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <p className="percent">
                  <span className="counter">
                    <CountUp end={26} duration={2.5} />.
                    <CountUp end={4} duration={2.5} />%
                  </span>
                </p>
                <p>pass rate</p>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div
                className="process-content-5 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h3 className="content-title">
                  Excellent technical communication
                </h3>
                <p className="content-text">
                  Toptal developers must possess strong written and verbal
                  communication skills. They work effectively across multiple
                  collaboration tools and convey complex engineering ideas and
                  concepts with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-5">
          <div className="row flex-md-row flex-column-reverse">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <div
                className="process-rate-5 wow fadeInleft"
                data-wow-delay="0.2s"
              >
                <p className="percent">
                  <span className="counter">
                    <CountUp end={7} duration={2.5} />.
                    <CountUp end={4} duration={2.5} />%
                  </span>
                </p>
                <p>pass rate</p>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div
                className="process-content-5 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h3 className="content-title">Core skills and algorithms</h3>
                <p className="content-text">
                  Each developer is required to demonstrate their computer
                  science fundamentals, problem-solving ability, and technical
                  aptitude to a panel of leading experts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-5">
          <div className="row flex-md-row flex-column-reverse">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <div
                className="process-rate-5 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <p className="percent">
                  <span className="counter">
                    <CountUp end={3} duration={2.5} />.
                    <CountUp end={6} duration={2.5} />%
                  </span>
                </p>
                <p>pass rate</p>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div
                className="process-content-5 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h3 className="content-title">Proactive problem-solving</h3>
                <p className="content-text">
                  Toptal developers are skilled at tackling roadblocks
                  creatively and independently. Each candidate is live-screened
                  by two top developers where they have to offer multiple paths
                  to the solution and make decisions on the spot.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-5">
          <div className="row flex-md-row flex-column-reverse">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <div
                className="process-rate-5 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <p className="percent">
                  <span className="counter">
                    <CountUp end={3} duration={2.5} />.
                    <CountUp end={2} duration={2.5} />%
                  </span>
                </p>
                <p>pass rate</p>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div
                className="process-content-5 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h3 className="content-title">End-to-End project execution</h3>
                <p className="content-text">
                  Our developers deliver a test project to completion,
                  demonstrating their skills across ideating, scoping,
                  implementation, and problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-5">
          <div className="row flex-md-row flex-column-reverse">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <div
                className="process-rate-5 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <p className="percent">
                  <span className="counter">
                    <CountUp end={3} duration={2.5} />%
                  </span>
                </p>
                <p>pass rate</p>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div
                className="process-content-5 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h3 className="content-title">Continued excellence</h3>
                <p className="content-text">
                  Toptal developers are expected to maintain a perfect track
                  record while working with clients. We assess our talent after
                  every engagement to ensure our standards for excellence were
                  met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
