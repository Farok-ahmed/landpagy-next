import React from "react";

export default function WhyChooseOne() {
  return (
    <section className="why-choose section-padding">
      <div className="container">
        <div className="why-choose-wrapper">
          <div className="row">
            <div className="col-md-4 wow fadeInUp animate__faster">
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <img src="/images/icon/icon.svg" alt="Why Choose Icon" />
                </div>
                <h4>Deadlines will never surprise you again.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp animate__fast">
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <img src="/images/icon/icon-2.svg" alt="Why Choose Icon" />
                </div>
                <h4>Everyone knows what need to do.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <img src="/images/icon/icon-3.svg" alt="Why Choose Icon" />
                </div>
                <h4>Less juggling, more time for Real Work.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
