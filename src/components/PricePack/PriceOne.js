import Image from "next/image";
import Link from "next/link";

import bannerShape5 from "@/assets/images/home_2/banner-shape-5.svg";
import bannerShape4 from "@/assets/images/home_2/banner-shape-4.svg";
import userIcon1 from "@/assets/images/home_2/user-icon-1.png";
import userIcon2 from "@/assets/images/home_2/user-icon-2.png";
import userIcon3 from "@/assets/images/home_2/user-icon-3.png";
;

export default function PriceOne({ hasShapes }) {
  return (
    <section className="choose-plan-area pt-135 pb-140">
      {hasShapes && (
        <div className="bg-shapes">
          <div className="shape"></div>
          <div className="shape">
            <Image src={bannerShape5} alt="shape" />
          </div>
          <div className="shape"></div>
          <div className="shape">
            <Image src={bannerShape4} alt="shape" />
          </div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      )}
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Choose Your Plan</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Choose the right plan for your organization to establish and manage
            your program
          </p>
        </div>
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <nav>
            <div
              className="nav justify-content-center pricing-switcher"
              id="navs-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="navs-monthly-tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-monthly"
                type="button"
                role="tab"
                aria-controls="navs-monthly"
                aria-selected="true"
              >
                Monthly
              </button>
              <button
                className="nav-link"
                id="navs-annually-tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-annually"
                type="button"
                role="tab"
                aria-controls="navs-annually"
                aria-selected="false"
              >
                Annually
              </button>
            </div>
          </nav>
          <div
            className="tab-content features-tab-content"
            id="navs-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="navs-monthly"
              role="tabpanel"
              aria-labelledby="navs-monthly-tab"
            >
              <div className="row gy-xl-0 gy-4 pricing-item-two-cotnainer">
                <div className="col-xl-4 col-md-6">
                  <div
                    className="pricing-item-2 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image src={userIcon1} alt="icon" />
                    <h4>Startaer</h4>
                    <p>Startaer plan for small business and companies.</p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="pricing-item-2 wow fadeInUp active"
                    data-wow-delay="0.3s"
                  >
                    <Image src={userIcon2} alt="icon" />
                    <h4>Business</h4>
                    <p>Startaer plan for small business and companies.</p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
                <div className="mx-auto col-xl-4 col-md-6">
                  <div
                    className="pricing-item-2 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image src={userIcon3} alt="icon" />
                    <h4>Entreprise</h4>
                    <p>
                      Best planning for big entreprise any kind of large
                      company.
                    </p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="navs-annually"
              role="tabpanel"
              aria-labelledby="navs-annually-tab"
            >
              <div className="row gy-xl-0 gy-4 pricing-item-two-cotnainer">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-item-2">
                    <Image src={userIcon1} alt="icon" />
                    <h4>Startaer</h4>
                    <p>Startaer plan for small business and companies.</p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-item-2 active">
                    <Image src={userIcon2} alt="icon" />
                    <h4>Business</h4>
                    <p>Startaer plan for small business and companies.</p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <Link href="/" className="btn">
                      Buy Plan
                    </Link>
                  </div>
                </div>
                <div className="mx-auto col-xl-4 col-md-6">
                  <div className="pricing-item-2">
                    <Image src={userIcon3} alt="icon" />
                    <h4>Entreprise</h4>
                    <p>
                      Best planning for big entreprise any kind of large
                      company.
                    </p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
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
