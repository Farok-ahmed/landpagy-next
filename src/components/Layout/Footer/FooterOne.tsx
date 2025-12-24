import Image from "next/image";
import Link from "next/link";
import logo3 from "@/assets/images/logo-3.png";
import logo2 from "@/assets/images/logo-2.png";

export default function FooterOne() {
  return (
    <footer className="bg-black footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-content">
                <span>
                  The Most Trusted Online Course Platform for WordPress.
                </span>
                <Image src={logo3} alt="Footer Logo" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row justify-content-between">
                <div className="col-sm-6 col-md-4">
                  <div className="footer-menu">
                    <h4>Features</h4>
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
                      <li>
                        <Link href="#">Develop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="footer-menu">
                    <h4>Company</h4>
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
                      <li>
                        <Link href="#">Develop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="footer-menu">
                    <h4>Support</h4>
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
                      <li>
                        <Link href="#">Develop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ul>
                <li>
                  <Image src={logo2} alt="Logo " />
                </li>
                <li>
                  <span className="copyright">
                    Copyright {new Date().getFullYear()}, All Rights Reserved
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="footer-bottom-menu">
                <ul>
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
            <div className="col-lg-2">
              <ul className="social-link-bg">
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
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="footer-shape"></span>
    </footer>
  );
}
