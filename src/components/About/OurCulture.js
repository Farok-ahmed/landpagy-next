import React from "react";

export default function OurCulture() {
  return (
    <section className="culture-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title-left">
              <h2>Our Culture</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="culture-right">
              <div className="culture-item">
                <h5 className="item-title">Diverse and Inclusive</h5>
                <h4 className="item-text">
                  We don’t just value differences—we celebrate them.
                </h4>
                <a href="/" className="item-link">
                  Find out more
                </a>
              </div>
              <div className="culture-item">
                <h5 className="item-title">Socially Responsible</h5>
                <h4 className="item-text">
                  “Landpagy thrives because of the exceptional talent we have
                  attracted.”
                </h4>
                <a href="/" className="item-link">
                  Zuhura Ummha <br />
                  Chairman of the Board and CTO
                </a>
              </div>
            </div>

            <div className="culture-left">
              <div className="culture-item">
                <h5 className="item-title">Socially Responsible</h5>
                <h4 className="item-text">
                  At Oracle, we know that sustainability is good business.
                </h4>
                <a href="/" className="item-link">
                  Learn how
                </a>
              </div>
              <div className="culture-item">
                <h5 className="item-title">Work Here</h5>
                <h4 className="item-text">
                  Make a difference? You’ve come to the right place.
                </h4>
                <a href="/" className="item-link">
                  Find opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
