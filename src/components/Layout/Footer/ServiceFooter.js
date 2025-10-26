"use client";
import kiteSvg from "@/assets/images/footer/kite.svg";
import leafSvg from "@/assets/images/footer/leaf.svg";
import womenSvg from "@/assets/images/footer/women.svg";
import logo5Svg from "@/assets/images/logo-5.svg";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";

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
        <div className="shape layer" ref={kiteParallax.ref}>
          {/* Converted from <Image src={kiteSvg}> */}
          <Image src={kiteSvg} alt="Shape" />
        </div>
        <div className="shape layer" ref={womenParallax.ref}>
          {/* Converted from <Image src={womenSvg}> */}
          <Image src={womenSvg} alt="Shape" />
        </div>
        <div className="shape layer" ref={leafParallax.ref}>
          {/* Converted from <Image src={leafSvg}> */}
          <Image src={leafSvg} alt="Shape" />
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
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.2s"
                >
                  <div className="footer-menu">
                    <h4>Useful inks</h4>
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
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <a href="#">Scheduling</a>
                      </li>
                      <li>
                        <a href="#">Employee</a>
                      </li>
                      <li>
                        <a href="#">Team Messaging</a>
                      </li>
                      <li>
                        <a href="#">Digital Timesheets</a>
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
                  <Link href="/">
                    
                    <Image
                      className="d-md-block d-sm-inline-block"
                      src={logo5Svg}
                      alt="Footer Logo"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu">
                <ul className="">
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
            <div className="col-lg-3">
              <ul className="social-link-bg-2">
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
        </div>
      </div>
    </footer>
  );
}
