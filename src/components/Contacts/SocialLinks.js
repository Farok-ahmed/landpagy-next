;
import { Link } from "react-router-dom";

export default function SocialLinks() {
  return (
    <section className="social-links-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center section-title">Follow us on</h2>
          </div>
          <div className="col-12">
            <ul className="text-center social-links mb-120">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>Linkedin
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <img src="/images/contact_2/icons/icon-1.svg" alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Careers</h3>
              <p className="item-para">Join our global team</p>
              <Link to="/career" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <img src="/images/contact_2/icons/icon-2.svg" alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Blog</h3>
              <p className="item-para">Join our global team</p>
              <Link to="/jobs" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <img src="/images/contact_2/icons/icon-3.svg" alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Proto</h3>
              <p className="item-para">Join our global team</p>
              <Link to="/jobs" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <img src="/images/contact_2/icons/icon-4.svg" alt="Icon" />
              </div>
              <h3 className="item-title">About Landpagy</h3>
              <p className="item-para">Join our global team</p>
              <Link to="/career" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
