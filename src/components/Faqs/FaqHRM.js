import Link from "next/link";
import React from "react";

export default function FaqHRM() {
  return (
    <section className="faq-area-four pt-125">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/home_4/mobile-shape2.svg" alt="shape" />
        </div>
        <div className="shape">
          <img src="/images/home_4/banner-shape-4.svg" alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Frequently Asked Questions</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Aliquam interdum risus vitae lectus convallis sodales quis dignissim
            mi. Proin sem risus, aliquet in pretium eu, ultrices eu nibh.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="hrmAccordion">
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h2 className="accordion-header" id="hrmheadingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hrmcollapseOne"
                    aria-expanded="false"
                    aria-controls="hrmcollapseOne"
                  >
                    What is an HRM software?
                  </button>
                </h2>
                <div
                  id="hrmcollapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="hrmheadingOne"
                  data-bs-parent="#hrmAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      An HRM system, or HRM software, is designed to automate
                      human resource business processes, transactions, payroll,
                      and compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h2 className="accordion-header" id="hrmheadingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hrmcollapseTwo"
                    aria-expanded="false"
                    aria-controls="hrmcollapseTwo"
                  >
                    How much does Landpagy cost?
                  </button>
                </h2>
                <div
                  id="hrmcollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="hrmheadingTwo"
                  data-bs-parent="#hrmAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      An HRM system, or HRM software, is designed to automate
                      human resource business processes, transactions, payroll,
                      and compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h2 className="accordion-header" id="hrmheadingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hrmcollapseThree"
                    aria-expanded="false"
                    aria-controls="hrmcollapseThree"
                  >
                    How many employees does Landpagy have?
                  </button>
                </h2>
                <div
                  id="hrmcollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="hrmheadingThree"
                  data-bs-parent="#hrmAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      An HRM system, or HRM software, is designed to automate
                      human resource business processes, transactions, payroll,
                      and compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h2 className="accordion-header" id="hrmheadingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hrmcollapseFour"
                    aria-expanded="false"
                    aria-controls="hrmcollapseFour"
                  >
                    Does Landpagy have time tracking?
                  </button>
                </h2>
                <div
                  id="hrmcollapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="hrmcollapseFour"
                  data-bs-parent="#hrmAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      An HRM system, or HRM software, is designed to automate
                      human resource business processes, transactions, payroll,
                      and compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <h2 className="accordion-header" id="hrmheadingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hrmcollapseFive"
                    aria-expanded="false"
                    aria-controls="hrmcollapseFive"
                  >
                    What is the setup process like?
                  </button>
                </h2>
                <div
                  id="hrmcollapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="hrmcollapseFive"
                  data-bs-parent="#hrmAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      An HRM system, or HRM software, is designed to automate
                      human resource business processes, transactions, payroll,
                      and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center faq-btn-area pt-60">
          <h4 className="pb-20 faq-btn-text">Still have a question?</h4>
          <Link href="/contact-two" className="btn btn-red">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
