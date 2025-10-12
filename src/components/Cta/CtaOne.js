import Link from "next/link";
;

export default function CtaOne() {
  return (
    <section className="cta-area-three">
      <div className="container">
        <div className="cta-box bg-black pt-70 pb-70">
          <div className="bg-shapes">
            <div className="shape">
              <img src="/images/home_2/banner-shape-4.svg" alt="Shape" />
            </div>
            <div className="shape">
              <img src="/images/home_2/banner-shape-5.svg" alt="Shape" />
            </div>
          </div>
          <div className="row align-items-center gy-3 gy-md-0">
            <div className="col-md-5 offset-md-1">
              <h3 className="section-title mb-15">Free for 14 Days</h3>
              <p className="title-text">
                Test drives all the features of Landpaggy for free. No credit
                card necessary.
              </p>
            </div>
            <div className="col-md-5">
              <Link href="/contact-two" className="btn float-md-end">
                Request A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
