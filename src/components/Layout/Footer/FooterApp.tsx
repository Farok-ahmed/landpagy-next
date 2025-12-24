"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FooterApp() {
  const widget1Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0.7 });
  const widget2Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0.5 });
  const widget3Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0.3 });
  const widget4Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0.5 });
  const langRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const menuRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const copyrightRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });

  return (
    <footer className="footer-cloud footer-app">
      <div className="app-footer-top pt-165 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                ref={widget1Ref}
               className="footer-widget"
              >
                <Link href="/" className="footer-logo mb-10">
                  <Image src={logo} alt="Logo" />
                </Link>
                <p className="footer-text mb-40">
                  Follow us on social media to find out the latest updates on
                  our progress.
                </p>
                <ul className="widget-social-list">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div
                    ref={widget2Ref}
                   className="footer-widget"
                  >
                    <h4 className="widget-title">Product</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link href="/integrations">Download</Link>
                      </li>
                      <li>
                        <Link href="/pricing-table-one">Pricing plans</Link>
                      </li>
                      <li>
                        <Link href="#">changelog</Link>
                      </li>
                      <li>
                        <Link href="/integrations">integrations</Link>
                      </li>
                      <li>
                        <Link href="/integrations">open source</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    ref={widget3Ref}
                   className="footer-widget"
                  >
                    <h4 className="widget-title">Company</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/job-details">Application</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/jobs">Jobs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    ref={widget4Ref}
                   className="footer-widget"
                  >
                    <h4 className="widget-title">Support</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link href="/contact-one">Getting started</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Chat our support</Link>
                      </li>
                      <li>
                        <Link href="/home-help-center">Help center</Link>
                      </li>
                      <li>
                        <Link href="/services">Service Status</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Report a bug</Link>
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
                ref={langRef}
               className="language-list"
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
                ref={menuRef}
               className="footer-bottom-menu"
              >
                <ul>
                  <li>
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Legal Notice</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <p
                ref={copyrightRef}
               className="copyright-text float-md-end"
              >
                Copyright {new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
