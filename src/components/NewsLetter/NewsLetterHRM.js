import React from "react";
import Image from "next/image";
import ctaShapeSvg from "@/assets/images/home_4/cta-shape.svg";
import testShape3Svg from "@/assets/images/home_4/test-shape3.svg";
import testShape2Svg from "@/assets/images/home_4/test-shape2.svg";


export default function NewsLetterHRM() {
  return (
    <section className="cta-area-five pt-100 pb-100 wow fadeInUp">
      <div className="container">
        <div className="cta-box">
          <div className="bg-shapes">
            <div className="shape">
              <Image src={testShape3Svg} alt="" />
            </div>
            <div className="shape">
              <Image src={ctaShapeSvg} alt="" />
            </div>
            <div className="shape">
              <Image src={testShape2Svg} alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <h2 className="section-title">
                Sign up to Get Landpagy in Your Inbox
              </h2>
            </div>
            <div className="col-md-6 offset-lg-1">
              <form className="form-group mt-0">
                <input type="email" placeholder="Email Address" />
                <button type="submit" className="btn btn-red">
                  Start Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
