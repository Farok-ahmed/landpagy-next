"use client";
import ctaShape1 from "@/assets/images/home_5/shapes/cta-shape1.svg";
import ctaShape2 from "@/assets/images/home_5/shapes/cta-shape2.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";
;

export default function PosCta() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp' });

  return (
    <section ref={sectionRef} className="cta-area-three cta-area-six">
      <div className="container">
        <div className="cta-box bg-mariner pt-70 pb-70">
          <div className="bg-shapes">
            <div className="shape">
              <Image src={ctaShape1} alt="Shape" />
            </div>
            <div className="shape">
              <Image src={ctaShape2} alt="Shape" />
            </div>
          </div>
          <div className="row align-items-center gy-3 gy-md-0">
            <div className="col-lg-4 col-md-6 offset-md-1">
              <h3 className="section-title mb-15">Free for 14 Days</h3>
              <p className="title-text">
                Test drives all the features of Landpaggy for free. No credit
                card necessary.
              </p>
            </div>
            <div className="col-lg-6 col-md-4">
              <Link href="/contact-one" className="btn float-md-end">
                Request A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      /
    </section>
  );
}
