"use client";
import Image from "next/image";
import bannerShape1 from "@/assets/images/home_6/banner-shape1.svg";
import bannerShape2 from "@/assets/images/home_6/banner-shape2.png";
import bannerShape3 from "@/assets/images/home_6/banner-shape3.svg";
import bannerShape4 from "@/assets/images/home_6/banner-shape4.svg";
import bannerShape5 from "@/assets/images/home_6/banner-shape5.svg";
import bannerShape6 from "@/assets/images/home_6/banner-shape6.png";
import bannerShape7 from "@/assets/images/home_6/banner-shape7.png";
import bannerShape8 from "@/assets/images/home_6/banner-shape8.png";
import bannerShape9 from "@/assets/images/home_6/banner-shape9.svg";
import bannerShape10 from "@/assets/images/home_6/banner-shape10.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Parallax } from "react-scroll-parallax";

export default function HeroPrototype() {
  const shape1Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.2 });
  const shape3Ref = useGsapReveal({ animation: 'fadeInLeft', delay: 0 });
  const shape4Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.4 });
  const shape5Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.6 });
  const shape9Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.2 });
  const shape10Ref = useGsapReveal({ animation: 'fadeInRight', delay: 0 });
  const titleRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const paraRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.3 });
  const formRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.4 });

  return (
    <section className="banner-area-6 bg-proto">
      <div className="banner-shapes">
        <div ref={shape1Ref} className="shape">
          <Image src={bannerShape1} alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["70px", "0px"]}
            rotateY={[100, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape2} alt="Decorative image" />
          </Parallax>
        </div>
        <div ref={shape3Ref} className="shape">
          <Image src={bannerShape3} alt="shapes" />
        </div>
        <div ref={shape4Ref} className="shape">
          <Image src={bannerShape4} alt="Decorative image" />
        </div>
        <div ref={shape5Ref} className="shape">
          <Image src={bannerShape5} alt="Decorative image" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["30px", "0px"]}
            rotateY={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={bannerShape6} alt="shapes" />
          </Parallax>
        </div>
        <div className="shape">
          <Image src={bannerShape7} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={bannerShape8} alt="Decorative image" />
        </div>
        <div ref={shape9Ref} className="shape">
          <Image src={bannerShape9} alt="shapes" />
        </div>
        <div ref={shape10Ref} className="shape">
          <Image src={bannerShape10} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-lg-10 offset-lg-1">
            <div className="text-center banner-center">
              <h1 ref={titleRef} className="banner-title">
                Prototype, wireframe & collaboration. All-in-one.
              </h1>
              <p ref={paraRef} className="banner-para">
                Creating wireframes/interactive prototypes with built-in widgets
                and templates, by simply drag-and-drop.
              </p>
              <form ref={formRef as React.Ref<HTMLFormElement>} className="form-group">
                <input type="email" placeholder="Enter your email address " />
                <button type="submit" className="btn btn-yellow">
                  Try Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
