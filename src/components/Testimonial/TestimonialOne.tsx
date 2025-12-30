"use client";
import testimonial1 from "@/assets/images/testimonial/testimonial-1.jpg";
import testimonial from "@/assets/images/testimonial/testimonial.png";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialOne = () => {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const panels = wrapper.querySelectorAll(".panel");

    if (panels.length === 0) return;

    // Calculate the total scroll distance (wrapper width minus container visible width)
    const getScrollAmount = () => {
      return -(wrapper.scrollWidth - container.offsetWidth);
    };

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: () => `+=${wrapper.scrollWidth - container.offsetWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black testimonial-area testimonial">
      <div id="fixedWrapper" className="pt-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center testimonial-title">
                <h2 className="text-white mt-n3">
                  Choose a workflow or make your own
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div ref={containerRef} id="scroll-container" className="scroll-container">
            <div ref={wrapperRef} className="scroll-wrapper">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="panel max-width" key={index}>
                  <div className="testimonial-wrapper">
                    <div className="row align-items-center">
                      <div className="col-7 col-md-7">
                        <div className="testimonial-content">
                          <h3 className="mt-n4">Plan & Create</h3>
                          <span>
                            Elit sed sapien viverra eleifend malesuada purus
                            pellentesque ut eget.
                          </span>
                          <p>
                            Ligula ridiculus lacinia mattis non volutpat.
                            Pellentesque id aenean diam aenean tincidunt non
                            fermentum nunc mattis.
                          </p>
                          <div className="testimonial-review">
                            <i className="fas fa-quote-left"></i>
                            <p>
                              Startup Landing is a great theme. Ligula ridiculus
                              lacinia mattis non volutpat.
                              <span>Ligula ridiculus lacinia</span>
                            </p>
                            <div className="testimonial-author">
                              <div className="testimonial-author-image">
                                <Image src={testimonial1} alt="Testimonial" />
                              </div>
                              <div className="testimonial-author-name">
                                <h4>Jesus Requena</h4>
                                <span>Support Engineer, Aliexpress</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 col-md-5">
                        <div className="testimonial-right-image">
                          <Image src={testimonial} alt="Testimonial Right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
