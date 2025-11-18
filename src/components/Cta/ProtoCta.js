"use client";
import Image from "next/image";
import Link from "next/link";

import ctaShape2 from "@/assets/images/home_6/cta-shape2.png";
import ctaShape3 from "@/assets/images/home_6/cta-shape3.png";
;
import { useParallax } from "react-scroll-parallax";

export default function ProtoCta() {
  // Parallax instances
  const shape1Parallax = useParallax({
    translateX: [-10, 0],
    translateY: [0, 0],
    rotateY: 0,
  });

  const shape2Parallax = useParallax({
    translateX: [10, 0],
    translateY: [0, 0],
    rotateY: 0,
  });
  return (
    <section className="cta-area-7 pt-80 pb-80">
      <div className="bg-shapes">
        <div className="shape" ref={shape1Parallax.ref}>
          <Image src={ctaShape2} alt="Shape 1" />
        </div>
        <div className="shape" ref={shape2Parallax.ref}>
          <Image src={ctaShape3} alt="Shape 2" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2
             className="cta-title mb-15"
             
            >
              Get started now. It’s free.
            </h2>
            <p
             className="title-text mb-40"
             
            >
              Empower your entire team today
            </p>
            <Link href="/" className="cta-btn btn-yellow">
              Try for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
