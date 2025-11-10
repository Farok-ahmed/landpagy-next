"use client";
import useGsapReveal, { useGsapMultiple } from "@/hooks/useGsapReveal";
import Link from "next/link";
;

export default function PriceTwo() {
  const headingRef = useGsapReveal({ animation: 'fadeInUp' });
  const paragraphRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
  const tabsRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
  const priceRefs = useGsapMultiple(3, [
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.5 },
  ]);

  return (
    <section className="pricing-area-two pt-135 pb-150">
      <div className="container">
        <div className="section-title-center">
          <h2 ref={headingRef}>Choose Your Plan</h2>
          <p ref={paragraphRef}>
            Choose the right plan for your organization to establish and manage
            your program
          </p>
        </div>
        <div ref={tabsRef} className="text-center">
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
                  ref={priceRefs[0]}
                  className="pricing-item-3"
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-3 px-3 mx-auto col-lg-4 col-md-6 order-lg-2 px-sm-0">
                <div
                  ref={priceRefs[1]}
                  className="pricing-item-3 middle"
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-2 col-lg-4 col-md-6 order-lg-3 ps-28">
                <div
                  ref={priceRefs[2]}
                  className="pricing-item-3"
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
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
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
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
