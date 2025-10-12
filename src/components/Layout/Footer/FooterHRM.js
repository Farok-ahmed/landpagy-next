import Link from "next/link";
;

export default function FooterHRM() {
  return (
    <footer className="footer-hrm footer-software bg-merino">
      <div className="bg-shapes">
        <div className="shapes">
          <img src="/images/home_4/footer-shape.svg" alt="Shape" />
        </div>
        <div className="shapes">
          <img src="/images/home_4/banner-shape-4.svg" alt="Shape" />
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
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
                        <a href="">Scheduling</a>
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
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.5s"
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
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0.1s">
          <div className="row align-items-center">
            <div className="col-lg-3 text-sm-center text-md-start">
              <ul>
                <li>
                  <Link href="/">
                    <img
                      className="d-md-block d-sm-inline-block"
                      src="/images/logo.svg"
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
