import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/" className="mb-10 footer-logo">
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
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Plans</a>
                  </li>
                  <li>
                    <a href="/">Security</a>
                  </li>
                  <li>
                    <a href="/">Features</a>
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
                    <a href="/">Help center</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Cookies</a>
                  </li>
                  <li>
                    <a href="/">Privacy & terms</a>
                  </li>
                  <li>
                    <a href="/">Sitemap</a>
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
                &copy; 2021 Landpagy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
