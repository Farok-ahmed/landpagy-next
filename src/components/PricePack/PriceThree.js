"use client";
import useGsapReveal from "@/hooks/useGsapReveal";
import Link from "next/link";
;

export default function PriceThree() {
  const titleRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const pricingBgRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });

  return (
    <section className="billing-pricing-area pt-120 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              ref={titleRef}
              className="text-center pricing-title mb-70"
            >
              Find a plan that's right for you
            </h2>
          </div>
        </div>

        <div ref={pricingBgRef} className="row pricing-bg">
          <div className="col-md-4">
            <div className="pricing-item">
              <p className="pricing-label">Basic</p>
              <h3 className="pricing-item-title">Free</h3>
              <p className="pricing-item-text">
                For most businesses that want to optimize
              </p>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i> Chat widget
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Chat Inbox
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Callbell branding
                </li>
                <li className="disable">
                  <i className="far fa-check-circle"></i> Mobile App
                </li>
              </ul>
              <Link href="/" className="btn-bordered">
                Choose Plan
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-item">
              <p className="pricing-label">Most Popular</p>
              <h3 className="pricing-item-title">
                $19 <span>/ month</span>
              </h3>
              <p className="pricing-item-text">
                For most businesses that want to optimize
              </p>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i> Chat widget
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Chat Inbox
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Callbell branding
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Mobile App
                </li>
              </ul>
              <Link href="/" className="btn-bordered">
                Choose Plan
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-item">
              <p className="pricing-label">Enterprise</p>
              <h3 className="pricing-item-title">
                $99 <span>/ month</span>
              </h3>
              <p className="pricing-item-text">
                For most businesses that want to optimize
              </p>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i> Chat widget
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Chat Inbox
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Callbell branding
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Mobile App
                </li>
              </ul>
              <Link href="/" className="btn-bordered">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
