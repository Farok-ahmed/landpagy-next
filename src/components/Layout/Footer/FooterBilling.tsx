"use client";
import footerShape from "@/assets/images/home_8/shape/footer-shape.svg";
import logo2 from "@/assets/images/logo-2.png";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";

export default function FooterBilling() {
  const refs = useGsapMultiple(6, [
    { animation: 'fadeInDown', delay: 0.1 },
    { animation: 'fadeInDown', delay: 0.3 },
    { animation: 'fadeInDown', delay: 0.5 },
    { animation: 'fadeInDown', delay: 0.7 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
  ]);
  return (
    <footer className="footer-billing bg-black-800">
      <Image src={footerShape} alt="Shape"
       className="shape" />
      <div className="footer-top pt-125 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div
                ref={refs[0]}
               className="footer-widget"
              >
                <Link href="/" className="mb-10 footer-logo">
                  <Image src={logo2} alt="Logo" />
                </Link>
                <p className="footer-text">
                  For details about managing Customers and billing accounts
                  using API.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                ref={refs[1]}
               className="footer-widget"
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
                ref={refs[2]}
               className="footer-widget"
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
                ref={refs[3]}
               className="footer-widget"
              >
                <h4 className="widget-title">Follow Us</h4>
                <ul className="widget-social-list">
                  <li>
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-google"></i>
                    </Link>
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
                ref={refs[4]}
               className="language-list"
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
                ref={refs[5]}
               className="copyright-text float-start float-md-end"
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
