"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function WhyChooseHRM() {
  const swiperOptions = {
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      1200: {
        slidesPerView: 1.2,
        spaceBetween: 150,
      },
    },
  };
  return (
    <section className="testimonial-area-eight pt-125 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/home_4/test-shape2.svg" alt="shape" />
        </div>
        <div className="shape">
          <img src="/images/home_4/test-shape3.svg" alt="shape" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">Why they choose us</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Nothing but our customers' opinions can describe us in the best
                way. Here is what they said about us.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            {...swiperOptions}
            className="overflow-visible testimonial-slider-eight"
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="img-box">
                  <div className="img-shape"></div>
                  <div className="img-shape">
                    <img src=".//images/home_4/test-shape4.svg" alt="" />
                  </div>
                  <img
                    src=".//images/home_4/test-item-img1.jpg"
                    alt="User"
                    className="testimonial-item-img"
                  />
                </div>
                <div className="testimonial-content">
                  <i className="testimonial-icon icon_quotations mb-25"></i>
                  <p className="author-text">
                    I would highly recommend landpagy based on the strenth of h
                    their support team.They have been over backward to ensure
                    the success this implementions.
                  </p>
                  <p className="author-info">
                    <span className="author-name">EH Jewel</span>
                    CEO, @ Spider Themes
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="img-box">
                  <div className="img-shape"></div>
                  <div className="img-shape">
                    <img src=".//images/home_4/test-shape4.svg" alt="" />
                  </div>
                  <img
                    src=".//images/home_4/test-item-img2.jpg"
                    alt="User"
                    className="testimonial-item-img"
                  />
                </div>
                <div className="testimonial-content">
                  <i className="testimonial-icon icon_quotations mb-25"></i>
                  <p className="author-text">
                    I would highly recommend landpagy based on the strenth of h
                    their support team.They have been over backward to ensure
                    the success this implementions.
                  </p>
                  <p className="author-info">
                    <span className="author-name">Juhan Ahamed</span>
                    Frontend Dev, @ Spider Themes
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-navigation">
              <div className="swiper-button-prev">
                <i className="arrow_left"></i>
              </div>
              <div className="swiper-button-next">
                <i className="arrow_right"></i>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
