;

export default function ComparePriceTable() {
  return (
    <section className="pricing-compare-table-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center section-title">
              Compare Landpagy with LifeLock Plans
            </h2>
          </div>

          <div className="col-12">
            {/* <!-- pricing-compare-table for ==> mobile--> */}
            <div className="pricing-compare-table mobile">
              <div className="product-plan table-bg">
                <div className="text-center sub-padding">
                  <h3 className="plan-title">Landpagy Enterprise Plan</h3>
                  <ul
                    className="nav nav-tabs pricing-switcher-2"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="monthly3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#monthly3"
                        type="button"
                        role="tab"
                        aria-controls="monthly3"
                        aria-selected="true"
                      >
                        Monthly
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="annual3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#annual3"
                        type="button"
                        role="tab"
                        aria-controls="annual3"
                        aria-selected="false"
                      >
                        Annual
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="monthly3"
                      role="tabpanel"
                      aria-labelledby="monthly3-tab"
                    >
                      <p className="old-price">$170.99</p>
                      <p className="current-price">
                        <span>$99.49 </span>/year
                      </p>
                      <p className="price-format">for the first month</p>
                      <p className="saving-price">$45.25% OFF</p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="annual3"
                      role="tabpanel"
                      aria-labelledby="annual3-tab"
                    >
                      <p className="old-price">$185.99</p>
                      <p className="current-price">
                        <span>$199.49 </span>/year
                      </p>
                      <p className="price-format">for the first year</p>
                      <p className="saving-price">$45.25% OFF</p>
                    </div>

                    <a href="/" className="subscribe-btn">
                      Subscribe Now
                    </a>
                    <p className="price-note">
                      Plus applicable sales tax. See subscription details
                      below.*
                    </p>
                  </div>

                  <ul className="compare-features">
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-1"
                        aria-expanded="false"
                      >
                        Number of devices
                      </button>

                      <div
                        id="feature-1"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-2"
                        aria-expanded="false"
                      >
                        Anti-Spyware, Antivirus, &amp; Ransomware Protection
                      </button>

                      <div
                        id="feature-2"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-4"
                        aria-expanded="false"
                      >
                        Cloud Backup
                      </button>

                      <div
                        id="feature-4"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-5"
                        aria-expanded="false"
                      >
                        Smart Firewall
                      </button>

                      <div
                        id="feature-5"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-6"
                        aria-expanded="false"
                      >
                        Password Manager
                      </button>

                      <div
                        id="feature-6"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-7"
                        aria-expanded="false"
                      >
                        100% Virus Protection Promise
                      </button>

                      <div
                        id="feature-7"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-8"
                        aria-expanded="false"
                      >
                        Parental Control
                      </button>

                      <div
                        id="feature-8"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-8"
                        aria-expanded="false"
                      >
                        Parental Control
                      </button>

                      <div
                        id="feature-8"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-10"
                        aria-expanded="false"
                      >
                        School Time
                      </button>

                      <div
                        id="feature-10"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-11"
                        aria-expanded="false"
                      >
                        Secure transfer
                      </button>

                      <div
                        id="feature-11"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-12"
                        aria-expanded="false"
                      >
                        Statistics and tracking
                      </button>

                      <div
                        id="feature-12"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-13"
                        aria-expanded="false"
                      >
                        Secure VPN
                      </button>

                      <div
                        id="feature-13"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-14"
                        aria-expanded="false"
                      >
                        Privacy Monitor
                      </button>

                      <div
                        id="feature-14"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-15"
                        aria-expanded="false"
                      >
                        PC SafeCam
                      </button>

                      <div
                        id="feature-15"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-16"
                        aria-expanded="false"
                      >
                        Dark Web Monitoring
                      </button>

                      <div
                        id="feature-16"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-17"
                        aria-expanded="false"
                      >
                        LifeLock Identity Alert™ System
                      </button>

                      <div
                        id="feature-17"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-18"
                        aria-expanded="false"
                      >
                        U.S.-based Identity Restoration Specialists
                      </button>

                      <div
                        id="feature-18"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-19"
                        aria-expanded="false"
                      >
                        Stolen Wallet Protection
                      </button>

                      <div
                        id="feature-19"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-20"
                        aria-expanded="false"
                      >
                        Million Dollar Protection™ `Package`
                      </button>

                      <div
                        id="feature-20"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-22"
                        aria-expanded="false"
                      >
                        Credit Monitoring
                      </button>

                      <div
                        id="feature-22"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="product-plan table-bg2">
                <div className="text-center sub-padding">
                  <h3 className="plan-title">Landpagy Unlimited Plus</h3>
                  <ul
                    className="nav nav-tabs pricing-switcher-2"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="monthly4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#monthly4"
                        type="button"
                        role="tab"
                        aria-controls="monthly4"
                        aria-selected="true"
                      >
                        Monthly
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="annual4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#annual4"
                        type="button"
                        role="tab"
                        aria-controls="annual4"
                        aria-selected="false"
                      >
                        Annual
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="monthly4"
                      role="tabpanel"
                      aria-labelledby="monthly4-tab"
                    >
                      <p className="old-price">$170.99</p>
                      <p className="current-price">$99.49/year</p>
                      <p className="price-format">for the first month</p>
                      <p className="saving-price">$45.25% OFF</p>
                      <a href="/" className="subscribe-btn">
                        Subscribe Now
                      </a>
                      <p className="price-note">
                        Plus applicable sales tax. See subscription details
                        below.*
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="annual4"
                      role="tabpanel"
                      aria-labelledby="annual4-tab"
                    >
                      <p className="old-price">$185.99</p>
                      <p className="current-price">$299.49/year</p>
                      <p className="price-format">for the first year</p>
                      <p className="saving-price">$45.25% OFF</p>
                      <a href="/" className="subscribe-btn">
                        Subscribe Now
                      </a>
                      <p className="price-note">
                        Plus applicable sales tax. See subscription details
                        below.*
                      </p>
                    </div>
                  </div>

                  <ul className="compare-features">
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-1"
                        aria-expanded="false"
                      >
                        Number of devices
                      </button>

                      <div
                        id="feature-1"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-2"
                        aria-expanded="false"
                      >
                        Anti-Spyware, Antivirus, &amp; Ransomware Protection
                      </button>

                      <div
                        id="feature-2"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-4"
                        aria-expanded="false"
                      >
                        Cloud Backup
                      </button>

                      <div
                        id="feature-4"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-5"
                        aria-expanded="false"
                      >
                        Smart Firewall
                      </button>

                      <div
                        id="feature-5"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-6"
                        aria-expanded="false"
                      >
                        Password Manager
                      </button>

                      <div
                        id="feature-6"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-7"
                        aria-expanded="false"
                      >
                        100% Virus Protection Promise
                      </button>

                      <div
                        id="feature-7"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-8"
                        aria-expanded="false"
                      >
                        Parental Control
                      </button>

                      <div
                        id="feature-8"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-8"
                        aria-expanded="false"
                      >
                        Parental Control
                      </button>

                      <div
                        id="feature-8"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-10"
                        aria-expanded="false"
                      >
                        School Time
                      </button>

                      <div
                        id="feature-10"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-11"
                        aria-expanded="false"
                      >
                        Secure transfer
                      </button>

                      <div
                        id="feature-11"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-12"
                        aria-expanded="false"
                      >
                        Statistics and tracking
                      </button>

                      <div
                        id="feature-12"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-13"
                        aria-expanded="false"
                      >
                        Secure VPN
                      </button>

                      <div
                        id="feature-13"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-14"
                        aria-expanded="false"
                      >
                        Privacy Monitor
                      </button>

                      <div
                        id="feature-14"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-15"
                        aria-expanded="false"
                      >
                        PC SafeCam
                      </button>

                      <div
                        id="feature-15"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-16"
                        aria-expanded="false"
                      >
                        Dark Web Monitoring
                      </button>

                      <div
                        id="feature-16"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-17"
                        aria-expanded="false"
                      >
                        LifeLock Identity Alert™ System
                      </button>

                      <div
                        id="feature-17"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-18"
                        aria-expanded="false"
                      >
                        U.S.-based Identity Restoration Specialists
                      </button>

                      <div
                        id="feature-18"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-19"
                        aria-expanded="false"
                      >
                        Stolen Wallet Protection
                      </button>

                      <div
                        id="feature-19"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-20"
                        aria-expanded="false"
                      >
                        Million Dollar Protection™ `Package`
                      </button>

                      <div
                        id="feature-20"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-22"
                        aria-expanded="false"
                      >
                        Credit Monitoring
                      </button>

                      <div
                        id="feature-22"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-21"
                        aria-expanded="false"
                      >
                        Statistics and tracking
                      </button>

                      <div
                        id="feature-21"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-23"
                        aria-expanded="false"
                      >
                        SSN &amp; Credit Alerts
                      </button>

                      <div
                        id="feature-23"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-24"
                        aria-expanded="false"
                      >
                        ID Verification Monitoring
                      </button>

                      <div
                        id="feature-24"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-25"
                        aria-expanded="false"
                      >
                        Data Breach Notifications
                      </button>

                      <div
                        id="feature-25"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-26"
                        aria-expanded="false"
                      >
                        NEW! Identity Lock
                      </button>

                      <div
                        id="feature-26"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-27"
                        aria-expanded="false"
                      >
                        NEW! Phone Takeover Monitoring
                      </button>

                      <div
                        id="feature-27"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-28"
                        aria-expanded="false"
                      >
                        Bank &amp; Credit Card Activity Alerts
                      </button>

                      <div
                        id="feature-28"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-29"
                        aria-expanded="false"
                      >
                        Fictitious Identity Monitoring
                      </button>

                      <div
                        id="feature-29"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-30"
                        aria-expanded="false"
                      >
                        Court Records Scanning
                      </button>

                      <div
                        id="feature-30"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-31"
                        aria-expanded="false"
                      >
                        401(k) &amp; Investment Activity Alerts
                      </button>

                      <div
                        id="feature-31"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="feature-title">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-32"
                        aria-expanded="false"
                      >
                        Home Title Monitoring
                      </button>

                      <div
                        id="feature-32"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- pricing-compare-table for ==> desktop-tablet --> */}
            <div className="pricing-compare-table tablet-desk">
              <table>
                <tbody>
                  {/* <!--======== MAIN PLAN ROW ========--> */}
                  <tr>
                    <th colSpan="2"></th>
                    <td className="product-plan table-bg">
                      <div className="text-center sub-padding">
                        <h3 className="plan-title">Landpagy Enterprise Plan</h3>
                        <ul
                          className="nav nav-tabs pricing-switcher-2"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="monthly2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#monthly2"
                              type="button"
                              role="tab"
                              aria-controls="monthly2"
                              aria-selected="true"
                            >
                              Monthly
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="annual2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#annual2"
                              type="button"
                              role="tab"
                              aria-controls="annual2"
                              aria-selected="false"
                            >
                              Annual
                            </button>
                          </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="monthly2"
                            role="tabpanel"
                            aria-labelledby="monthly2-tab"
                          >
                            <p className="old-price">$170.99</p>
                            <p className="current-price">
                              <span>$99.49 </span>/year
                            </p>
                            <p className="price-format">for the first month</p>
                            <p className="saving-price">$45.25% OFF</p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="annual2"
                            role="tabpanel"
                            aria-labelledby="annual2-tab"
                          >
                            <p className="old-price">$185.99</p>
                            <p className="current-price">
                              <span>$199.49 </span>/year
                            </p>
                            <p className="price-format">for the first year</p>
                            <p className="saving-price">$45.25% OFF</p>
                          </div>

                          <a href="/" className="subscribe-btn">
                            Subscribe Now
                          </a>
                          <p className="price-note">
                            Plus applicable sales tax. See subscription details
                            below.*
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="product-plan table-bg2">
                      <div className="text-center sub-padding">
                        <h3 className="plan-title">Landpagy Unlimited Plus</h3>
                        <ul
                          className="nav nav-tabs pricing-switcher-2"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="monthly2-2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#monthly2-2"
                              type="button"
                              role="tab"
                              aria-controls="monthly2-2"
                              aria-selected="true"
                            >
                              Monthly
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="annual2-2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#annual2-2"
                              type="button"
                              role="tab"
                              aria-controls="annual2-2"
                              aria-selected="false"
                            >
                              Annual
                            </button>
                          </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="monthly2-2"
                            role="tabpanel"
                            aria-labelledby="monthly2-2-tab"
                          >
                            <p className="old-price">$170.99</p>
                            <p className="current-price">
                              <span>$99.49 </span>/year
                            </p>
                            <p className="price-format">for the first month</p>
                            <p className="saving-price">$45.25% OFF</p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="annual2-2"
                            role="tabpanel"
                            aria-labelledby="annual2-2-tab"
                          >
                            <p className="old-price">$185.99</p>
                            <p className="current-price">
                              <span>$299.49 </span>/year
                            </p>
                            <p className="price-format">for the first year</p>
                            <p className="saving-price">$45.25% OFF</p>
                          </div>

                          <a href="/" className="subscribe-btn">
                            Subscribe Now
                          </a>
                          <p className="price-note">
                            Plus applicable sales tax. See subscription details
                            below.*
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* <!--======== DEVICE SECURITY ========--> */}
                  {/* <!-- table-row-1 --> */}
                  <tr className="feature-row red-top gray-bottom">
                    <th rowSpan="12" className="feature-type">
                      <span className="section-text nowrap">
                        Device Security
                      </span>
                    </th>

                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-1"
                        aria-expanded="false"
                      >
                        Number of devices
                      </button>

                      <div
                        id="feature-1"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <p>
                          Landpagy offers protection for up to 5 PCs, Macs,
                          smartphones or tablets
                        </p>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <p>
                          Landpagy Ultimate Plus offers protection for
                          unlimited* PCs, Macs, smartphones or tablets
                          (Restrictions apply)
                        </p>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-2 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-2"
                        aria-expanded="false"
                      >
                        Anti-Spyware, Antivirus, & Ransomware Protection
                      </button>

                      <div
                        id="feature-2"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-3 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-3"
                        aria-expanded="false"
                      >
                        Online Threat Protection
                      </button>

                      <div
                        id="feature-3"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-4 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-4"
                        aria-expanded="false"
                      >
                        Cloud Backup
                      </button>

                      <div
                        id="feature-4"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <p>100GB cloud storage</p>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <p>500GB cloud storage</p>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-5 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-5"
                        aria-expanded="false"
                      >
                        Smart Firewall
                      </button>

                      <div
                        id="feature-5"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-6 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-6"
                        aria-expanded="false"
                      >
                        Password Manager
                      </button>

                      <div
                        id="feature-6"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-7 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-7"
                        aria-expanded="false"
                      >
                        100% Virus Protection Promise
                      </button>

                      <div
                        id="feature-7"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-8 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-8"
                        aria-expanded="false"
                      >
                        Parental Control
                      </button>

                      <div
                        id="feature-8"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row9 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-9"
                        aria-expanded="false"
                      >
                        Technology Services
                      </button>

                      <div
                        id="feature-9"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-10 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-10"
                        aria-expanded="false"
                      >
                        School Time
                      </button>

                      <div
                        id="feature-10"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-11 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-11"
                        aria-expanded="false"
                      >
                        Secure transfer
                      </button>

                      <div
                        id="feature-11"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-12 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-12"
                        aria-expanded="false"
                      >
                        Statistics and tracking
                      </button>

                      <div
                        id="feature-12"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!--======== ONLINE PRIVACY ========--> */}
                  {/* <!-- table-row-13 --> */}
                  <tr className="feature-row red-top gray-bottom">
                    <th rowSpan="3" className="feature-type">
                      <span className="section-text nowrap">
                        Online Privacy
                      </span>
                    </th>

                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-13"
                        aria-expanded="false"
                      >
                        Secure VPN
                      </button>

                      <div
                        id="feature-13"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <p>Up to 5 PC's, Mac's, smartphones or tablets</p>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <p>
                          Unlimited* PC's, Mac's, smartphones or tablets
                          (Restrictions apply)
                        </p>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-14 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-14"
                        aria-expanded="false"
                      >
                        Privacy Monitor
                      </button>

                      <div
                        id="feature-14"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-15 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-15"
                        aria-expanded="false"
                      >
                        PC SafeCam
                      </button>

                      <div
                        id="feature-15"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!--======== IDENTITY THEFT PROTECTION========--> */}
                  {/* <!-- table-row-16 --> */}
                  <tr className="feature-row red-top gray-bottom">
                    <th rowSpan="17" className="feature-type">
                      <span className="section-text nowrap">
                        Identity Theft Protection
                      </span>
                    </th>

                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-16"
                        aria-expanded="false"
                      >
                        Dark Web Monitoring
                      </button>

                      <div
                        id="feature-16"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-17 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-17"
                        aria-expanded="false"
                      >
                        LifeLock Identity Alert™ System
                      </button>

                      <div
                        id="feature-17"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-18 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-18"
                        aria-expanded="false"
                      >
                        U.S.-based Identity Restoration Specialists
                      </button>

                      <div
                        id="feature-18"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-19 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-19"
                        aria-expanded="false"
                      >
                        Stolen Wallet Protection
                      </button>

                      <div
                        id="feature-19"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-20 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-20"
                        aria-expanded="false"
                      >
                        Million Dollar Protection™ `Package`
                      </button>

                      <div
                        id="feature-20"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text pt-35 pb-35">
                        <p>
                          Up to $25K in Stolen Funds Reimbursement Up to $25K in
                          Personal Expense Compensation Up to $1M in Coverage
                          for Lawyers & Experts
                        </p>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text pt-35 pb-35">
                        <p>
                          Up to $1M in Stolen Funds Reimbursement Up to $1M in
                          Personal Expense Compensation Up to $1M in Coverage
                          for Lawyers & Experts
                        </p>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-21 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-21"
                        aria-expanded="false"
                      >
                        Statistics and tracking
                      </button>

                      <div
                        id="feature-21"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-22 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-22"
                        aria-expanded="false"
                      >
                        Credit Monitoring
                      </button>

                      <div
                        id="feature-22"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <p>1 Bureau</p>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <p>3 Bureau</p>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-23 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-23"
                        aria-expanded="false"
                      >
                        SSN & Credit Alerts
                      </button>

                      <div
                        id="feature-23"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-24 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-24"
                        aria-expanded="false"
                      >
                        ID Verification Monitoring
                      </button>

                      <div
                        id="feature-24"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-25 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-25"
                        aria-expanded="false"
                      >
                        Data Breach Notifications
                      </button>

                      <div
                        id="feature-25"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-26 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-26"
                        aria-expanded="false"
                      >
                        NEW! Identity Lock
                      </button>

                      <div
                        id="feature-26"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-27 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-27"
                        aria-expanded="false"
                      >
                        NEW! Phone Takeover Monitoring
                      </button>

                      <div
                        id="feature-27"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-28 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-28"
                        aria-expanded="false"
                      >
                        Bank & Credit Card Activity Alerts
                      </button>

                      <div
                        id="feature-28"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-29 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-29"
                        aria-expanded="false"
                      >
                        Fictitious Identity Monitoring
                      </button>

                      <div
                        id="feature-29"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-30 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-30"
                        aria-expanded="false"
                      >
                        Court Records Scanning
                      </button>

                      <div
                        id="feature-30"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-31 --> */}
                  <tr className="feature-row">
                    <td className="feature-title table-title-bg gray-bottom">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-31"
                        aria-expanded="false"
                      >
                        401(k) & Investment Activity Alerts
                      </button>

                      <div
                        id="feature-31"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature gray-bottom table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- table-row-32 --> */}
                  <tr className="feature-row red-bottom">
                    <td className="feature-title table-title-bg">
                      <button
                        className="feature-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#feature-32"
                        aria-expanded="false"
                      >
                        Home Title Monitoring
                      </button>

                      <div
                        id="feature-32"
                        className="accordion-collapse collapse"
                      >
                        <div className="feature-body">
                          <p>
                            Our innovative security technology is powered by
                            artificial intelligence (AI) and machine learning,
                            and our team monitors online threats across the
                            globe to help protect your devices.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="feature table-bg">
                      <div className="feature-text">
                        <i className="icon_close"></i>
                      </div>
                    </td>

                    <td className="feature table-bg2">
                      <div className="feature-text">
                        <i className="icon_check"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
