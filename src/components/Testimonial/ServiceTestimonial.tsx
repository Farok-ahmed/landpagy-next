"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import leafTop from "@/assets/images/home_6/leaf-top.svg";
import testimonial1 from "@/assets/images/home_6/testimonial-1.png";
import testimonial2 from "@/assets/images/home_6/testimonial-2.png";

export default function ServiceTestimonial() {
  const swiperOptions = {
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "fraction" as const,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 1.5,
        spaceBetween: 70,
      },
    },
  };
  return (
    <section className="bg-white testimonial-area-five service-testimonial-area">
      <div className="shapes">
        <Image src={leafTop} alt="Decorative image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center section-title">
              <h2>Client's about our services</h2>
              <p>
                We are very proud of the service we provide and stand by every
                product we carry. Read our testimonials from our happy
                customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-3 align-content-between">
            <div className="section-title-left h-100 d-flex flex-lg-column flex-sm-row flex-column justify-content-lg-end justify-content-between">
              <h3>Hear From Our Clients</h3>
              <div className="slider-navigation mt-140">
                <div className="swiper-button-prev">
                  <i className="arrow_left"></i>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next">
                  <i className="arrow_right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 pe-lg-0">
            <div className="slider-container">
              <div className="testimonial-slider-five">
                <Swiper {...swiperOptions}>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Shafi Frank |<span> Principal UX Designer, Monna</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Juhan Ahamed |
                        <span> Frontend Developer, Spider Themes</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Shafi Frank |<span> Principal UX Designer, Monna</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Juhan Ahamed |
                        <span> Frontend Developer, Spider Themes</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Shafi Frank |<span> Principal UX Designer, Monna</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “Landpagy performance gets an upgrade. Faster patch
                        editor, faster viewer, faster everything.’’
                      </p>
                      <div className="author-info">
                        Juhan Ahamed |
                        <span> Frontend Developer, Spider Themes</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
