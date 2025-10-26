"use client";
import Image from "next/image";
import object2 from "@/assets/images/home_2/object2.svg";
import object1 from "@/assets/images/home_2/object1.svg";
import dashboard1 from "@/assets/images/home_2/dashboard-1.png";
import dashboard2 from "@/assets/images/home_2/dashboard-2.png";
import featureShape from "@/assets/images/home_2/feature-shape.svg";
;
import { Parallax } from "react-scroll-parallax";

export default function FeatureFour() {
  return (
    <section className="features-area-ten pt-150">
      <div className="bg-shapes">
        <div className="shapes">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["20px", "0px"]}
            rotateZ={[0, 500]}
            easing="easeInQuad"
          >
            <Image src={object2} alt="Object" />
          </Parallax>
        </div>
        <div className="shapes">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["-20px", "20px"]}
            rotateZ={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={object1} alt="Object" />
          </Parallax>
        </div>
        <div className="shapes">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["20px", "0px"]}
            rotateZ={[0, 500]}
            easing="easeInQuad"
          >
            <Image src={object2} alt="Object" />
          </Parallax>
        </div>
        <div className="shapes">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["20px", "0px"]}
            rotateZ={[0, 500]}
            easing="easeInQuad"
          >
            <Image src={object2} alt="Object" />
          </Parallax>
        </div>
        <div className="shapes">
          <Parallax
            translateX={["50px", "0px"]}
            translateY={["-20px", "20px"]}
            rotateZ={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={object1} alt="Object" />
          </Parallax>
        </div>
        <div className="shapes">
          <Parallax
            translateX={["-50px", "50px"]}
            translateY={["20px", "0px"]}
            rotateZ={[0, 0]}
            easing="easeInQuad"
          >
            <Image src={object2} alt="Object" />
          </Parallax>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center gy-lg-0 gy-4">
          <div className="col-lg-6 wow fadeInRight">
            <h2>Discover important insights on your dashboard</h2>
            <p>
              Aliquam interdum risus vitae lectus convallis sodales quis
              dignissim mi. Proin sem risus, aliquet in pretium eu, ultrices eu
              nibh. Sed eu metus mollis, fringilla ligula quis.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="dash-img wow fadeInLeft">
              <Image src={dashboard1} alt="" />
              <Image src={dashboard2} alt="" />
              <Image src={featureShape} className="shape"
                
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
