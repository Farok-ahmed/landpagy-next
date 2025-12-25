"use client";
import React from "react";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import kite from "@/assets/images/footer/kite.svg";
import women from "@/assets/images/footer/women.svg";
import leaf from "@/assets/images/footer/leaf.svg";
import logo5 from "@/assets/images/logo-5.svg";


export default function ServiceFooter() {
  const kiteParallax = useParallax({
    translateX: [0, 100, "easeInQuad"],
    translateY: [0, -40, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const womenParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const leafParallax = useParallax({
    translateX: [0, 300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  return (
    <footer className="bg-black footer-hrm footer-common">
      <div className="bg-shapes">
        <div className="shape layer" ref={kiteParallax.ref as React.RefObject<HTMLDivElement>}>
          <Image src={kite} alt="Shape" />
        </div>
        <div className="shape layer" ref={womenParallax.ref as React.Ref<HTMLDivElement>}>
          <Image src={women} alt="Shape" />
        </div>
        <div className="shape layer" ref={leafParallax.ref as React.Ref<HTMLDivElement>}>
          <Image src={leaf} alt="Shape" />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row justify-content-between">
                <div
                 className="col-sm-6 col-md-3"
                 
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
                        <Link href="/contact-one">Contact</Link>
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
                 className="col-sm-6 col-md-3"
                 
                >
                  <div className="footer-menu">
                    <h4>Useful inks</h4>
                    <ul>
                      <li>
                        <Link href="#">Design</Link>
                      </li>
                      <li>
                        <Link href="#">Social media</Link>
                      </li>
                      <li>
                        <Link href="#">Develop</Link>
                      </li>
                      <li>
                        <Link href="#">Design</Link>
                      </li>
                      <li>
                        <Link href="#">Social media</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                 className="col-sm-6 col-md-3"
                 
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <Link href="#">Scheduling</Link>
                      </li>
                      <li>
                        <Link href="#">Employee</Link>
                      </li>
                      <li>
                        <Link href="#">Team Messaging</Link>
                      </li>
                      <li>
                        <Link href="#">Digital Timesheets</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
             className="col-sm-6 col-lg-3 offset-lg-1"
             
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
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-3 text-sm-center text-md-start">
              <ul>
                <li>
                  <Link href="/">
                    <Image src={logo5} className="d-md-block d-sm-inline-block"
                      
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
