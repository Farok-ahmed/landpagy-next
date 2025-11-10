"use client";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";

import border from "@/assets/images/home_10/shapes/border.svg";
import shape10 from "@/assets/images/home_10/shapes/shape10.svg";
import shape8 from "@/assets/images/home_10/shapes/shape8.svg";
import shape9 from "@/assets/images/home_10/shapes/shape9.svg";

export default function AppPrice() {
  const refs = useGsapMultiple(6, [
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.5 },
    { animation: 'fadeInUp', delay: 0.3 },
  ]);
  return (
    <section className="app-pricing-area pt-120 pb-150">
      <div className="bg-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape">
          <Image src={shape8} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape9} alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              ref={refs[0]}
              className="mb-20 text-center pricing-title cloud-heading-2"
            >
              <span>
                Plan &
                <Image src={border} className="border-shape"
                  
                  alt="Border" />
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
          <div ref={refs[1]} className="col-12">
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
                      ref={refs[2]}
                      className="app-pricing-item"
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      ref={refs[3]}
                      className="app-pricing-item active"
                    >
                      <Image src={shape10} alt="Shape"
                        className="popular-shape" />
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                  <div className="mx-auto col-lg-4 col-md-6">
                    <div
                      ref={refs[4]}
                      className="app-pricing-item"
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="app-pricing-item active">
                      <Image src={shape10} alt="Shape"
                        className="popular-shape" />
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
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
                      <Link href="/" className="btn">
                        Start Free Trial
                      </Link>
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
              ref={refs[5]}
              className="text-center app-pricing-question pt-60"
            >
              <h5 className="mb-10 question-title">Have any questions?</h5>
              <p className="question-text">
                If you have any question about the pricing, feel free to
                <Link href="/">get in touch</Link> with us, we will be happy to assist
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
