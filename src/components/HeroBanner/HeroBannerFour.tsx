"use client";
import React from "react";
import Image from "next/image";
import treeWater from "@/assets/images/home_3/tree-water.png";
import cloud1 from "@/assets/images/home_3/cloud-1.png";
import cloud2 from "@/assets/images/home_3/cloud-2.png";
import cloud3 from "@/assets/images/home_3/cloud-3.png";
import bird from "@/assets/images/home_3/bird.png";
import bannerBgShape1 from "@/assets/images/home_3/banner-bg-shape-1.png";
import bannerBgShape2 from "@/assets/images/home_3/banner-bg-shape-2.png";
import leaf from "@/assets/images/home_3/leaf.svg";
import treeField from "@/assets/images/home_3/tree-field.png";
import tree1 from "@/assets/images/home_3/tree-1.png";
import tree2 from "@/assets/images/home_3/tree-2.png";
import treeDollar from "@/assets/images/home_3/tree-dollar.png";
import tree3 from "@/assets/images/home_3/tree-3.png";
import tree4 from "@/assets/images/home_3/tree-4.png";
import { useParallax } from "react-scroll-parallax";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function HeroBannerFour() {
  // GSAP animation refs
  const treeWaterRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.4 });
  const cloud1ImgRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.1 });
  const cloud2ImgRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.25 });
  const cloud3ImgRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.4 });
  const tree1Ref = useGsapReveal({ animation: 'fadeIn', delay: 0 });
  const treeTopRef = useGsapReveal({ animation: 'fadeIn', delay: 0.55 });
  const treeDollarRef = useGsapReveal({ animation: 'fadeIn', delay: 1.5 });
  const tree3Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.3 });
  const tree4Ref = useGsapReveal({ animation: 'fadeIn', delay: 0.5 });

  // Parallax refs
  const birdParallax = useParallax({
    translateX: [-150, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const cloud1Parallax = useParallax({
    translateX: [-50, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: 20,
  });
  const cloud2Parallax = useParallax({
    translateX: [-70, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: 20,
  });
  const cloud3Parallax = useParallax({
    translateX: [-50, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: 20,
  });
  return (
    <section className="banner-area-3" id="banner_animation">
      <div className="banner-shape">
        <div className="shape" ref={treeWaterRef}>
          <Image src={treeWater} alt="Decorative image" />
        </div>
        <div className="shape object-element">
          <div id="element1" ref={cloud1Parallax.ref as React.RefObject<HTMLDivElement>}>
            <div ref={cloud1ImgRef}>
              <Image src={cloud1} data-depth="0.9"
               className="layer"
                alt="Decorative image" />
            </div>
          </div>
        </div>
        <div className="shape object-element">
          <div id="element2" ref={cloud2Parallax.ref as React.RefObject<HTMLDivElement>}>
            <div ref={cloud2ImgRef}>
              <Image src={cloud2} data-depth="0.5"
               className="layer"
                alt="Decorative image" />
            </div>
          </div>
        </div>
        <div className="shape object-element">
          <div id="element3" ref={cloud3Parallax.ref as React.RefObject<HTMLDivElement>}>
            <div ref={cloud3ImgRef}>
              <Image src={cloud3} data-depth="0.7"
               className="layer"
                alt="Decorative image" />
            </div>
          </div>
        </div>
        <div className="shape" ref={birdParallax.ref as React.RefObject<HTMLDivElement>}>
          <Image src={bird} className="layer" alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={bannerBgShape1} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={bannerBgShape2} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={leaf} alt="Decorative image" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-7 col-lg-8">
            <div className="banner-left">
              <h1>Grow your business with landpagy</h1>
              <p className="banner-para">
                We provide all the best features so you can stop focusing on
                your project management and get back to your life’s work.
              </p>
              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  Book A Demo
                </button>
              </form>
              <span className="sub-content">
                Free 14 days trial. <strong>No credit</strong> card required
              </span>
            </div>
          </div>
          <div className="text-center col-xl-5 text-xl-start">
            <div className="banner-right">
              <Image src={treeField} className="tree-field"
                
                alt="tree" />
              <div className="tree">
                <div ref={tree1Ref}>
                  <Image src={tree1} alt="tree" />
                </div>

                <div className="tree-top" ref={treeTopRef}>
                  <Image src={tree2} alt="tree" />

                  <div className="dollar" ref={treeDollarRef}>
                    <Image src={treeDollar} alt="tree" />
                  </div>
                </div>
              </div>
              <div className="tree" ref={tree3Ref}>
                <Image src={tree3} alt="tree" />
              </div>
              <div className="tree" ref={tree4Ref}>
                <Image src={tree4} alt="tree" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
