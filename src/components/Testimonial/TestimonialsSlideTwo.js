"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import bannerShape4 from "@/assets/images/home_2/banner-shape-4.svg";
import testimonialShape from "@/assets/images/home_2/testimonial-shape.png";
import testimonial1 from "@/assets/images/home_2/testimonial-1.png";
import testimonial2 from "@/assets/images/home_2/testimonial-2.png";

export default function TestimonialsSlideTwo() {
  const swiperOptions = {
    loop: true,
    modules: [Pagination, Navigation],
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
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
        slidesPerView: 1.6,
        spaceBetween: 70,
      },
      1500: {
        slidesPerView: 1.95,
        spaceBetween: 70,
      },
    },
  };
  return (
    <section className="testimonial-area-five pt-140 pb-150">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={bannerShape4} alt="Decorative image" />
        </div>
        <div className="shape">
          <Image src={testimonialShape} alt="Decorative image" />
        </div>
      </div>
      <div className="container">
        <div className="mb-40 row align-items-center mb-lg-80">
          <div className="col-md-5 col-lg-4">
            <div className="section-title-left">
              <h2>Hear From Our Clients</h2>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="slider-navigation">
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
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-12 pe-lg-0">
            <div className="slider-container">
              <div
               className="swiper-container testimonial-slider-five"
                id="testimonial-5"
              >
                <Swiper {...swiperOptions} className="testimonial-slider-five">
                  <SwiperSlide className="single-testimonial">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial ">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial ">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice for optimizing our team’s
                        performance.’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial ">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice for optimizing our team’s
                        performance.’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial ">
                    <Image src={testimonial1} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice for optimizing our team’s
                        performance.’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="single-testimonial ">
                    <Image src={testimonial2} alt="Decorative image" />
                    <div className="testimonial-content">
                      <p>
                        “After a comprehensive vetting process with a number of
                        globally recognized vendors, Exponea stood out as the
                        clear best choice for optimizing our team’s
                        performance.’’
                      </p>
                      <div className="author-info">
                        <h6>Robert Albert</h6>
                        <span> Consumer Marketing </span>
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
