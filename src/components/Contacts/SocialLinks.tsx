import Image from "next/image";
import Link from "next/link";

import icon1 from "@/assets/images/contact_2/icons/icon-1.svg";
import icon2 from "@/assets/images/contact_2/icons/icon-2.svg";
import icon3 from "@/assets/images/contact_2/icons/icon-3.svg";
import icon4 from "@/assets/images/contact_2/icons/icon-4.svg";

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
                <Link href="/">
                  <i className="fab fa-facebook-f"></i>Facebook
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-twitter"></i>Twitter
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-linkedin-in"></i>Linkedin
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-instagram"></i>Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <Image src={icon1} alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Careers</h3>
              <p className="item-para">Join our global team</p>
              <Link href="/career" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <Image src={icon2} alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Blog</h3>
              <p className="item-para">Join our global team</p>
              <Link href="/jobs" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <Image src={icon3} alt="Icon" />
              </div>
              <h3 className="item-title">Landpagy Proto</h3>
              <p className="item-para">Join our global team</p>
              <Link href="/jobs" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="text-center follow-item">
              <div className="item-icon">
                <Image src={icon4} alt="Icon" />
              </div>
              <h3 className="item-title">About Landpagy</h3>
              <p className="item-para">Join our global team</p>
              <Link href="/career" className="item-link">
                Learn More<i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
