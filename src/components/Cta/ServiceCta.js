import Link from "next/link";
import Image from "next/image";
import shape1 from "@/assets/images/services/shape1.svg";
import shape2 from "@/assets/images/services/shape2.svg";
import shape3 from "@/assets/images/services/shape3.svg";
import shape4 from "@/assets/images/services/shape4.svg";
;

export default function ServiceCta() {
  return (
    <section className="services-cta-area pt-90 pb-100">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape1} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={shape2} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={shape3} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={shape4} alt="Decorative image" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="cta-title">Have an idea ?</h2>
            <p className="cta-text">
              We will turn your ideas to viable product
            </p>
            <Link href="/contact-one" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
