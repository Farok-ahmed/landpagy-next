"use client";
import map from "@/assets/images/footer/map.png";
import logo from "@/assets/images/logo.svg";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";

export default function FooterTwo() {
  const refs = useGsapMultiple(5, [
    { animation: 'fadeInLeft' },
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.5 },
    { animation: 'fadeInUp', delay: 0.1 },
  ]);
  return (
    <footer className="footer-software bg-linen pt-120">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div ref={refs[0]} className="footer-menu">
                <Image src={logo} className="footer-logo mb-20"
                  
                  alt="Footer Logo" />
                <p>The Most Trusted Online Course Platform for WordPress.</p>
                <ul className="social-link-bg-2 mt-30">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
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
                    ref={refs[1]}
                   className="footer-menu"
                  >
                    <h4>Features</h4>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                      <li>
                        <a href="#">Develop</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    ref={refs[2]}
                   className="footer-menu"
                  >
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                      <li>
                        <a href="#">Develop</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    ref={refs[3]}
                   className="footer-menu"
                  >
                    <h4>location</h4>
                    <Image src={map} alt="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div ref={refs[4]} className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ul>
                <li>
                  <span className="copyright px-0">
                    Copyright {new Date().getFullYear()}, All Rights Reserved
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="footer-bottom-menu">
                <ul className="justify-content-lg-end">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Legal Notice</a>
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
