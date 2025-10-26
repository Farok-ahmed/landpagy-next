import Link from "next/link";


export default function FourColumnPriceTable({ pricePageTwo }) {
  return (
    <section
      className={`pricing-area section-padding ${
        pricePageTwo ? "section-padding-2" : "section-padding"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n3">
                Choose the plan that's right for your team
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-10">
            <ul className="nav nav-tabs pricing-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Quaterly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2">
            <select className="pricing-currency">
              <option data-display="USD">USD</option>
              <option data-display="EURO">EURO</option>
            </select>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                <div className="pricing-item">
                  <h3 className="pricing-title">Free</h3>
                  <div className="price">
                    <span>Alwase Free</span>
                  </div>
                  <span className="pricing-item-user">1 user</span>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="pricing-item">
                  <div className="badge">20%off</div>
                  <h3 className="pricing-title">Starter</h3>
                  <div className="price">
                    <span className="dollar">$5</span>
                    <span className="euro">&euro;4.43</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    Starts at $8 Includes 2 users
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="pricing-item active">
                  <div className="badge">35%off</div>
                  <h3 className="pricing-title">Premium</h3>
                  <div className="price">
                    <span className="dollar">$8</span>
                    <span className="euro">&euro;7.09</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $10.4 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="pricing-item bg-yellow-200">
                  <div className="badge">50%off</div>
                  <h3 className="pricing-title">Enterprise</h3>
                  <div className="price">
                    <span className="dollar">$16</span>
                    <span className="euro">&euro;14.17</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $16 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-black">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="assets/images/most.png"
              alt=""
              className="popular d-none d-lg-block"
            />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item">
                  <h3 className="pricing-title">Free</h3>
                  <div className="price">
                    <span>Alwase Free</span>
                  </div>
                  <span className="pricing-item-user">1 user</span>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item">
                  <div className="badge">20%off</div>
                  <h3 className="pricing-title">Starter</h3>
                  <div className="price">
                    <span className="dollar">$7</span>
                    <span className="euro">&euro;6.20</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $8 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item active">
                  <div className="badge">35%off</div>
                  <h3 className="pricing-title">Premium</h3>
                  <div className="price">
                    <span className="dollar">$10</span>
                    <span className="euro">&euro;8.86</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    Starts at $10.4 Includes 2 users
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item bg-yellow-200">
                  <div className="badge">50%off</div>
                  <h3 className="pricing-title">Enterprise</h3>
                  <div className="price">
                    <span className="dollar">$12</span>
                    <span className="euro">&euro;10.63</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    Starts at $16 Includes 2 users
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-black">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item">
                  <h3 className="pricing-title">Free</h3>
                  <div className="price">
                    <span>Alwase Free</span>
                  </div>
                  <span className="pricing-item-user">1 user</span>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Continue
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item">
                  <div className="badge">20%off</div>
                  <h3 className="pricing-title">Starter</h3>
                  <div className="price">
                    <span className="dollar">$10</span>
                    <span className="euro">&euro;8.86</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $8 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-gray-100">Unlimited integrations</li>
                    <li className="text-gray-100">24 hour support</li>
                    <li className="text-gray-100">Per user settings</li>
                    <li className="text-gray-100">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item active">
                  <div className="badge">35%off</div>
                  <h3 className="pricing-title">Premium</h3>
                  <div className="price">
                    <span className="dollar">$20</span>
                    <span className="euro">&euro;17.62</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $10.4 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-gray-100">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="pricing-item bg-yellow-200">
                  <div className="badge">50%off</div>
                  <h3 className="pricing-title">Enterprise</h3>
                  <div className="price">
                    <span className="dollar">$25</span>
                    <span className="euro">&euro;22.15</span>
                    <sup> /user/mo</sup>
                  </div>
                  <span className="pricing-item-user">
                    {" "}
                    Starts at $16 Includes 2 users{" "}
                  </span>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                  <ul>
                    <li className="text-black">Time tracking</li>
                    <li className="text-black">Activity levels</li>
                    <li className="text-black">Unlimited screenshots</li>
                    <li className="text-black">Payments</li>
                    <li className="text-black">Unlimited integrations</li>
                    <li className="text-black">24 hour support</li>
                    <li className="text-black">Per user settings</li>
                    <li className="text-black">Track apps & URLs</li>
                    <li className="text-black">Mobile GPS tracking=</li>
                  </ul>
                  <Link href="/" className="pricing-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="tex text-center">
            <span>
              {" "}
              ( *Prices exclude VAT/Taxes. Discounts applicable for the first
              year only. ){" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
