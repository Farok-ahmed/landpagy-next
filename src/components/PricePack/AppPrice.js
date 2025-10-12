;

export default function AppPrice() {
  return (
    <section className="app-pricing-area pt-120 pb-150">
      <div className="bg-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape">
          <img src="/images/home_10/shapes/shape8.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/home_10/shapes/shape9.svg" alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="mb-20 text-center pricing-title cloud-heading-2 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>
                Plan &
                <img
                  className="border-shape"
                  src="/images/home_10/shapes/border.svg"
                  alt="Border"
                />
              </span>
              {""} Price
            </h2>
            <p className="mb-40 text-center title-text">
              <span className="offer">Save over 30%</span> when you select
              annual billing
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
            <nav>
              <div
                className="nav justify-content-center app-pricing-switcher"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="app-monthly-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#app-monthly"
                  type="button"
                  role="tab"
                  aria-controls="nav-monthly"
                  aria-selected="true"
                >
                  Monthly
                </button>
                <button
                  className="nav-link"
                  id="app-annual-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#app-annual"
                  type="button"
                  role="tab"
                  aria-controls="app-annual"
                  aria-selected="false"
                >
                  Annual
                </button>
              </div>
            </nav>
            <div
              className="tab-content pricing-tab-content"
              id="nav-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="app-monthly"
                role="tabpanel"
                aria-labelledby="app-monthly-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="app-pricing-item wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <h4 className="item-title">The Basics</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $9
                          <svg
                            width="41"
                            height="8"
                            viewBox="0 0 41 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M40.9227 3.61575C30.3041 -0.930024 14.6626 -0.415833 0.823485 4.01138L1.12818 4.96383C10.3105 2.02637 20.2436 0.849144 28.9038 1.72135C20.0616 1.36716 10.0547 3.17743 0.909575 6.68782L1.24441 7.62199C14.788 2.42321 30.13 1.04242 40.5827 4.8419L40.945 3.89921C40.9036 3.88417 40.8621 3.86921 40.8206 3.85433L40.9227 3.61575Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Month</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="app-pricing-item wow fadeInUp active"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="/images/home_10/shapes/shape10.svg"
                        alt="Shape"
                        className="popular-shape"
                      />
                      <h4 className="item-title">The Standard</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $19
                          <svg
                            width="55"
                            height="9"
                            viewBox="0 0 55 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M54.0883 2.84397C39.729 -1.31432 18.6682 -0.279641 0.077605 4.60845L0.331895 5.57558C12.7338 2.31469 26.2051 0.790994 37.9942 1.37595C26.0553 1.30988 12.5561 3.45262 0.243512 7.27823L0.540228 8.2332C18.7959 2.56102 39.5958 0.640829 53.8882 4.1042L54.1238 3.13233C54.0867 3.12336 54.0497 3.11442 54.0126 3.10552L54.0883 2.84397Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Month</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                  <div className="mx-auto col-lg-4 col-md-6">
                    <div
                      className="app-pricing-item wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <h4 className="item-title">Meal Plan Pro</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $19
                          <svg
                            width="55"
                            height="9"
                            viewBox="0 0 55 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M54.0883 2.84397C39.729 -1.31432 18.6682 -0.279641 0.077605 4.60845L0.331895 5.57558C12.7338 2.31469 26.2051 0.790994 37.9942 1.37595C26.0553 1.30988 12.5561 3.45262 0.243512 7.27823L0.540228 8.2332C18.7959 2.56102 39.5958 0.640829 53.8882 4.1042L54.1238 3.13233C54.0867 3.12336 54.0497 3.11442 54.0126 3.10552L54.0883 2.84397Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Month</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="app-annual"
                role="tabpanel"
                aria-labelledby="app-annual-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="app-pricing-item">
                      <h4 className="item-title">The Standard</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $49
                          <svg
                            width="55"
                            height="9"
                            viewBox="0 0 55 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M54.0883 2.84397C39.729 -1.31432 18.6682 -0.279641 0.077605 4.60845L0.331895 5.57558C12.7338 2.31469 26.2051 0.790994 37.9942 1.37595C26.0553 1.30988 12.5561 3.45262 0.243512 7.27823L0.540228 8.2332C18.7959 2.56102 39.5958 0.640829 53.8882 4.1042L54.1238 3.13233C54.0867 3.12336 54.0497 3.11442 54.0126 3.10552L54.0883 2.84397Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Year</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="app-pricing-item active">
                      <img
                        src="/images/home_10/shapes/shape10.svg"
                        alt="Shape"
                        className="popular-shape"
                      />
                      <h4 className="item-title">The Standard</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $99
                          <svg
                            width="55"
                            height="9"
                            viewBox="0 0 55 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M54.0883 2.84397C39.729 -1.31432 18.6682 -0.279641 0.077605 4.60845L0.331895 5.57558C12.7338 2.31469 26.2051 0.790994 37.9942 1.37595C26.0553 1.30988 12.5561 3.45262 0.243512 7.27823L0.540228 8.2332C18.7959 2.56102 39.5958 0.640829 53.8882 4.1042L54.1238 3.13233C54.0867 3.12336 54.0497 3.11442 54.0126 3.10552L54.0883 2.84397Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Year</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                  <div className="mx-auto col-lg-4 col-md-6">
                    <div className="app-pricing-item">
                      <h4 className="item-title">Meal Plan Pro</h4>
                      <p className="item-label">Free for 7 days then</p>
                      <p className="item-price">
                        <span className="dollar">
                          $99
                          <svg
                            width="55"
                            height="9"
                            viewBox="0 0 55 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M54.0883 2.84397C39.729 -1.31432 18.6682 -0.279641 0.077605 4.60845L0.331895 5.57558C12.7338 2.31469 26.2051 0.790994 37.9942 1.37595C26.0553 1.30988 12.5561 3.45262 0.243512 7.27823L0.540228 8.2332C18.7959 2.56102 39.5958 0.640829 53.8882 4.1042L54.1238 3.13233C54.0867 3.12336 54.0497 3.11442 54.0126 3.10552L54.0883 2.84397Z"
                              fill="#EC595A"
                            />
                          </svg>
                        </span>
                        <span className="time">/ Year</span>
                      </p>
                      <ul>
                        <li>Product Recommendations</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                      </ul>
                      <a href="/" className="btn">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="text-center app-pricing-question pt-60 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h5 className="mb-10 question-title">Have any questions?</h5>
              <p className="question-text">
                If you have any question about the pricing, feel free to
                <a href="/">get in touch</a> with us, we will be happy to assist
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
