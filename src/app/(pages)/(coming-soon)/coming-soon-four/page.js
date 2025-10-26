"use client";
import Timer from "@/components/Timer/Timer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import shape14Svg from "@/assets/images/comming_soon/shape14.svg";
import shape15Svg from "@/assets/images/comming_soon/shape15.svg";
import shape20Svg from "@/assets/images/comming_soon/shape20.svg";
import shape18Svg from "@/assets/images/comming_soon/shape18.svg";
import shape19Svg from "@/assets/images/comming_soon/shape19.svg";
import shape12Svg from "@/assets/images/comming_soon/shape12.svg";
import bg3Svg from "@/assets/images/comming_soon/bg3.svg";
import shape13Svg from "@/assets/images/comming_soon/shape13.svg";
import shape11Svg from "@/assets/images/comming_soon/shape11.svg";
import starSvg from "@/assets/images/comming_soon/star.svg";
import shape16Svg from "@/assets/images/comming_soon/shape16.svg";
import shape17Svg from "@/assets/images/comming_soon/shape17.svg";
import logoBlackSvg from "@/assets/images/logo-black.svg";


export default function ComingSoonFour() {
  return (
    <section className="comming-soon-wrapper comming-soon-4 pt-100">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape11Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape12Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape13Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape14Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape15Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape16Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape17Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape18Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape19Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape20Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={starSvg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={starSvg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={starSvg} alt="Shape" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="comming-soon-inner">
              <Link href="/" className="logo">
                <Image src={logoBlackSvg} alt="Logo" />
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
              <Image src={bg3Svg}
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
