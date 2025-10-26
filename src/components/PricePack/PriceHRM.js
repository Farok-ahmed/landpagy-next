import Image from "next/image";
import testShape1 from "@/assets/images/home_4/test-shape1.svg";
import integrationShape from "@/assets/images/home_4/integration-shape.svg";
import userIcon1 from "@/assets/images/home_2/user-icon-1.png";
import userIcon2 from "@/assets/images/home_2/user-icon-2.png";
import userIcon3 from "@/assets/images/home_2/user-icon-3.png";
;

export default function PriceHRM() {
  return (
    <section className="choose-plan-area choose-plan-area-bg2 pt-125 pb-140">
      <div className="bg-shape">
        <div className="shape">
          <Image src={testShape1} alt="shape" />
        </div>
        <div className="shape">
          <Image src={integrationShape} alt="shape" />
        </div>
      </div>
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
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
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
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
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
                    <a href="/" className="btn">
                      Buy Plan
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
                  <div className="pricing-item-2">
                    <Image src={userIcon1} alt="icon" />
                    <h4>Startaer</h4>
                    <p>Startaer plan for small business and companies.</p>
                    <div className="price">$30.00</div>
                    <div className="pack-feature">
                      Up to 10 user+ $3 per user
                    </div>
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
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
                    <a href="/" className="btn">
                      Buy Plan
                    </a>
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
