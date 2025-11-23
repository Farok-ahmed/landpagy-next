"use client";
import Link from "next/link";
import Image from "next/image";
import poly1 from "@/assets/images/home_8/icons/Poly1.svg";
import poly2 from "@/assets/images/home_8/icons/Poly2.svg";
import logo1 from "@/assets/images/home_8/icons/logo1.svg";
import shape1 from "@/assets/images/home_8/icons/shape1.svg";
import logo2 from "@/assets/images/home_8/icons/logo2.svg";
import shape2 from "@/assets/images/home_8/icons/shape2.svg";
import logo3 from "@/assets/images/home_8/icons/logo3.svg";
import shape3 from "@/assets/images/home_8/icons/shape3.svg";
import logo4 from "@/assets/images/home_8/icons/logo4.svg";
import shape4 from "@/assets/images/home_8/icons/shape4.svg";
import bannerShape from "@/assets/images/home_8/shape/banner-shape.svg";
import addUser from "@/assets/images/home_8/icons/add-user.svg";
import banner from "@/assets/images/home_8/banner.png";
import { useGsapReveal } from "@/hooks/useGsapReveal";

import { useParallax } from "react-scroll-parallax";

export default function HeroBilling() {
  const shape1LeftRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const shape2LeftRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const shape3RightRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.2 });
  const shape4RightRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.2 });
  const titleRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.3 });
  const btnRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.4 });
  const imgRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.5 });

  const shape1Parallax = useParallax({
    translateX: [-20, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: 0,
    speed: -10,
  });

  const shape2Parallax = useParallax({
    translateX: [-30, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });

  const shape3Parallax = useParallax({
    translateX: [30, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });

  const shape4Parallax = useParallax({
    translateX: [20, 0, "easeInQuad"],
    translateY: [0, 0],
    rotateY: 0,
    speed: -10,
  });
  return (
    <section className="billing-banner-area bg-feta pt-140 pb-140">
      <div className="bg-shapes">
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape circle"></div>
        <div className="shape">
          <Image src={poly1} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={poly2} alt="Decorative image" />
        </div>
        <div ref={shape1LeftRef} className="shape">
          <Image src={logo1} alt="Logo 1" />
          <Image src={shape1} alt="Shape 1"
            ref={shape1Parallax.ref}
           className="layer" />
        </div>
        <div ref={shape2LeftRef} className="shape">
          <Image src={logo2} alt="Logo 2" />
          <Image src={shape2} alt="Shape 2"
            ref={shape2Parallax.ref}
           className="layer" />
        </div>
        <div ref={shape3RightRef} className="shape">
          <Image src={logo3} alt="Logo 3" />
          <Image src={shape3} alt="Shape 3"
            ref={shape3Parallax.ref}
           className="layer" />
        </div>
        <div ref={shape4RightRef} className="shape">
          <Image src={logo4} alt="Logo 4" />
          <Image src={shape4} alt="Shape 4"
            ref={shape4Parallax.ref}
           className="layer" />
        </div>
        <div className="shape">
          <Image src={bannerShape} alt="Decorative image" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center banner-content pt-80">
              <h1
                ref={titleRef}
               className="banner-title mb-35"
              >
                Best Accounts Billing Software
              </h1>
              <Link
                href="/sign-up"
                ref={btnRef}
               className="btn btn-red"
              >
                <Image src={addUser} alt="Icon"
                 className="icon" />
                Join Us
              </Link>
              <Image src={banner} alt="Decorative image"
                ref={imgRef}
               className="mx-auto banner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
