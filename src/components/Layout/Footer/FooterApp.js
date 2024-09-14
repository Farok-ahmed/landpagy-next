import React from "react";
import { Link } from "react-router-dom";

export default function FooterApp() {
  return (
    <footer className="footer-cloud footer-app">
      <div className="app-footer-top pt-165 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="footer-widget wow fadeInDown"
                data-wow-delay="0.7s"
              >
                <Link to="/" className="footer-logo mb-10">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
                <p className="footer-text mb-40">
                  Follow us on social media to find out the latest updates on
                  our progress.
                </p>
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
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="footer-widget wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h4 className="widget-title">Product</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link to="/integrations">Download</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing plans</Link>
                      </li>
                      <li>
                        <Link to="/contact">changelog</Link>
                      </li>
                      <li>
                        <Link to="/integrations">integrations</Link>
                      </li>
                      <li>
                        <Link to="/integrations">open source</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="footer-widget wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    <h4 className="widget-title">Company</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/job-details">Application</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/jobs">Jobs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="footer-widget wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h4 className="widget-title">Support</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link to="/">Getting started</Link>
                      </li>
                      <li>
                        <Link to="/contact">Chat our support</Link>
                      </li>
                      <li>
                        <Link to="/home-help-center">Help center</Link>
                      </li>
                      <li>
                        <Link to="/services">Service Status</Link>
                      </li>
                      <li>
                        <Link to="/contact">Report a bug</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-2">
              <div
                className="language-list wow fadeInDown"
                data-wow-delay="0.2s"
              >
                <form>
                  <select id="select-lang">
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="footer-bottom-menu wow fadeInDown"
                data-wow-delay="0.2s"
              >
                <ul>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Legal Notice</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <p
                className="copyright-text float-md-end wow fadeInDown"
                data-wow-delay="0.2s"
              >
                Copyright 2021, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
