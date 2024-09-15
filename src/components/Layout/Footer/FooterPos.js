"use client";
import Link from "next/link";
import React from "react";

import { useParallax } from "react-scroll-parallax";

export default function FooterPos() {
  const kiteParallax = useParallax({
    translateX: [0, 100, "easeInQuad"],
    translateY: [0, -40, "easeInQuad"],
    rotateY: [0, 0],
    speed: [-10],
  });
  const womenParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const leafParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });

  return (
    <footer className="footer-pos footer-software footer-hrm bg-aqua pt-120">
      <div className="bg-shapes">
        <div className="shape" ref={kiteParallax.ref}>
          <img
            src="/images/home_5/icons/kite.svg"
            className="layer"
            alt="Kite"
          />
        </div>
        <div className="shape" ref={womenParallax.ref}>
          <img
            src="/images/home_5/icons/women.svg"
            className="layer"
            alt="Women"
          />
        </div>
        <div className="shape" ref={leafParallax.ref}>
          <img
            src="/images/home_5/icons/leaf.svg"
            className="layer"
            alt="Leaf"
          />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-between">
                <div
                  className="col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-menu">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/home-help-center">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="footer-menu">
                    <h4>Useful inks</h4>
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/home-help-center">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/home-help-center">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-menu">
                    <h4>Newsletter</h4>
                    <p className="newsletter-text">
                      Sign up and receive the latest tips via email.
                    </p>
                    <div className="newsletter-box mt-25">
                      <p className="hrm-email">Write you email*</p>
                      <form action="#">
                        <div className="mb-10 form-group">
                          <i className="icon_mail_alt"></i>
                          <input
                            type="text"
                            className="form-control hrm-input"
                            placeholder="Your email:"
                          />
                        </div>
                        <button type="submit" className="btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
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
            <div className="col-lg-3 text-sm-center text-md-start">
              <ul>
                <li>
                  <a href="/">
                    <img
                      className="d-md-block d-sm-inline-block"
                      src="./images/logo-7.svg"
                      alt="Footer Logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu">
                <ul className="">
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
            <div className="col-lg-3">
              <ul className="social-link-bg-2">
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
        </div>
      </div>
    </footer>
  );
}
