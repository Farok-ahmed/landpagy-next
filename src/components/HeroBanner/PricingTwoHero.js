import React, { useState } from "react";

export default function PricingTwoHero() {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="pricing-banner-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="banner-title">Landpagy with LifeLock Select</h1>
            <p className="banner-text">
              All-in-one protection for your devices, online privacy, and
              identity
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <ul className="nav nav-tabs pricing-switcher-2" role="tablist">
              {/* Add or remove "right" class based on active tab */}
              <span
                className={`switcher-bg ${
                  activeTab === "annual" ? "right" : ""
                }`}
              ></span>

              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link month ${
                    activeTab === "monthly" ? "active" : ""
                  }`}
                  id="monthly-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monthly"
                  type="button"
                  role="tab"
                  aria-controls="monthly"
                  aria-selected={activeTab === "monthly"}
                  onClick={() => handleTabClick("monthly")}
                >
                  Monthly
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link annual ${
                    activeTab === "annual" ? "active" : ""
                  }`}
                  id="annual-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#annual"
                  type="button"
                  role="tab"
                  aria-controls="annual"
                  aria-selected={activeTab === "annual"}
                  onClick={() => handleTabClick("annual")}
                >
                  Annual
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="monthly"
                role="tabpanel"
                aria-labelledby="monthly-tab"
              >
                <p className="old-price">$185.99</p>
                <div>
                  <p className="current-price">$99.49 /year</p>
                  <p className="saving-price ml-15">$45.25% OFF</p>
                </div>
                <p className="price-format">for the first month</p>
              </div>
              <div
                className="tab-pane fade"
                id="annual"
                role="tabpanel"
                aria-labelledby="annual-tab"
              >
                <p className="old-price">$185.99</p>
                <div>
                  <p className="current-price">$199.49 /year</p>
                  <p className="saving-price ml-15">$45.25% OFF</p>
                </div>
                <p className="price-format">for the first year</p>
              </div>

              <a href="/" className="subscribe-btn">
                Subscribe Now
              </a>
              <p className="price-note">
                Plus applicable sales tax. See subscription details below.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
