import React from "react";

export default function PosPrice({ hasBG }) {
  return (
    <section
      className={`choose-plan-area-three ${
        hasBG ? "bg-price pt-125 pb-140" : "pt-135 pb-150"
      }`}
    >
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Pick The Plan For You</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Start wherever you are with your retail business and we’ll help you
            succeed. No hidden fees. Cancel anytime.
          </p>
        </div>
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <nav>
            <div
              className="nav justify-content-center pricing-switcher"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-monthly-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-monthly"
                type="button"
                role="tab"
                aria-controls="nav-monthly"
                aria-selected="true"
              >
                Monthly
              </button>
              <button
                className="nav-link"
                id="nav-annually-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-annually"
                type="button"
                role="tab"
                aria-controls="nav-annually"
                aria-selected="false"
              >
                Annually
              </button>
            </div>
          </nav>
          <div className="tab-content features-tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-monthly"
              role="tabpanel"
              aria-labelledby="nav-monthly-tab"
            >
              <div className="row gy-xl-0 gy-4 pricing-item-two-cotnainer">
                <div className="col-xl-4 col-md-6">
                  <div
                    className="pricing-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <h4>Startaer</h4>
                    <div className="price">
                      15 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li className="disable">
                          <i className="icon-close fas fa-times-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li className="disable">
                          <i className="icon-close fas fa-times-circle"></i>
                          Free online store
                        </li>
                        <li className="disable">
                          <i className="icon-close fas fa-times-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Try Free
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="pricing-item active wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h4>Premium</h4>
                    <div className="price">
                      55 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free online store
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Purchase
                    </a>
                  </div>
                </div>
                <div className="mx-auto col-xl-4 col-md-6">
                  <div
                    className="pricing-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h4>Business</h4>
                    <div className="price">
                      95 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free online store
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-annually"
              role="tabpanel"
              aria-labelledby="nav-annually-tab"
            >
              <div className="row gy-xl-0 gy-4 pricing-item-two-cotnainer">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-item">
                    <h4>Startaer</h4>
                    <div className="price">
                      15 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li>
                          <i className="icon-close fas fa-times-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li>
                          <i className="icon-close fas fa-times-circle"></i>
                          Free online store
                        </li>
                        <li>
                          <i className="icon-close fas fa-times-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Try Free
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-item active">
                    <h4>Premium</h4>
                    <div className="price">
                      55 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free online store
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Purchase
                    </a>
                  </div>
                </div>
                <div className="mx-auto col-xl-4 col-md-6">
                  <div className="pricing-item">
                    <h4>Business</h4>
                    <div className="price">
                      95 USD <span>/mo</span>
                    </div>
                    <div className="list-wrapp">
                      <p className="list-title">Includes:</p>
                      <ul>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free 14 day trial
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          No credit card required
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free retail point of sale app
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Free online store
                        </li>
                        <li>
                          <i className="icon-check fas fa-check-circle"></i>
                          Basic inventory tools
                        </li>
                      </ul>
                    </div>
                    <a href="/" className="btn">
                      Purchase
                    </a>
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
