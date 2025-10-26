import Image from "next/image";
import ctaShape1 from "@/assets/images/about_2/shape/cta-shape1.png";
import ctaShape2 from "@/assets/images/about_2/shape/cta-shape2.png";
;
import { Link } from "react-router-dom";

export default function AboutCta() {
  return (
    <section className="about-cta-area">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={ctaShape1} alt="" />
        </div>
        <div className="shape">
          <Image src={ctaShape2} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title-center">
              <h2>Let’s Share your idea with Landpagy</h2>
              <Link to="/contact-one" className="btn btn-red">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
