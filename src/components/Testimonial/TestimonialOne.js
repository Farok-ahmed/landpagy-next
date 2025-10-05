"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialOne = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    const container = document.querySelector(".scroll-container");

    const ctx = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "center center",
        trigger: container,
        pin: container,
        scrub: 3,
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-black testimonial-area testimonial wow fadeInUp animate__fast">
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
          <div id="scroll-container" className="scroll-container">
            <div className="scroll-wrapper">
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
                                <img
                                  src="/images/testimonial/testimonial-1.jpg"
                                  alt="Testimonial"
                                />
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
                          <img
                            src="/images/testimonial/testimonial.png"
                            alt="Testimonial Right"
                          />
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
