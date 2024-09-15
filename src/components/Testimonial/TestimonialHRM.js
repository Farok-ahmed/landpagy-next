"use client";
import React, { useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import GLightbox from "glightbox";

export default function TestimonialHRM() {
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  const swiperOptions = {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 60,
      },
    },
  };
  return (
    <section className="testimonial-area-seven pt-125 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/home_4/test-shape1.svg" alt="shape" />
        </div>
        <div className="shape">
          <img src="/images/home_4/test-shape2.svg" alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title-center">
            <h2 className="wow fadeInUp">
              Customer Stories from Collaborate 2021
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Building a great team is hard. Using a hiring tool shouldn't be.
              Breezy gives you & your team the power to build & optimize your
              hiring process, whatever the size.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="customer-video wow fadeInLeft">
              <img
                className="customer-img"
                src=".//images/home_4/customer-video.png"
                alt=""
              />
              <a
                className="play-btn"
                href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="customer-testimonial  wow fadeInRight">
              <Swiper {...swiperOptions}>
                <SwiperSlide>
                  <div className="testimonial-reviews">
                    <p className="testimonial-text">
                      <i className="testimonial-icon1 fas fa-quote-left"></i>
                      I’m really grateful for the way that my company has
                      adopted Landpagy this year, especially while things are
                      difficult.
                      <i className="testimonial-icon2 fas fa-quote-right"></i>
                    </p>
                    <div className="author-wrap">
                      <p className="testimonial-author">
                        <span>Ariful Haque, </span> UI designer
                      </p>
                      <img
                        src=".//images/home_4/customer-logo.svg"
                        alt="Author Logo"
                        className="author-logo"
                      />
                    </div>
                    <a className="check-more" href="/">
                      Check more collaboration in 2021
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-reviews">
                    <p className="testimonial-text">
                      <i className="testimonial-icon1 fas fa-quote-left"></i>
                      I’m really grateful for the way that my company has
                      adopted Landpagy this year, especially while things are
                      difficult.
                      <i className="testimonial-icon2 fas fa-quote-right"></i>
                    </p>
                    <div className="author-wrap">
                      <p className="testimonial-author">
                        <span>Ariful Haque, </span> UI designer
                      </p>
                      <img
                        src=".//images/home_4/customer-logo.svg"
                        alt="Author Logo"
                        className="author-logo"
                      />
                    </div>
                    <a className="check-more" href="/">
                      Check more collaboration in 2021
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-reviews">
                    <p className="testimonial-text">
                      <i className="testimonial-icon1 fas fa-quote-left"></i>
                      I’m really grateful for the way that my company has
                      adopted Landpagy this year, especially while things are
                      difficult.
                      <i className="testimonial-icon2 fas fa-quote-right"></i>
                    </p>
                    <div className="author-wrap">
                      <p className="testimonial-author">
                        <span>Ariful Haque, </span> UI designer
                      </p>
                      <img
                        src=".//images/home_4/customer-logo.svg"
                        alt="Author Logo"
                        className="author-logo"
                      />
                    </div>
                    <a className="check-more" href="/">
                      Check more collaboration in 2021
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="slider-navigation">
                <div className="swiper-button-prev">
                  <i className="arrow_left"></i>
                </div>
                <div className="swiper-button-next">
                  <i className="arrow_right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
