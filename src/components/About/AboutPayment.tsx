"use client";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import userShape1 from "@/assets/images/home_3/user-shape-1.svg";
import userSlider1 from "@/assets/images/home_3/user-slider-1.png";
import useGsapReveal, { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
;

export default function AboutPayment() {
  const headingRef = useGsapReveal({ animation: 'fadeInUp' });
  const feedRef = useGsapReveal({ animation: 'fadeInRight' });
  const imageRef = useGsapReveal({ animation: 'fadeInLeft' });
  const brandRefs = useGsapMultiple(6, [
    { animation: 'fadeInRight', delay: 0.1 },
    { animation: 'fadeInRight', delay: 0.3 },
    { animation: 'fadeInRight', delay: 0.5 },
    { animation: 'fadeInRight', delay: 0.7 },
    { animation: 'fadeInRight', delay: 0.9 },
    { animation: 'fadeInRight', delay: 1.1 },
  ]);

  return (
    <section className="user-area-two pt-150">
      <div className="container">
        <div className="section-title-center">
          <h2 ref={headingRef}>
            Over 15,000+ companies across 89 countries use landpagy
          </h2>
        </div>
        <div className="pt-20 pb-40 row pb-lg-70">
          <div className="col-md-6">
            <div ref={feedRef} className="customer-feed">
              <p>
                "After a comprehensive vetting process with a number of globally
                recognized vendors, Exponea stood out as the clear best choice
                for optimizing our team's performance.''
              </p>
              <div className="customer-info">
                <span className="name">Ariful Haque</span>
                <span className="pos">UI Designer, Spider Themes</span>
              </div>
              <Link href="/testimonials">
                See all customer stories <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="mt-4 col-md-6 text-end mt-md-0">
            <div ref={imageRef} className="customer-img">
              <Image src={userSlider1} alt="customer-img" />
              <div className="shape">
                <Parallax
                  translateX={["0px", "0px"]}
                  translateY={["0px", "0px"]}
                  rotateZ={[0, 90]}
                  easing="easeInOutCubic"
                  speed={-10}
                >
                  <Image src={userShape1} className="layer"
                    alt="shape" />
                </Parallax>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[0]} className="client-image">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[1]} className="client-image">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[2]} className="client-image">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[3]} className="client-image">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[4]} className="client-image">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div ref={brandRefs[5]} className="client-image">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
