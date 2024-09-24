import Link from "next/link";
import React from "react";

export default function FooterBilling() {
  return (
    <footer className="footer-billing bg-black-800">
      <img
        src="/images/home_8/shape/footer-shape.svg"
        alt="Shape"
        className="shape"
      />
      <div className="footer-top pt-125 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div
                className="footer-widget wow fadeInDown"
                data-wow-delay="0.1s"
              >
                <Link href="/" className="mb-10 footer-logo">
                  <img src="/images/logo-2.png" alt="Logo" />
                </Link>
                <p className="footer-text">
                  For details about managing Customers and billing accounts
                  using API.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="footer-widget wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <h4 className="widget-title">Company</h4>
                <ul className="widget-link-list">
                  <li>
                    <Link href="/about-one">About us</Link>
                  </li>
                  <li>
                    <Link href="/contact-one">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/pricing-table-one">Plans</Link>
                  </li>
                  <li>
                    <Link href="/about-one">Security</Link>
                  </li>
                  <li>
                    <Link href="/features">Features</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="footer-widget wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <h4 className="widget-title">Support</h4>
                <ul className="widget-link-list">
                  <li>
                    <Link href="/home-help-center">Help center</Link>
                  </li>
                  <li>
                    <Link href="/contact-two">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/contact-one">Cookies</Link>
                  </li>
                  <li>
                    <Link href="/about-two">Privacy & terms</Link>
                  </li>
                  <li>
                    <Link href="/subscribe">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="footer-widget wow fadeInDown"
                data-wow-delay="0.7s"
              >
                <h4 className="widget-title">Follow Us</h4>
                <ul className="widget-social-list">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright pb-45">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="language-list wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <form>
                  <i className="fas fa-globe-americas me-1 d-inline-block"></i>
                  <select id="select-lang">
                    <option value="English">English (United States)</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="col-md-8">
              <p
                className="copyright-text float-start float-md-end wow fadeInRight"
                data-wow-delay="0.2s"
              >
                &copy; {new Date().getFullYear()} Landpagy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
