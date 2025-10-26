"use client";
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
;
import { useParallax } from "react-scroll-parallax";

export default function HeroBannerFour() {
  const bird = useParallax({
    translateX: [-150, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: [-10],
  });
  const cloud1 = useParallax({
    translateX: [-50, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: [20],
  });
  const cloud2 = useParallax({
    translateX: [-70, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: [20],
  });
  const cloud3 = useParallax({
    translateX: [-50, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 0],
    speed: [20],
  });
  return (
    <section className="banner-area-3" id="banner_animation">
      <div className="banner-shape">
        <div className="shape">
          <Image src={treeWater} className="wow slideInRight"
            data-wow-delay="0.4s"
            
            alt="" />
        </div>
        <div className="shape object-element">
          <div id="element1" ref={cloud1.ref}>
            <Image src={cloud1} data-depth="0.9"
              className="wow slideInRight layer"
              data-wow-delay="0.1s"
              
              alt="" />
          </div>
        </div>
        <div className="shape object-element">
          <div id="element2" ref={cloud2.ref}>
            <Image src={cloud2} data-depth="0.5"
              className="wow slideInRight layer"
              data-wow-delay="0.25s"
              
              alt="" />
          </div>
        </div>
        <div className="shape object-element">
          <div id="element3" ref={cloud3.ref}>
            <Image src={cloud3} data-depth="0.7"
              className="wow slideInRight layer"
              data-wow-delay="0.4s"
              
              alt="" />
          </div>
        </div>
        <div className="shape" ref={bird.ref}>
          <Image src={bird} className="layer" alt="" />
        </div>
        <div className="shape">
          <Image src={bannerBgShape1} alt="" />
        </div>
        <div className="shape">
          <Image src={bannerBgShape2} alt="" />
        </div>
        <div className="shape">
          <Image src={leaf} alt="" />
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
                <Image src={tree1} className="wow zoomIn"
                  
                  alt="tree" />

                <div className="tree-top wow zoomIn" data-wow-delay="0.55s">
                  <Image src={tree2} alt="tree" />

                  <div className="dollar wow zoomIn" data-wow-delay="0.55s">
                    <Image src={treeDollar} className="wow flip"
                      data-wow-delay="1.5s"
                      
                      alt="tree" />
                  </div>
                </div>
              </div>
              <div className="tree">
                <Image src={tree3} className="wow zoomIn"
                  data-wow-delay="0.3s"
                  
                  alt="tree" />
              </div>
              <div className="tree">
                <Image src={tree4} className="wow zoomIn"
                  data-wow-delay="0.5s"
                  
                  alt="tree" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
