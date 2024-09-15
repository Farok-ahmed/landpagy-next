import Link from "next/link";

export default function CtaTwo() {
  return (
    <section className="soft-cta-area pt-125 pb-130">
      <div className="shapes">
        <div className="shape">
          <img src="/images/home_7/shapes/cta-shape.png" alt="" />
        </div>
        <div className="shape">
          <img src="/images/home_7/shapes/cta-shape2.png" alt="" />
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
