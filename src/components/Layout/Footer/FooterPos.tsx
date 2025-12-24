"use client";
import Link from "next/link";
import Image from "next/image";
import kite from "@/assets/images/home_5/icons/kite.svg";
import women from "@/assets/images/home_5/icons/women.svg";
import leaf from "@/assets/images/home_5/icons/leaf.svg";
import logo7 from "@/assets/images/logo-7.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

import { useParallax } from "react-scroll-parallax";

export default function FooterPos() {
  const menu1Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });
  const menu2Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
  const menu3Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.3 });
  const menu4Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.5 });
  const bottomRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });

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
          <Image src={kite} className="layer"
            alt="Kite" />
        </div>
        <div className="shape" ref={womenParallax.ref}>
          <Image src={women} className="layer"
            alt="Women" />
        </div>
        <div className="shape" ref={leafParallax.ref}>
          <Image src={leaf} className="layer"
            alt="Leaf" />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-between">
                <div
                  ref={menu1Ref}
                 className="col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="footer-menu">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <Link href="/about-one">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Contact</Link>
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
                  ref={menu2Ref}
                 className="col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="footer-menu">
                    <h4>Useful inks</h4>
                    <ul>
                      <li>
                        <Link href="/about-one">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Contact</Link>
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
                  ref={menu3Ref}
                 className="col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <Link href="/about-one">About</Link>
                      </li>
                      <li>
                        <Link href="/career">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Contact</Link>
                      </li>
                      <li>
                        <Link href="/home-help-center">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  ref={menu4Ref}
                 className="col-sm-6 col-md-4 col-lg-3"
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
        <div ref={bottomRef} className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-3 text-sm-center text-md-start">
              <ul>
                <li>
                  <Link href="/">
                    <Image src={logo7} className="d-md-block d-sm-inline-block"
                      
                      alt="Footer Logo" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu">
                <ul className="">
                  <li>
                    <Link href="#">Terms & Conditions</Link>
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
            <div className="col-lg-3">
              <ul className="social-link-bg-2">
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
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
