import React from "react";

export default function PriceTwo() {
  return (
    <section className="pricing-area-two pt-135 pb-150">
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Choose Your Plan</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Choose the right plan for your organization to establish and manage
            your program
          </p>
        </div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
          <ul
            className="nav nav-tabs pricing-tabs-two"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="homee-tab"
                data-bs-toggle="tab"
                data-bs-target="#homee"
                type="button"
                role="tab"
                aria-controls="homee"
                aria-selected="true"
              >
                Monthly
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profilee-tab"
                data-bs-toggle="tab"
                data-bs-target="#profilee"
                type="button"
                role="tab"
                aria-controls="profilee"
                aria-selected="false"
              >
                Quaterly
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="homee"
            role="tabpanel"
            aria-labelledby="homee-tab"
          >
            <div className="row align-items-end gy-4 gy-lg-0">
              <div className="col-lg-4 col-md-6 order-lg-1 pe-28">
                <div
                  className="pricing-item-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h5>Free</h5>
                  <div className="price-body">
                    <div className="price">
                      $0<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li>
                        <span>
                          <i className="icon_close"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li>
                        <span>
                          <i className="icon_close"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-3 px-3 mx-auto col-lg-4 col-md-6 order-lg-2 px-sm-0">
                <div
                  className="pricing-item-3 wow fadeInUp middle"
                  data-wow-delay="0.3s"
                >
                  <h5>Business</h5>
                  <div className="price-body">
                    <div className="price">
                      $15<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-2 col-lg-4 col-md-6 order-lg-3 ps-28">
                <div
                  className="pricing-item-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h5>Entreprise</h5>
                  <div className="price-body">
                    <div className="price">
                      $30<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profilee"
            role="tabpanel"
            aria-labelledby="profilee-tab"
          >
            <div className="row align-items-end gy-4 gy-lg-0">
              <div className="col-lg-4 col-md-6 order-lg-1 pe-28">
                <div className="pricing-item-3">
                  <h5>Free</h5>
                  <div className="price-body">
                    <div className="price">
                      $0<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li>
                        <span>
                          <i className="icon_close"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li>
                        <span>
                          <i className="icon_close"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-3 px-0 mx-auto col-lg-4 col-md-6 order-lg-2">
                <div className="pricing-item-3 middle">
                  <h5>Business</h5>
                  <div className="price-body">
                    <div className="price">
                      $15<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-2 col-lg-4 col-md-6 order-lg-3 ps-28">
                <div className="pricing-item-3">
                  <h5>Entreprise</h5>
                  <div className="price-body">
                    <div className="price">
                      $30<span>/</span>
                      <span>m</span>
                    </div>
                    <ul>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Choose 20 language
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        See dashboard analytics
                      </li>
                      <li className="checked">
                        <span>
                          <i className="icon_check"></i>
                        </span>
                        Unlimitied Chat
                      </li>
                    </ul>
                    <a href="/" className="btn">
                      Buy Plan
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
