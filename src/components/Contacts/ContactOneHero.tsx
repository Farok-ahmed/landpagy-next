"use client";
import React from "react";
import Image from "next/image";
import shape13 from "@/assets/images/shape/shape13.svg";
import shape14 from "@/assets/images/shape/shape14.svg";
import shape15 from "@/assets/images/shape/shape15.svg";
import pricingShape7 from "@/assets/images/shape/pricing-shape7.svg";
import featuresObject6 from "@/assets/images/features/features-object-6.svg";
;
import { useParallax } from "react-scroll-parallax";

export default function ContactOneHero() {
  const shape4Parallax = useParallax({
    translateX: [600, -300, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="banner-area contact-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="font-bold mt-n3">
                Feel free to contact us or just say hi!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape13} className="shape13"  alt="Shape" />
      <Image src={shape14} className="shape14"  alt="Shape" />
      <Image src={shape15} className="shape15"  alt="Shape" />
      <Image src={pricingShape7} className="shape16 object-element"
        ref={shape4Parallax.ref as React.Ref<HTMLImageElement>}
        
        alt="Shape" />

      <Image src={featuresObject6} className="pricing-shape-11"
        
        alt="Pricing Banner Shape" />
    </section>
  );
}
