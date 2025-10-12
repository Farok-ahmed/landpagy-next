"use client";
;
import { useParallax } from "react-scroll-parallax";

export default function NewsLetterTwo() {
  const shape1Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [40, 0, "easeInQuad"],
    rotateY: [0, 0],
  });
  const shape2Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateX: [0, 0],
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateZ: [0, 200],
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateZ: [0, 100],
  });
  const shape5Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [200, 0],
  });
  const shape6Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [-40, 40, "easeInQuad"],
    rotateY: [0, 0],
  });
  const shape7Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateZ: [0, 100],
  });
  const shape8Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: [0, 9],
    speed: -10,
  });
  return (
    <section className="cta-area-four pt-105 pb-105 wow fadeInUp animate__fast">
      <div className="bg-shape">
        <div className="shape layer" ref={shape1Parallax.ref}></div>
        <div className="shape layer" ref={shape2Parallax.ref}></div>
        <div className="shape layer" ref={shape3Parallax.ref}></div>
        <div className="shape layer" ref={shape4Parallax.ref}></div>
        <div className="shape layer" ref={shape5Parallax.ref}></div>
        <div className="shape layer" ref={shape6Parallax.ref}></div>
        <div className="shape layer" ref={shape7Parallax.ref}></div>
        <div className="shape layer" ref={shape8Parallax.ref}></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="text-center col-12">
            <div className="section-title-center">
              <h2 className="mt-n3 mt-md-n4">Get free for 14 Days</h2>
              <p>
                Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus
                augue fermentum dui aliquam dui vel.
              </p>
            </div>
            <form className="mx-auto mt-0 form-group">
              <input type="email" placeholder="Enter your email to book demo" />
              <button type="submit" className="btn btn-red">
                Book A Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
