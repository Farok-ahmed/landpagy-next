import React from "react";

export default function AppClient() {
  return (
    <section className="app-clients-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="text-center app-clients-title cloud-heading-2 mb-35 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <span>
                Trusted
                <img
                  className="border-shape"
                  src="/images/home_10/shapes/border.svg"
                  alt="Border"
                />
              </span>
              {""} by Companies
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.1s">
              <img src="/images/brand/brand-1.svg" alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.3s">
              <img src="/images/brand/brand-2.svg" alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.5s">
              <img src="/images/brand/brand-3.svg" alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.7s">
              <img src="/images/brand/brand-4.svg" alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.9s">
              <img src="/images/brand/brand-5.svg" alt="Brand " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
