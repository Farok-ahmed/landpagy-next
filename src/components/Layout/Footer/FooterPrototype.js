import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function FooterPrototype() {
  const kiteParallax = useParallax({
    translateX: [0, 25, "easeInQuad"],
    translateY: [0, -30, "easeInQuad"],
    rotateY: [0, 0],
  });
  const womenParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
  });
  const leafParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
  });
  return (
    <footer className="bg-black footer-proto footer-common">
      <div className="bg-shapes">
        <div className="shape" ref={kiteParallax.ref}>
          <img src="/images/home_6/kite.svg" alt="Kite" />
        </div>
        <div className="shape" ref={womenParallax.ref}>
          <img src="/images/home_6/women.svg" alt="Women" />
        </div>
        <div className="shape" ref={leafParallax.ref}>
          <img src="/images/home_6/leaf.svg" alt="Leaf" />
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row justify-content-between">
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-menu">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Careers</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.2s"
                >
                  <div className="footer-menu">
                    <h4>Useful inks</h4>
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
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <a href="/">Scheduling</a>
                      </li>
                      <li>
                        <a href="/">Employee</a>
                      </li>
                      <li>
                        <a href="/">Team Messaging</a>
                      </li>
                      <li>
                        <a href="/">Digital Timesheets</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 offset-lg-1 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="footer-menu">
                <h4>Newsletter</h4>
                <p className="newsletter-text">
                  Sign up and receive the latest tips via email.
                </p>
                <div className="newsletter-box mt-25">
                  <p>Write you email*</p>
                  <form action="#">
                    <div className="mb-20 form-group">
                      <i className="icon_mail_alt"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your email"
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
      <div className="container">
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0.1s">
          <div className="row align-items-center">
            <div className="col-lg-3 text-sm-center text-md-start">
              <ul>
                <li>
                  <a href="/">
                    <img
                      className="d-md-block d-sm-inline-block"
                      src=".//images/logo-5.svg"
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
