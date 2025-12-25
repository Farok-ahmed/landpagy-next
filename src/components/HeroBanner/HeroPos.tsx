"use client";
import Image from "next/image";
import bannerShape1 from "@/assets/images/home_5/shapes/banner-shape1.png";
import bannerShape2 from "@/assets/images/home_5/shapes/banner-shape2.png";
import bannerShape3 from "@/assets/images/home_5/shapes/banner-shape3.png";
import bannerShape4 from "@/assets/images/home_5/shapes/banner-shape4.png";
import banner1 from "@/assets/images/home_5/banner1.png";
import banner2 from "@/assets/images/home_5/banner2.png";
import banner3 from "@/assets/images/home_5/banner3.png";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function HeroPos() {
  const leftRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0 });
  const titleRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const paraRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.3 });
  const formRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.4 });
  const subContentRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.5 });
  const rightRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.3 });

  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [15, -15, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape5Parallax = useParallax({
    translateX: [0, 5, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape6Parallax = useParallax({
    translateX: [5, -5, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });

  return (
    <section className="banner-area-5">
      <div className="banner-shapes">
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <Image src={bannerShape1} className="layer"
              alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <span></span>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <Image src={bannerShape1} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["50px", "0px"]}
            rotateY={[70, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[50, 0]}
            easing="easeInQuad"
            speed={-10}
          >
            <span></span>
          </Parallax>
        </div>
        <div className="shape">
          <Image src={bannerShape2} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape3} alt="shapes" />
        </div>
        <div className="shape">
          <Image src={bannerShape4} alt="shapes" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div ref={leftRef} className="banner-left">
              <h1 ref={titleRef} className="banner-title">
                Most Powerful & Advanced POS
              </h1>
              <p ref={paraRef} className="banner-para">
                Landpagy is a leading retail POS software in the cloud with
                everything you need to run & grow.
              </p>
              <form ref={formRef as React.Ref<HTMLFormElement>} className="form-group">
                <input type="email" placeholder="Your Email" />
                <button type="submit" className="btn btn-indigo">
                  Get Started
                </button>
              </form>
              <ul ref={subContentRef as React.Ref<HTMLUListElement>} className="sub-content">
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> 14-day trial
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> No card required
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-check-circle"></i> Unlimited goals
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div ref={rightRef} className="banner-right">
              <Image src={banner1} ref={shape4Parallax.ref as React.Ref<HTMLImageElement>}
               className="banner-img-1 layer"
                
                alt="Banner " />
              <Image src={banner2} ref={shape5Parallax.ref as React.Ref<HTMLImageElement>}
               className="banner-img-2 layer"
                
                alt="Banner " />
              <Image src={banner3} ref={shape6Parallax.ref as React.Ref<HTMLImageElement>}
               className="banner-img-3 layer"
                
                alt="Banner " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
