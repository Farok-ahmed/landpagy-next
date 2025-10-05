import React from "react";

export default function HelpFeature() {
  return (
    <section className="features-area-nine section-padding-xl bg-white-600">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">Featured Articles</h2>
              <span>
                Everything you need to get up and running on Landpagy.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <img src="/images/shape/shape18.svg" alt="Icon" />
              <h4>
                <a href="/">Update Landpagy newses to the latest release</a>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <img src="/images/shape/shape18.svg" alt="Icon" />
              <h4>
                <a href="/">
                  Secure connection failed & Landpagy did not connect
                </a>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <img src="/images/shape/shape18.svg" alt="Icon" />
              <h4>
                <a href="/">Insecure password warning in Landpagy</a>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
