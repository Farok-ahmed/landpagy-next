"use client";
import Image from "next/image";
import bannerShape6 from "@/assets/images/shape/banner-shape6.svg";
import shape3 from "@/assets/images/shape/shape-3.svg";
import featuresObject8 from "@/assets/images/features/features-object-8.svg";
import featuresObject9 from "@/assets/images/features/features-object-9.svg";
import pricingShape2 from "@/assets/images/shape/pricing-shape2.svg";
import featuresObject6 from "@/assets/images/features/features-object-6.svg";
import pricingShape4 from "@/assets/images/shape/pricing-shape4.svg";
import pricingShape5 from "@/assets/images/shape/pricing-shape5.svg";
import pricingShape6 from "@/assets/images/shape/pricing-shape6.svg";
import pricingShape7 from "@/assets/images/shape/pricing-shape7.svg";
;
import { useParallax } from "react-scroll-parallax";

export default function PricingOneHero() {
  const shape2Parallax = useParallax({
    translateX: [300, -150, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: [-10],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [150, -30, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [100, -20, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="banner-area pricing-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h1>
                <span>Mega</span> Sale
              </h1>
              <h2>
                Up to <span>50%</span> Off
              </h2>
            </div>
          </div>
        </div>
      </div>
      <span className="banner-shapes wow fadeInDown"></span>
      <Image src={bannerShape6} className="pricing-shape-4 wow fadeInRight"
        
        alt="Shape " />
      <Image src={shape3} className="pricing-shape-3"
        
        alt="Pricing Banner Shape" />
      <Image src={featuresObject8} className="pricing-shape-5 object-element layer"
        
        alt="Pricing Banner Shape"
        ref={shape3Parallax.ref} />
      <Image src={featuresObject9} className="pricing-shape-12 object-element layer"
        
        alt="Pricing Banner Shape"
        ref={shape4Parallax.ref} />
      <Image src={pricingShape2} className="pricing-shape-6"
        
        alt="Pricing Banner Shape" />
      <Image src={featuresObject6} className="pricing-shape-7"
        
        alt="Pricing Banner Shape" />
      <Image src={pricingShape4} className="pricing-shape-8"
        
        alt="Pricing Banner Shape" />
      <Image src={pricingShape5} className="pricing-shape-9 animate__animated wow animate__fadeInTopRight animate__slow"
        
        alt="Pricing Banner Shape" />
      <Image src={pricingShape6} className="pricing-shape-10"
        
        alt="Pricing Banner Shape" />
      <Image src={pricingShape7} className="pricing-shape-11 object-element"
        ref={shape2Parallax.ref}
        
        alt="Pricing Banner Shape" />
    </section>
  );
}
