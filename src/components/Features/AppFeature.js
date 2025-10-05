import React from "react";

export default function AppFeature() {
  return (
    <section className="overflow-hidden app-features-area pt-135 pb-190">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-4">
            <div
              className="app-features-images wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="bg-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape">
                  <img src="/images/home_10/shapes/shape3.svg" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="/images/home_10/shapes/shape4.svg" alt="Shape" />
                </div>
              </div>
              <img src="/images/home_10/fetures-img.png" alt="Feature " />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-8">
            <div
              className="app-feature-content wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <h2 className="feature-title cloud-heading-2 mb-65">
                Some of the best
                <span>
                  Features
                  <img
                    className="border-shape"
                    src="/images/home_10/shapes/border.svg"
                    alt="Border"
                  />
                </span>
              </h2>

              <div className="features-items">
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <img src="/images/home_10/icons/icon1.svg" alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Awesome Design</h3>
                    <p className="item-text">
                      We specialize in handcrafting beautiful UI & UX designs.
                      Awesome is a product design.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <img src="/images/home_10/icons/icon2.svg" alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Easy Customize</h3>
                    <p className="item-text">
                      Mobile WMS is easy to customize. Add a Filter Field. Add a
                      Collector Step. Add a new page. Change.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <img src="/images/home_10/icons/icon3.svg" alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Extreme Security</h3>
                    <p className="item-text">
                      The ultimate Mobile security app, online backup, privacy
                      protection,Browser Protection and more!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
