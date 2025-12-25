"use client";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import kite from "@/assets/images/home_6/kite.svg";
import women from "@/assets/images/home_6/women.svg";
import leaf from "@/assets/images/home_5/icons/leaf.svg";
import footerShape from "@/assets/images/home_7/shapes/footer-shape.svg";
import logo5 from "@/assets/images/logo-5.svg";
;

export default function FooterThree() {
  const kiteParallax = useParallax({
    translateX: [0, 100, "easeInQuad"],
    translateY: [0, -100, "easeInQuad"],
    rotateY: [0, 0],
  });

  const womenParallax = useParallax({
    translateX: [0, 100, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
  });

  const leafParallax = useParallax({
    translateX: [0, 100, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
  });
  return (
    <footer className="bg-black footer-software-2 footer-common">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={kite} alt="Kite"
            ref={kiteParallax.ref as React.Ref<HTMLImageElement>} />
        </div>
        <div className="shape">
          <Image src={women} alt="Women"
            ref={womenParallax.ref as React.Ref<HTMLImageElement>} />
        </div>
        <div className="shape">
          <Image src={leaf} alt="Leaf"
            ref={leafParallax.ref as React.Ref<HTMLImageElement>} />
        </div>
        <div className="shape">
          <Image src={footerShape} alt="Footer Shape" />
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
