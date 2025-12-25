"use client";
import feature7 from "@/assets/images/features/feature-7.png";
import feature from "@/assets/images/features/feature.png";
import features4 from "@/assets/images/features/features-4.png";
import featuresObject1 from "@/assets/images/features/features-object-1.svg";
import featuresObject11 from "@/assets/images/features/features-object-11.svg";
import featuresObject12 from "@/assets/images/features/features-object-12.svg";
import featuresObject2 from "@/assets/images/features/features-object-2.svg";
import featuresObject3 from "@/assets/images/features/features-object-3.svg";
import featuresObject4 from "@/assets/images/features/features-object-4.svg";
import featuresObject5 from "@/assets/images/features/features-object-5.svg";
import featuresObject6 from "@/assets/images/features/features-object-6.svg";
import featuresObject7 from "@/assets/images/features/features-object-7.svg";
import featuresObject8 from "@/assets/images/features/features-object-8.svg";
import featuresObject9 from "@/assets/images/features/features-object-9.svg";
import shape1 from "@/assets/images/process/shape1.svg";
import shape2 from "@/assets/images/process/shape2.svg";
import shape3 from "@/assets/images/process/shape3.svg";
import shape4 from "@/assets/images/process/shape4.svg";
import shape5 from "@/assets/images/process/shape5.svg";
import shape6 from "@/assets/images/process/shape6.svg";
import shape7 from "@/assets/images/process/shape7.svg";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

export default function VerticalProcess() {
  const refs = useGsapMultiple(10, [
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
  ]);

  const shape1Parallax = useParallax({
    translateX: [100, -100, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape2Parallax = useParallax({
    translateX: [50, -150, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [150, -30, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [100, -20, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  return (
    <section className="overflow-hidden process-area-3 pt-140 pb-140">
      <div className="container">
        <div className="process-item-3 pb-105">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                ref={refs[0]}
               className="process-content-3 pt-30"
              >
                <span className="item-number">01</span>
                <h3 className="item-title">Define your goals</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                ref={refs[1]}
               className="process-images-3"
              >
                <Image src={shape1} alt="Shape"
                 className="shape" />
                <Image src={shape2} alt="Shape"
                 className="shape" />
                <Image src={shape3} alt="Shape"
                 className="shape" />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-140">
          <div className="flex-row-reverse row">
            <div className="col-lg-6 col-md-7">
              <div
                ref={refs[2]}
               className="process-content-3"
              >
                <span className="item-number">02</span>
                <h3 className="item-title">
                  Set actions and assign stakeholders
                </h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                  Restructuring functional units alone won’t do it.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                ref={refs[3]}
               className="process-images-3"
              >
                <Image src={shape4} alt="Shape"
                 className="shape" />
                <Image src={shape5} alt="Shape"
                 className="shape" />
                <Image src={shape6} alt="Shape"
                 className="shape" />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-135">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                ref={refs[4]}
               className="process-content-3"
              >
                <span className="item-number">03</span>
                <h3 className="item-title">Plan and map your process</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                ref={refs[5]}
               className="process-images-3"
              >
                <Image src={features4} alt="Features "
                 className="shape" />
                <Image src={featuresObject6} alt="Features Object"
                 className="shape" />
                <Image src={featuresObject7} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape2Parallax.ref as React.Ref<HTMLImageElement>} />
                <Image src={featuresObject8} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape3Parallax.ref as React.Ref<HTMLImageElement>} />
                <Image src={featuresObject9} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape4Parallax.ref as React.Ref<HTMLImageElement>} />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-180">
          <div className="flex-row-reverse row">
            <div className="col-lg-6 col-md-7">
              <div
                ref={refs[6]}
               className="process-content-3"
              >
                <span className="item-number">04</span>
                <h3 className="item-title">Implement the process</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                  Seamless cross-functional integration is mandatory.
                  Restructuring functional units alone won’t do it.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                ref={refs[7]}
               className="process-images-3"
              >
                <Image src={feature7} alt="Features "
                 className="shape" />
                <Image
                  className="shape object-element layer"
                  src="/images/features/features-object-10.svg"
                  alt="Features"
                  width={200}
                  height={200}
                  ref={shape1Parallax.ref as React.Ref<HTMLImageElement>}
                />
                <Image src={featuresObject2} className="shape"
                  
                  alt="Features " />
                <Image src={featuresObject3} className="shape object-element layer"
                  ref={shape2Parallax.ref as React.Ref<HTMLImageElement>}
                  
                  alt="Features " />
                <Image src={featuresObject11} className="shape object-element layer"
                  ref={shape3Parallax.ref as React.Ref<HTMLImageElement>}
                  
                  alt="Features " />
                <Image src={featuresObject12} className="shape object-element layer"
                  ref={shape4Parallax.ref as React.Ref<HTMLImageElement>}
                  
                  alt="Features " />
              </div>
            </div>
          </div>
        </div>
        <div className="process-item-3 pb-140">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                ref={refs[8]}
               className="process-content-3"
              >
                <span className="item-number">05</span>
                <h3 className="item-title">Monitor the results</h3>
                <p className="item-text">
                  It’s natural to view process as the prime segmentation
                  strategy internal to organizations and—more and more
                  frequently—among organizations since management structures
                  with overly rigid planning mechanisms are too slow to respond.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                ref={refs[9]}
               className="process-images-3"
              >
                <Image src={feature} alt="Features "
                 className="shape" />
                <Image src={featuresObject1} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape1Parallax.ref as React.Ref<HTMLImageElement>} />
                <Image src={featuresObject2} alt="Features Object"
                 className="shape" />
                <Image src={featuresObject3} className="shape object-element layer"
                  ref={shape2Parallax.ref as React.Ref<HTMLImageElement>}
                  
                  alt="Features Object" />
                <Image src={featuresObject4} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape3Parallax.ref as React.Ref<HTMLImageElement>} />
                <Image src={featuresObject5} alt="Features Object"
                 className="shape object-element layer"
                  ref={shape4Parallax.ref as React.Ref<HTMLImageElement>} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image src={shape7} alt="Border Shape"
           className="shape-border" />
          <span className="point"></span>
        </div>
      </div>
    </section>
  );
}
