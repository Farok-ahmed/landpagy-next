import Link from "next/link";
import React from "react";

export default function PosCta() {
  return (
    <section className="cta-area-three cta-area-six wow fadeInUp">
      <div className="container">
        <div className="cta-box bg-mariner pt-70 pb-70">
          <div className="bg-shapes">
            <div className="shape">
              <img src="/images/home_5/shapes/cta-shape1.svg" alt="Shape" />
            </div>
            <div className="shape">
              <img src="/images/home_5/shapes/cta-shape2.svg" alt="Shape" />
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
