import Link from "next/link";
import Image from "next/image";
import ctaShape from "@/assets/images/home_7/shapes/cta-shape.png";
import ctaShape2 from "@/assets/images/home_7/shapes/cta-shape2.png";

export default function CtaTwo() {
  return (
    <section className="soft-cta-area pt-125 pb-130">
      <div className="shapes">
        <div className="shape">
          <Image src={ctaShape} alt="" />
        </div>
        <div className="shape">
          <Image src={ctaShape2} alt="" />
        </div>
      </div>
      <div className="container container-soft2">
        <div className="row">
          <div className="col-12">
            <div
              className="text-center section-title wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <h2>Looking for a Custom Design Landing Page?</h2>
              <p>We can create it as per your requirements.</p>
              <Link href="/contact-two">GET A QUOTE NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
