"use client";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import { useEffect } from "react";

import banner from "@/assets/images/home_7/banner.png";
import bannerShape2 from "@/assets/images/home_7/shapes/banner-shape2.png";
import bannerShape3 from "@/assets/images/home_7/shapes/banner-shape3.png";
import textShape from "@/assets/images/home_7/shapes/text-shape.svg";
import GLightbox from "glightbox";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

export default function HeroBannerThree() {
  const refs = useGsapMultiple(5, [
    { animation: 'fadeInDown' },
    { animation: 'fadeInLeft' },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.3 },
    { animation: 'fadeInRight', delay: 0.3 },
  ]);

  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="banner-area-7">
      <div className="banner-shapes">
        <div className="shape">
          <Image src={bannerShape2} alt="shapes" />
        </div>
        <div className="shape">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["0px", "0px"]}
            rotateY={[0, 0]}
          >
            <Image src={bannerShape3} alt="shapes" />
          </Parallax>
        </div>
        <div ref={refs[0]} className="shape">
          <Image src={banner} alt="shapes" />
        </div>
      </div>
      <div className="container container-soft2">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div ref={refs[1]} className="banner-left">
              <h2 ref={refs[2]} className="banner-title">
                Create Your Desire {""}
                <span>
                  Business.
                  <Image src={textShape} alt="Decorative image" />
                </span>
              </h2>
              <p ref={refs[3]} className="banner-para">
                100+ Home Pages With Eye Catching Inner Pages. Over 170+
                interface blocks.All-in-one WordPress theme that’s modern, super
                customizable, & blazing fast.
              </p>
              <Link href="/pricing-table-one" className="btn border-btn">
                Buy Now
              </Link>
              <Link href="/contact-one" className="btn white-btn">
                See Demo
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div ref={refs[4]} className="banner-right">
              <Link
               className="play-btn"
                data-fancybox
                href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
              >
                <i className="fas fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
