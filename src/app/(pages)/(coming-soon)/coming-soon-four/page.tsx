"use client";
import Timer from "@/components/Timer/Timer";
import Link from "next/link";
import Image from "next/image";
import shape11 from "@/assets/images/comming_soon/shape11.svg";
import shape12 from "@/assets/images/comming_soon/shape12.svg";
import shape13 from "@/assets/images/comming_soon/shape13.svg";
import shape14 from "@/assets/images/comming_soon/shape14.svg";
import shape15 from "@/assets/images/comming_soon/shape15.svg";
import shape16 from "@/assets/images/comming_soon/shape16.svg";
import shape17 from "@/assets/images/comming_soon/shape17.svg";
import shape18 from "@/assets/images/comming_soon/shape18.svg";
import shape19 from "@/assets/images/comming_soon/shape19.svg";
import shape20 from "@/assets/images/comming_soon/shape20.svg";
import star from "@/assets/images/comming_soon/star.svg";
import logoBlack from "@/assets/images/logo-black.svg";
import bg3 from "@/assets/images/comming_soon/bg3.svg";

export default function ComingSoonFour() {
  return (
    <section className="comming-soon-wrapper comming-soon-4 pt-100">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape11} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape12} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape13} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape14} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape15} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape16} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape17} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape18} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape19} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape20} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={star} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={star} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={star} alt="Shape" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="comming-soon-inner">
              <Link href="/" className="logo">
                <Image src={logoBlack} alt="Logo" />
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
              <Image src={bg3} alt="Bg Shape"
                className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
