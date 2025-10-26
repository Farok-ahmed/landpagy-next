import Link from "next/link";
import Image from "next/image";
import shape16 from "@/assets/images/home_9/shapes/shape16.svg";
import shape17 from "@/assets/images/home_9/shapes/shape17.svg";
import arrowForward from "@/assets/images/home_9/shapes/arrow-forward.svg";
import logo from "@/assets/images/logo.svg";
;

export default function CloudFooter() {
  return (
    <footer className="footer-cloud bg-gray-2">
      <div className="bg-shapes">
        <div className="shape">
          <svg
            width="65"
            height="108"
            viewBox="0 0 65 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animatable draw"
              d="M55.5862 1.99086C47.1391 -0.676343 -0.209184 35.3349 2.23603 55.3412C4.87354 76.9208 59.3433 48.4171 42.6932 35.3349C30.2448 25.554 -9.52908 55.8047 4.23673 75.1252C15.7977 91.3512 45.6014 75.6225 51.3627 68.901C56.6977 62.6768 54.0302 50.0062 35.1354 59.1203C15.9877 68.3563 24.0207 85.3506 35.1354 83.35C46.25 81.3493 55.8085 74.236 56.6977 74.0137C57.5869 73.7914 38.2474 95.3538 64.0333 106.913"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="shape">
          <Image src={shape16} alt="" />
        </div>
        <div className="shape">
          <Image src={shape17} alt="" />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Company</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link href="/about-one">About us</Link>
                      </li>
                      <li>
                        <Link href="/contact-one">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/price-table-two">Plans</Link>
                      </li>
                      <li>
                        <Link href="/about-two">Security</Link>
                      </li>
                      <li>
                        <Link href="/features">Features</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Support</h4>
                    <ul className="widget-link-list">
                      <li>
                        <Link href="/home-help-center">Help center</Link>
                      </li>
                      <li>
                        <Link href="/contact-one">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/contact-two">Cookies</Link>
                      </li>
                      <li>
                        <a href="#">Privacy & terms</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h4 className="widget-title">Download</h4>
                    <ul className="widget-link-list">
                      <li>
                        <a href="#">Drive for Mac/PC</a>
                      </li>
                      <li>
                        <a href="#">Drive for Android</a>
                      </li>
                      <li>
                        <a href="#">Drive for iOS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 col-lg-4 col-md-6 mt-lg-0">
              <div className="footer-widget">
                <h4 className="widget-title">Subscribe Newsletter</h4>
                <form className="form-group">
                  <input type="email" placeholder="Email address" />
                  <button type="submit" className="btn btn-red">
                    <Image src={arrowForward} className="icon"
                      
                      alt="Icon" />
                  </button>
                </form>
                <p className="mb-40">We promise to never spam your inbox.</p>
                <ul className="widget-social-list">
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
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-40 footer-copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <Link href="/" className="footer-logo">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-5">
              <p className="copyright-text text-md-center">
                Copyright {new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="language-list float-md-end">
                <form>
                  <i className="fas fa-globe-americas me-1"></i>
                  <select id="select-lang">
                    <option value="English">English (United States)</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
