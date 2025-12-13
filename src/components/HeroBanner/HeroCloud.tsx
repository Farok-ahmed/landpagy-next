"use client";
import Image from "next/image";
import Link from "next/link";

import shape1 from "@/assets/images/home_9/shapes/shape1.svg";
import shape2 from "@/assets/images/home_9/shapes/shape2.svg";
import shape3 from "@/assets/images/home_9/shapes/shape3.svg";
import shape4 from "@/assets/images/home_9/shapes/shape4.svg";
import shape5 from "@/assets/images/home_9/shapes/shape5.svg";
import shape6 from "@/assets/images/home_9/shapes/shape6.svg";
import shape7 from "@/assets/images/home_9/shapes/shape7.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Parallax } from "react-scroll-parallax";

export default function HeroCloud() {
  const bannerTextRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const offerRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.1 });
  const btnRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.1 });
  const metaRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.5 });

  return (
    <section className="cloud-banner-area pt-160 pb-130">
      <div className="container position-relative">
        <div className="bg-shapes">
          <div className="shape">
            <Parallax
              translateX={["50px", "0px"]}
              translateY={["70px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
            >
              <Image src={shape1} alt="Shape 1" />
            </Parallax>
          </div>
          <div className="shape">
            <Parallax
              translateX={["-50px", "50px"]}
              translateY={["-40px", "40px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
            >
              <Image src={shape2} alt="Shape 2" />
            </Parallax>
          </div>
          <div className="shape">
            <Parallax
              translateX={["0px", "0px"]}
              translateY={["30px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
            >
              <Image src={shape3} alt="Shape 3" />
            </Parallax>
          </div>
          <div className="shape">
            <Parallax
              translateX={["60px", "0px"]}
              translateY={["60px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
            >
              <Image src={shape4} alt="Shape 4" />
            </Parallax>
          </div>
          <div className="shape">
            <Parallax
              translateX={["0px", "0px"]}
              translateY={["-70px", "70px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
            >
              <Image src={shape5} alt="Shape 5" />
            </Parallax>
          </div>
          <div className="shape">
            <Image src={shape6} alt="Shape 6" />
          </div>
          <div className="shape">
            <Image src={shape7} alt="Shape 7" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center cloud-banner-content pt-80">
              <h1
               className="banner-title animatable fadeInDown mb-35"
               
              >
                Store Your {""}
                <span>
                  Files
                  <svg
                    width="183"
                    height="81"
                    viewBox="0 0 183 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                     className="animatable draw"
                      d="M12.9677 22.1512C87.33 -23.7497 215.615 14.9169 173.556 52.8019C140.491 82.5856 -7.39191 98.5042 1.51001 44.3796C6.91522 11.5154 133.588 -8.53048 169.449 30.7166"
                      stroke="#EFBA34"
                    />
                  </svg>
                </span>
                {""} in Complete Privacy
              </h1>
              <p ref={bannerTextRef} className="banner-text">
                Landpagy Drive is a zero-knowledge file storage service that's
                based on absolute privacy and uncompromising security.
              </p>
              <p ref={offerRef} className="offer-text">
                Sign up and get 10 GB for free, forever!
              </p>
              <Link href="/" ref={btnRef} className="btn btn-red">
                Start for free
              </Link>
              <p ref={metaRef} className="meta-text">
                No billing information required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
