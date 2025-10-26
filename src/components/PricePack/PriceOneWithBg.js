import Image from "next/image";
import Link from "next/link";

import userIcon1 from "@/assets/images/home_2/user-icon-1.png";
import userIcon2 from "@/assets/images/home_2/user-icon-2.png";
import userIcon3 from "@/assets/images/home_2/user-icon-3.png";
;

export default function PriceOneWithBg() {
  return (
    <section className="choose-plan-area choose-plan-area-bg2 pt-125 pb-140">
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
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="navv-monthly-tab"
                data-bs-toggle="tab"
                data-bs-target="#navv-monthly"
                type="button"
                role="tab"
                aria-controls="navv-monthly"
                aria-selected="true"
              >
                Monthly
              </button>
              <button
                className="nav-link"
                id="navv-annually-tab"
                data-bs-toggle="tab"
                data-bs-target="#navv-annually"
                type="button"
                role="tab"
                aria-controls="navv-annually"
                aria-selected="false"
              >
                Annually
              </button>
            </div>
          </nav>
          <div
            className="tab-content features-tab-content"
            id="navv-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="navv-monthly"
              role="tabpanel"
              aria-labelledby="navv-monthly-tab"
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
              id="navv-annually"
              role="tabpanel"
              aria-labelledby="navv-annually-tab"
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
