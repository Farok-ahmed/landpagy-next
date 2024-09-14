import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCta() {
  return (
    <section className="services-cta-area pt-90 pb-100">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/services/shape1.svg" alt="" />
        </div>
        <div className="shape">
          <img src="/images/services/shape2.svg" alt="" />
        </div>
        <div className="shape">
          <img src="/images/services/shape3.svg" alt="" />
        </div>
        <div className="shape">
          <img src="/images/services/shape4.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="cta-title">Have an idea ?</h2>
            <p className="cta-text">
              We will turn your ideas to viable product
            </p>
            <Link to="/contact-one" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
