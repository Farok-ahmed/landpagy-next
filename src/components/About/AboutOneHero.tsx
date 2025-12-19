"use client";
import Image from "next/image";
import features4 from "@/assets/images/features/features-4.png";
import featuresObject6 from "@/assets/images/features/features-object-6.svg";
import featuresObject7 from "@/assets/images/features/features-object-7.svg";
import featuresObject8 from "@/assets/images/features/features-object-8.svg";
import featuresObject9 from "@/assets/images/features/features-object-9.svg";
;
import { useParallax } from "react-scroll-parallax";

export default function AboutOneHero() {
  const shape2Parallax = useParallax({
    translateX: [500, -290, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [200, -30, "easeOutQuad"],
    rotateY: [0, 0],
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [-10, -20, "easeOutQuad"],
    rotateY: [0, 0],
  });
  return (
    <section className="banner-area about-banner">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="mt-8 col-lg-7 mt-lg-0">
            <div className="section-title-left">
              <h2>
                Building the best project management software in the world.
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                quam odit est iusto hic quo impedit veniam numquam odio qui
                laudantium et itaque facilis labore, perferendis cupiditate
                perspiciatis
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-lg-none">
            <div className="banner-image">
              <Image src={features4} alt="Illustrator " />
              <Image src={featuresObject6} alt="Features Object"
               className="features-object6 layer" />
              <Image src={featuresObject7} alt="Features Object"
               className="features-object7 object-element layer" />
              <Image src={featuresObject8} alt="Features Object"
               className="features-object8 object-element layer" />
              <Image src={featuresObject9} alt="Features Object"
               className="features-object9 object-element fa-layer-group" />
              <span className="shape13"></span>
              <span className="shape14"></span>
              <div className="round-object2"></div>
            </div>
          </div>
        </div>
        <div className="banner-right-two banner-image d-none d-lg-block">
          <Image src={features4} alt="Illustrator " />
          <Image src={featuresObject6} alt="Features Object"
           className="features-object6" />
          <Image src={featuresObject7} alt="Features Object"
           className="features-object7 object-element"
            ref={shape2Parallax.ref as React.RefObject<HTMLImageElement>} />
          <Image src={featuresObject8} alt="Features Object"
           className="features-object8 object-element layer"
            ref={shape3Parallax.ref as React.RefObject<HTMLImageElement>} />
          <Image src={featuresObject9} alt="Features Object"
           className="features-object9 object-element layer"
            ref={shape4Parallax.ref as React.RefObject<HTMLImageElement>} />
          <span className="shape13"></span>
          <span className="shape14"></span>
          <div className="round-object2"></div>
        </div>
      </div>
    </section>
  );
}
