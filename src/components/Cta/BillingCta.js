import Image from "next/image";
import ctaShape1 from "@/assets/images/home_8/shape/cta-shape1.svg";
import ctaShape2 from "@/assets/images/home_8/shape/cta-shape2.svg";
import ctaShape3 from "@/assets/images/home_8/shape/cta-shape3.svg";
;

export default function BillingCta() {
  return (
    <section className="billing-cta-area pb-140">
      <div className="container position-relative overflow-hidden">
        <div className="bg-shapes">
          <div className="shape">
            <Image src={ctaShape1} alt="" />
          </div>
          <div className="shape">
            <Image src={ctaShape2} alt="" />
          </div>
          <div className="shape">
            <Image src={ctaShape3} alt="" />
          </div>
        </div>
        <div className="row align-items-center b-radius bg-pippin pl-55 pr-55 pt-65 pb-65">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <h2 className="cta-title mb-20">Try Landpagy for free</h2>
            <p className="cta-text">
              100% free, unlimited trial — upgrade only when you're ready to
              launch. No credit card required.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <a href="/" className="btn-black float-start float-lg-end">
              Get Start Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
