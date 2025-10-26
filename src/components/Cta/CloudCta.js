import React from "react";
import Image from "next/image";
import shape5Svg from "@/assets/images/home_9/shapes/shape5.svg";
import shape6Svg from "@/assets/images/home_9/shapes/shape6.svg";
import shape3Svg from "@/assets/images/home_9/shapes/shape3.svg";
import shape1Svg from "@/assets/images/home_9/shapes/shape1.svg";
import shape2Svg from "@/assets/images/home_9/shapes/shape2.svg";
import shape7Svg from "@/assets/images/home_9/shapes/shape7.svg";
import shape4Svg from "@/assets/images/home_9/shapes/shape4.svg";

import { Parallax } from "react-scroll-parallax";

export default function CloudCta() {
  return (
    <section className="cloud-cta-area bg-blue-light pt-130 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={shape1Svg} alt="Shape 1" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["-40px", "40px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={shape2Svg} alt="Shape 2" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["30px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={shape3Svg} alt="Shape 3" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["-70px", "70px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={shape4Svg} alt="Shape 4" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["60px", "0px"]}
            translateY={["60px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={shape5Svg} alt="Shape 5" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={shape6Svg} alt="Shape 6" />
        </div>
        <div className="shape">
          <Image src={shape7Svg} alt="Shape 7" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h2 className="cta-title cloud-heading-2 mb-85">
              A Family of Privacy Focused Services. Start for {""}
              <span>
                Free
                <svg
                  width="126"
                  height="57"
                  viewBox="0 0 126 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M8.66837 13.6685C61.285 -18.3672 168.407 17.1404 105.103 45.7818C55.8244 68.0772 -15.794 49.2105 4.09327 23.0387C15.1944 8.4296 61.8283 -0.720028 101.716 12.2351"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              {""} with 10GB.
            </h2>
            <a href="/" className="btn btn-red">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
