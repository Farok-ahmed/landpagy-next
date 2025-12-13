"use client";
import Link from "next/link";
import { useEffect } from "react";

import customerLogo from "@/assets/images/home_4/customer-logo.svg";
import customerVideo from "@/assets/images/home_4/customer-video.png";
import testShape1 from "@/assets/images/home_4/test-shape1.svg";
import testShape2 from "@/assets/images/home_4/test-shape2.svg";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import GLightbox from "glightbox";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialHRM() {
  const refs = useGsapMultiple(4, [
    { animation: 'fadeInUp' },
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'fadeInLeft' },
    { animation: 'fadeInRight' },
  ]);

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
          <Image src={testShape1} alt="shape" />
        </div>
        <div className="shape">
          <Image src={testShape2} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title-center">
            <h2 ref={refs[0]}>
              Customer Stories from Collaborate 2021
            </h2>
            <p ref={refs[1]}>
              Building a great team is hard. Using a hiring tool shouldn't be.
              Breezy gives you & your team the power to build & optimize your
              hiring process, whatever the size.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div ref={refs[2]} className="customer-video">
              <Image src={customerVideo} className="customer-img"
                
                alt="Decorative image" />
              <a
               className="play-btn"
                href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div ref={refs[3]} className="customer-testimonial">
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
                      <Image src={customerLogo} alt="Author Logo"
                       className="author-logo" />
                    </div>
                    <Link href="/" className="check-more">
                      Check more collaboration in 2021
                    </Link>
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
                      <Image src={customerLogo} alt="Author Logo"
                       className="author-logo" />
                    </div>
                    <Link href="/" className="check-more">
                      Check more collaboration in 2021
                    </Link>
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
                      <Image src={customerLogo} alt="Author Logo"
                       className="author-logo" />
                    </div>
                    <Link href="/" className="check-more">
                      Check more collaboration in 2021
                    </Link>
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
