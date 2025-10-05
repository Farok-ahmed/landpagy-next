import React from "react";

export default function HelpCenterCta() {
  return (
    <section className="cta-area cta-area-two section-padding bg-red-150">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center pb-0">
              <h2 className="mt-n4 font-bold">
                Can’t find what you’re looking for?
              </h2>
              <button type="submit" className="btn btn-red mt-16">
                Open a Support Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="shape9"></span>
      <span className="shape12"></span>
      <img
        className="shape10 d-none d-lg-block"
        src="/images/shape/shape10.svg"
        alt="Shape"
      />
      <img
        className="shape11 d-none d-lg-block"
        src="/images/shape/shape11.svg"
        alt="Shape"
      />
    </section>
  );
}
