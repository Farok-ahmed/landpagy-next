import Link from "next/link";
import React from "react";
import Image from "next/image";
import shape3Svg from "@/assets/images/services/shape3.svg";
import shape4Svg from "@/assets/images/services/shape4.svg";
import shape1Svg from "@/assets/images/services/shape1.svg";
import shape2Svg from "@/assets/images/services/shape2.svg";


export default function ServiceCta() {
  return (
    <section className="services-cta-area pt-90 pb-100">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape1Svg} alt="" />
        </div>
        <div className="shape">
          <Image src={shape2Svg} alt="" />
        </div>
        <div className="shape">
          <Image src={shape3Svg} alt="" />
        </div>
        <div className="shape">
          <Image src={shape4Svg} alt="" />
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
