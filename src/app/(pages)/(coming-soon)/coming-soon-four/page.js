"use client";
import Timer from "@/components/Timer/Timer";
import Link from "next/link";
;

export default function ComingSoonFour() {
  return (
    <section className="comming-soon-wrapper comming-soon-4 pt-100">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/comming_soon/shape11.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape12.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape13.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape14.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape15.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape16.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape17.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape18.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape19.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/shape20.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/star.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/star.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/comming_soon/star.svg" alt="Shape" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="comming-soon-inner">
              <Link href="/" className="logo">
                <img src="/images/logo-black.svg" alt="Logo" />
              </Link>

              <h1 className="page-title">Something great is coming soon</h1>
              <p className="title-text">
                Subscribe to the newslater to stay in the latest updates.
              </p>

              {/* Timer */}

              <Timer endTime="2024-12-31T23:59:59" />

              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  Submit
                </button>
              </form>

              <ul className="social-list">
                <li>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-img">
              <img
                src="/images/comming_soon/bg3.svg"
                alt="Bg Shape"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
