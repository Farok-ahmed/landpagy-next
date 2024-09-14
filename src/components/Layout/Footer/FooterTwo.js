import React from "react";

export default function FooterTwo() {
  return (
    <footer className="footer-software bg-linen pt-120">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-menu wow fadeInLeft">
                <img
                  className="footer-logo mb-20"
                  src="/images/logo.svg"
                  alt="Footer Logo"
                />
                <p>The Most Trusted Online Course Platform for WordPress.</p>
                <ul className="social-link-bg-2 mt-30">
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
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div
                    className="footer-menu wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <h4>Features</h4>
                    <ul>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                      <li>
                        <a href="/">Develop</a>
                      </li>
                      <li>
                        <a href="/">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="footer-menu wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                      <li>
                        <a href="/">Develop</a>
                      </li>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="footer-menu wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h4>location</h4>
                    <img src="/images/footer/map.png" alt="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0.1s">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ul>
                <li>
                  <span className="copyright px-0">
                    Copyright 2021, All Rights Reserved
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="footer-bottom-menu">
                <ul className="justify-content-lg-end">
                  <li>
                    <a href="/">Terms & Conditions</a>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
