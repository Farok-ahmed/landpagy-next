"use client";
import features4 from "@/assets/images/features/features-4.png";
import featuresObject6 from "@/assets/images/features/features-object-6.svg";
import featuresObject7 from "@/assets/images/features/features-object-7.svg";
import featuresObject8 from "@/assets/images/features/features-object-8.svg";
import featuresObject9 from "@/assets/images/features/features-object-9.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
;

export default function FeatureThree() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });
  const shape2Parallax = useParallax({
    translateX: [50, -150, "easeInQuad"],
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
    <section ref={sectionRef} className="features features-area-four section-padding">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="features-content features-content-four">
              <h2>Realtime insight about your team</h2>
              <h3>
                Designed following <span>convertion</span> metrix
              </h3>
              <p>
                We're here every step of the way making sure you and your team
                deliver. We're here every step of the way making sure you and
                your team deliver
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-image">
              <Image src={features4} alt="Features" />
              <Image src={featuresObject6} alt="Features Object"
               className="features-object6" />
              <Image src={featuresObject7} alt="Features Object"
               className="features-object7 object-element layer"
                ref={shape2Parallax.ref} />
              <Image src={featuresObject8} alt="Features Object"
               className="features-object8 object-element layer"
                ref={shape3Parallax.ref} />
              <Image src={featuresObject9} alt="Features Object"
               className="features-object9 object-element layer"
                ref={shape4Parallax.ref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
