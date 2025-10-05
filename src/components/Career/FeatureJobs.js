import Link from "next/link";
import React from "react";

export default function FeatureJobs() {
  return (
    <section className="feature-jobs bg_white pt-125 pb-140">
      <div className="container blog-grid-container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="section-title text-start">
              <h2 className="mb-0 wow fadeInRight">Featured jobs</h2>
            </div>
          </div>
          <div className="col-md-4 mt-md-0 mt-3 text-md-end text-start">
            <Link href="/jobs" className="wow fadeInLeft btn">
              Show All
              <i className="arrow_right"></i>
            </Link>
          </div>
        </div>

        <div className="row pt-60">
          <div className="col-lg-7">
            <div className="feature-job-tab">
              <ul className="feature-job-list">
                <li className="mt-0">
                  <Link href="/job-details">
                    <div
                      className="single-feature-job wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <h6 className="job-title">
                        Manager- Products & Marketing
                      </h6>
                      <div className="d-flex flex-wrap">
                        <div className="job-location me-3">
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          <span>Branch Banking</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/job-details">
                    <div
                      className="single-feature-job wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h6 className="job-title">
                        Investment Banking - Technology, Analyst
                      </h6>
                      <div className="d-flex flex-wrap">
                        <div className="job-location me-3">
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          <span>Branch Banking</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/job-details">
                    <div
                      className="single-feature-job wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <h6 className="job-title">
                        Contact Center Representative
                      </h6>
                      <div className="d-flex flex-wrap">
                        <div className="job-location me-3">
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          <span>Branch Banking</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/job-details">
                    <div
                      className="single-feature-job wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <h6 className="job-title">ITS Desktop Technician</h6>
                      <div className="d-flex flex-wrap">
                        <div className="job-location me-3">
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          <span>Branch Banking</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 mt-lg-0 mt-4">
            <div
              className="feature-job-description wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="job-title">Manager- Products & Marketing</h6>
              <div className="d-flex flex-wrap">
                <div className="job-location me-3">
                  <i className="icon_pin_alt"></i>NY, United States
                </div>
                <div className="job-catagory">
                  <span>Branch Banking</span> | Full-time
                </div>
              </div>

              <p className="mt-35">
                We are looking for a Product Marketing Manager to lead our
                outbound marketing activities. You’ll be responsible for
                presenting our products in ways that will strengthen our brand
                and boost sales.
              </p>

              <p className="mt-20">
                Your goal will be to develop and implement the most profitable
                plans to position.
              </p>

              <Link href="/job-details" className="btn">
                Apply Now
                <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
