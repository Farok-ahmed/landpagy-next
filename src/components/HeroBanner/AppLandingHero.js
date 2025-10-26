"use client";
import Image from "next/image";
import border from "@/assets/images/home_10/shapes/border.svg";
import right from "@/assets/images/home_10/shapes/right.svg";
import shape1 from "@/assets/images/home_10/shapes/shape1.svg";
import shape2 from "@/assets/images/home_10/shapes/shape2.svg";
import bannerImg1 from "@/assets/images/home_10/banner-img1.png";
import bannerImg2 from "@/assets/images/home_10/banner-img2.png";
;
import { Parallax } from "react-scroll-parallax";

export default function AppLandingHero() {
  return (
    <section className="pb-20 app-banner-area pt-140">
      <div className="bg-shapes">
        <ul className="circle-shapes">
          <li className="shape shape-svg">
            <svg
              width="806"
              height="886"
              viewBox="0 0 806 886"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_975:6)">
                <path
                  d="M426.726 457.227C178.252 302.381 115.234 134.932 0 359.999V635.48H284.484C529.356 635.48 675.199 612.073 426.726 457.227Z"
                  fill="#EEF5C1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_975:6"
                  x="-250"
                  y="0.559082"
                  width="1055.56"
                  height="884.921"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="125"
                    result="effect1_foregroundBlur_975:6"
                  />
                </filter>
              </defs>
            </svg>
          </li>
          <li className="shape">
            <Parallax
              translateX={["-20px", "20px"]}
              translateY={["20px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
          <li className="shape">
            <Parallax
              translateX={["30px", "20px"]}
              translateY={["-30px", "30px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
          <li className="shape">
            <Parallax
              translateX={["-40px", "40px"]}
              translateY={["40px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
          <li className="shape">
            <Parallax
              translateX={["-50px", "50px"]}
              translateY={["-40px", "50px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>{" "}
          <li className="shape">
            <Parallax
              translateX={["-25px", "25px"]}
              translateY={["-25px", "25px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
          <li className="shape">
            <Parallax
              translateX={["35px", "0px"]}
              translateY={["-35px", "35px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
          <li className="shape">
            <Parallax
              translateX={["-45px", "45px"]}
              translateY={["45px", "0px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>{" "}
          <li className="shape">
            <Parallax
              translateX={["-55px", "55px"]}
              translateY={["-55px", "55px"]}
              rotateY={[0, 0]}
              easing="easeInQuad"
              speed={-10}
            >
              <span></span>
            </Parallax>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div
              className="app-banner-content wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <h1 className="banner-title mb-35">
                Welcome to Landpagy Get the {""}
                <span>
                  App Now
                  <Image src={border} className="border-shape"
                    
                    alt="Border" />
                </span>
                {""} & Enjoy
              </h1>
              <p className="banner-text mb-55">
                Why I say old chap that is spiffing cobblers brolly owt to do
                with me, gormless pukka are you taking the piss bum bag zonked
                cup of char
              </p>
              <a href="/" className="btn btn-red">
                Try for free
                <Image src={right} className="icon"
                  
                  alt="Arrow" />
              </a>
            </div>
          </div>

          <div className="col-md-5">
            <div className="app-banner-images">
              <div className="bg-shapes">
                <div className="banner-shape">
                  <Image src={shape1} alt="Shape" />
                </div>
                <div className="banner-shape">
                  <Image src={shape2} alt="Shape" />
                </div>
              </div>
              <Image src={bannerImg1} className="main-img1 wow fadeInRight"
                data-wow-delay="0.1s"
                
                alt="Banner " />
              <Image src={bannerImg2} className="main-img2 wow fadeInRight"
                data-wow-delay="0.3s"
                
                alt="Banner " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
