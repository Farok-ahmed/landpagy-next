import Link from "next/link";
import React from "react";

export default function ContactTwoHero() {
  return (
    <section className="contact-banner-2">
      <div className="shape">
        <img src="/images/contact_2/contact-bg.png" alt="shapes" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="banner-title">Contact Us</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="text-center contact-card">
              <div className="item-icon">
                <img
                  className="mx-auto"
                  src="/images/contact_2/icons/card-icon1.svg"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  Talk to a member of our Sales team
                </h4>
                <p className="item-text">
                  We’ll help you find the right products and pricing for your
                  business.
                </p>
                <Link href="/contact-one" className="item-btn btn btn-red">
                  {" "}
                  Contact Sales{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="text-center contact-card">
              <div className="item-icon">
                <img
                  className="mx-auto"
                  src="/images/contact_2/icons/card-icon2.svg"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h4 className="item-title">Product and account support</h4>
                <p className="item-text">
                  Our help center is fresh and always open for business. If you
                  can’t find the answer.
                </p>
                <Link href="/home-help-center" className="item-btn btn btn-red">
                  {" "}
                  Go to the help center{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
