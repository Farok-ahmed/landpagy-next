"use client";
import Link from "next/link";
import Image from "next/image";
import footerShape from "@/assets/images/home_4/footer-shape.svg";
import bannerShape4 from "@/assets/images/home_4/banner-shape-4.svg";
import logo from "@/assets/images/logo.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FooterHRM() {
  const menu1Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });
  const menu2Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
  const menu3Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.3 });
  const menu4Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.5 });
  const bottomRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });

  return (
    <footer className="footer-hrm footer-software bg-merino">
      <div className="bg-shapes">
        <div className="shapes">
          <Image src={footerShape} alt="Shape" />
        </div>
        <div className="shapes">
          <Image src={bannerShape4} alt="Shape" />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-between">
                <div
                  ref={menu1Ref}
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
                  ref={menu2Ref}
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
                  ref={menu3Ref}
                 className="col-sm-6 col-md-3"
                >
                  <div className="footer-menu">
                    <h4>Products</h4>
                    <ul>
                      <li>
                        <Link href="">Scheduling</Link>
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
                <div
                  ref={menu4Ref}
                 className="col-sm-6 col-md-3"
                >
                  <div className="footer-menu">
                    <h4>Newsletter</h4>
                    <p className="newsletter-text">
                      Sign up and receive the latest tips via email.
                    </p>
                    <div className="newsletter-box mt-25">
                      <p className="hrm-email">Write you email*</p>
                      <form action="#">
                        <div className="form-group mb-10">
                          <i className="icon_mail_alt"></i>
                          <input
                            type="text"
                           className="form-control hrm-input"
                            placeholder="Your email:"
                          />
                        </div>
                        <button type="submit" className="btn btn-red">
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
                    <Image src={logo} className="d-md-block d-sm-inline-block"
                      
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
