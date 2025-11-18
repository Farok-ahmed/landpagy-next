"use client";
import React, { useEffect } from "react";
import GLightbox from "glightbox";
import useGsapReveal, { useGsapMultiple } from "@/hooks/useGsapReveal";
import Link from "next/link";
import Image from "next/image";
import aboutShape from "@/assets/images/about_2/shape/about-shape.png";
import aboutVideo from "@/assets/images/about_2/about-video.png";
export default function AboutTwoHero() {
  const titleRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const paraRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.3 });
  const buttonRefs = useGsapMultiple(2, [
    { animation: 'fadeInLeft', delay: 0.4 },
    { animation: 'fadeInLeft', delay: 0.4 },
  ]);
  const bannerRightRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.2 });
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="about-banner-2">
      <div className="banner-shapes">
        <div className="shape">
          <Image src={aboutShape} alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div className="banner-left">
              <h1 ref={titleRef} className="banner-title">
                Your #1 Premier Partner for business growth.
              </h1>
              <p ref={paraRef} className="banner-para">
                Create deeper relationships with your customers using the
                world’s Best Software solution that’s available with Einstein
                AI.
              </p>
              <Link href="/" ref={buttonRefs[0]} className="btn">
                Watch Demos
              </Link>
              <Link href="/" ref={buttonRefs[1]} className="btn btn-red">
                Explore Products
              </Link>
            </div>
          </div>

          <div className="col-md-5">
            <div ref={bannerRightRef} className="banner-right">
              <div className="video-wrapp">
                <div className="video-img">
                  <Image src={aboutVideo} alt="Video" />
                </div>
                <Link
                 className="play-btn"
                  href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
