import Link from "next/link";
import React from "react";
import Image from "next/image";
import shape6Svg from "@/assets/images/comming_soon/shape6.svg";
import logo5Svg from "@/assets/images/logo-5.svg";
import shape7Svg from "@/assets/images/comming_soon/shape7.svg";
import shape9Svg from "@/assets/images/comming_soon/shape9.svg";
import shape10Svg from "@/assets/images/comming_soon/shape10.svg";
import shape8Svg from "@/assets/images/comming_soon/shape8.svg";


export default function ComingSoonThree() {
  return (
    <section className="comming-soon-wrapper comming-soon-3 pt-100">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape6Svg} alt="Shape" />
        </div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape">
          <Image src={shape7Svg} alt="Shape" />
        </div>
        <div className="shape"></div>
        <div className="shape">
          <Image src={shape8Svg} alt="Shape" />
        </div>
        <div className="shape"></div>
        <div className="shape">
          <Image src={shape9Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape10Svg} alt="Shape" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="comming-soon-inner">
              <Link href="/" className="logo">
                <Image src={logo5Svg} alt="Logo" />
              </Link>

              <h1 className="page-title">COMING SOON</h1>
              <p className="title-text">
                Subscribe to the newslater to stay in the latest updates.
              </p>

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
        </div>
      </div>
    </section>
  );
}
