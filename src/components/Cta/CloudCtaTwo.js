import Image from "next/image";
import shape12 from "@/assets/images/home_9/shapes/shape12.svg";
import shape13 from "@/assets/images/home_9/shapes/shape13.svg";
import shape14 from "@/assets/images/home_9/shapes/shape14.svg";
;
import { Parallax, useParallax } from "react-scroll-parallax";

export default function CloudCtaTwo() {
  const shape1Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [100, 0],
  });
  const shape2Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [200, 0],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [300, 0],
  });
  return (
    <section className="cloud-cta-area bg-blue-light pt-130 pb-140">
      <div className="bg-shapes">
        <div className="shape" ref={shape1Parallax.ref}></div>
        <div className="shape" ref={shape2Parallax.ref}></div>
        <div className="shape" ref={shape3Parallax.ref}></div>
        <div className="shape">
          <Parallax
            translateX={["-80px", "80px"]}
            translateY={["0px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInCubic"
            speed={-10}
          >
            <Image src={shape12} className="layer"
              alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-80px", "80px"]}
            translateY={["0px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInCubic"
            speed={-10}
          >
            <Image src={shape13} className="layer"
              alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={shape14} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h2 className="cta-title cloud-heading-2 mb-85">
              A Family of Privacy Focused Services. Start for
              <span>
                {" "}
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
              </span>{" "}
              with 10GB.
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
